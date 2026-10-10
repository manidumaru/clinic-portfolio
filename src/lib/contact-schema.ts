import { z } from "zod";
import { CONTACT } from "@/constants/contact";

const msg = CONTACT.form.errors;

export const contactSchema = z.object({
  name: z.string().trim().min(1, msg.nameRequired),
  phone: z
    .string()
    .trim()
    .min(1, msg.phoneRequired)
    .refine((v) => v === "" || /^\+?[\d\s-]{7,16}$/.test(v), msg.phoneInvalid),
  email: z
    .string()
    .trim()
    .min(1, msg.emailRequired)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, msg.emailInvalid),
  message: z.string().trim().min(1, msg.messageRequired).min(10, msg.messageShort),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
