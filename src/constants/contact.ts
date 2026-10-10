import type { SectionIntro } from "@/types/content";
import { PRIMARY_PHONE } from "./clinic";

export const CONTACT = {
  intro: {
    eyebrow: "Contact",
    title: "Let’s Take Care of Your Smile",
    lead: "Have a question or need more information about our services? Get in touch with our team. We’d be happy to help.",
  } satisfies SectionIntro,
  labels: {
    address: "Address",
    phone: "Phone",
    email: "Email",
  },
  map: {
    title: "Map placeholder",
    caption: "Embed after the clinic pin is verified",
    directionsLabel: "Get Directions",
    embedTitle: "Map showing Care 32 Dental in Duwakot Mod, Bhaktapur",
  },
  form: {
    title: "Send us a message",
    note: "We usually reply by phone or email. Fields marked * are required.",
    fields: {
      name: { label: "Full Name *", placeholder: "e.g. Sita Shrestha" },
      phone: { label: "Phone Number *", placeholder: "+977 98XXXXXXXX" },
      email: { label: "Email Address *", placeholder: "you@example.com" },
      message: {
        label: "Message *",
        placeholder: "Tell us how we can help — a checkup, a concern, or a question about treatment.",
      },
    },
    errors: {
      nameRequired: "Please enter your full name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "That email doesn’t look right — please check it.",
      phoneRequired: "Please enter your phone number.",
      phoneInvalid: "Enter a valid phone number, or leave it blank.",
      messageRequired: "Let us know how we can help.",
      messageShort: "Please add a little more detail.",
    },
    submit: "Get in Touch",
    sending: "Sending…",
    invalidAlert: "Please fix the highlighted fields and try again.",
    failedAlert: `Something went wrong while sending. Please call ${PRIMARY_PHONE.display} to reach the clinic.`,
    success: `Thanks — your message has been sent. We’ll get back to you soon. For anything urgent, call ${PRIMARY_PHONE.display}.`,
  },
};
