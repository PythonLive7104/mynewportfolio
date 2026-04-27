import { Resend } from "resend";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email is not configured on the server." }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!to) {
    return Response.json({ error: "CONTACT_TO_EMAIL is not set." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  const nameStr = typeof name === "string" ? name.trim() : "";
  const emailStr = typeof email === "string" ? email.trim() : "";
  const messageStr = typeof message === "string" ? message.trim() : "";

  if (!emailStr || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr)) {
    return Response.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (messageStr.length < 10) {
    return Response.json({ error: "Message must be at least 10 characters." }, { status: 400 });
  }
  if (messageStr.length > 10000) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  const from = process.env.RESEND_FROM?.trim() ?? "Portfolio <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: emailStr,
    subject: `Portfolio contact: ${nameStr || "Someone"}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(nameStr || "—")}</p>
<p><strong>Email:</strong> ${escapeHtml(emailStr)}</p>
<hr style="border:none;border-top:1px solid #e4e4e7;margin:16px 0" />
<p>${escapeHtml(messageStr).replace(/\n/g, "<br/>")}</p>`,
  });

  if (error) {
    console.error("[contact]", error);
    return Response.json({ error: "Could not send your message. Try again later." }, { status: 502 });
  }

  return Response.json({ ok: true, id: data?.id });
}
