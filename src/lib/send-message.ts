import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "./contact-schema";

export type SendResult = { ok: true } | { ok: false; error: string };

// NEXT_PUBLIC_* values are inlined at build time; set them in .env.local (see .env.example).
const config = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

/**
 * Sends the contact form through EmailJS. The keys below are the variables
 * available in the EmailJS template: {{fullName}}, {{phoneNumber}}, {{email}}, {{message}}.
 */
export async function sendMessage(values: ContactFormValues): Promise<SendResult> {
  const { serviceId, templateId, publicKey } = config;
  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS is not configured: set the NEXT_PUBLIC_EMAILJS_* variables in .env.local.");
    return { ok: false, error: "not-configured" };
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        fullName: values.name,
        phoneNumber: values.phone,
        email: values.email,
        message: values.message,
      },
      {
        publicKey,
        // Ignore repeat submissions from the same browser within 10 seconds.
        limitRate: { id: "contact-form", throttle: 10_000 },
      },
    );
    return { ok: true };
  } catch (error) {
    console.error("EmailJS send failed", error);
    return { ok: false, error: "send-failed" };
  }
}
