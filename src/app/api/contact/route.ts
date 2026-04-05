import nodemailer from "nodemailer";

export const runtime = "nodejs";

const DEFAULT_TO = "daksha.patel@alliedbiologistics.com";

const MAX = {
  name: 200,
  email: 320,
  phone: 40,
  message: 10000,
} as const;

function stripHeaderInjection(value: string): string {
  return value.replace(/[\r\n]/g, " ").trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid payload." }, { status: 400 });
  }

  const {
    name: rawName,
    email: rawEmail,
    phone: rawPhone,
    message: rawMessage,
    website: honeypot,
  } = body as Record<string, unknown>;

  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (
    typeof rawName !== "string" ||
    typeof rawEmail !== "string" ||
    typeof rawMessage !== "string"
  ) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const name = stripHeaderInjection(rawName).slice(0, MAX.name);
  const email = stripHeaderInjection(rawEmail).slice(0, MAX.email);
  const phone =
    typeof rawPhone === "string"
      ? stripHeaderInjection(rawPhone).slice(0, MAX.phone)
      : "";
  const message = rawMessage.trim().slice(0, MAX.message);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in name, email, and message." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD ?? process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO;
  const from =
    process.env.SMTP_FROM ??
    process.env.FROM_EMAIL ??
    (user ? `Allied Biologistics <${user}>` : undefined);

  if (!host || !user || !pass || !from) {
    console.error("Contact API: SMTP environment variables are not fully configured.");
    return Response.json(
      {
        error:
          "Email delivery is not configured on the server. Please call us or try again later.",
      },
      { status: 503 }
    );
  }

  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const text = [
    `New inquiry from the Allied Biologistics website`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <h2 style="font-family:sans-serif;color:#0f2a3f;">Website inquiry</h2>
    <table style="font-family:sans-serif;font-size:14px;color:#333;">
      <tr><td style="padding:4px 12px 4px 0;"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;"><strong>Phone</strong></td><td>${escapeHtml(phone || "—")}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;color:#333;"><strong>Message</strong></p>
    <p style="font-family:sans-serif;font-size:14px;color:#333;white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Website inquiry — ${name}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact API: sendMail failed", err);
    return Response.json(
      { error: "Could not send your message. Please try again or call us directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
