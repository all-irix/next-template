// lib/email/providers.ts
import { SMTPClient } from "emailjs";

export const resendClient = new SMTPClient({
  user: "resend",
  password: process.env.RESEND_API_KEY!,
  host: "smtp.resend.com",
  ssl: false,
  port: 587,
});

export const sendgridClient = new SMTPClient({
  user: "apikey",
  password: process.env.SENDGRID_API_KEY!,
  host: "smtp.sendgrid.net",
  ssl: false,
  port: 587,
});
