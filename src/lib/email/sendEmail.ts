// lib/email/sendEmail.ts
import { resendClient, sendgridClient } from "./providers";

type EmailPayload = {
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

export async function sendEmail({ to, subject, text, html }: EmailPayload) {
  const message = {
    text: text ?? "Plain text fallback content.",
    from: "you@yourdomain.com",
    to,
    subject,
    attachment: [{ data: html ?? "", alternative: true }],
  };

  // Define both providers
  const providers = [
    { name: "Resend", client: resendClient },
    { name: "SendGrid", client: sendgridClient },
  ];

  // Randomize provider order
  const [primary, secondary] = providers.sort(() => 0.5 - Math.random());

  try {
    console.log(`📤 Trying to send via ${primary.name}`);
    const res = await primary.client.sendAsync(message);
    console.log(`✅ Email sent via ${primary.name}`);
    return res;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    console.warn(
      `⚠️ Failed with ${primary.name}. Retrying with ${secondary.name}...`,
    );
    try {
      const res = await secondary.client.sendAsync(message);
      console.log(`✅ Email sent via ${secondary.name}`);
      return res;
    } catch (finalErr) {
      console.error(`❌ Both providers failed.`);
      throw finalErr;
    }
  }
}
