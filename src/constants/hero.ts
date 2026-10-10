import type { Asset } from "@/types/content";

const shared = {
  badge: "Dental clinic in Duwakot Mod, Bhaktapur",
  subtitle: "Committed to your oral health",
  body: "Personalized dental care, modern treatments, and a comfortable experience for every smile.",
  primaryCta: { label: "Contact Us", href: "#contact" },
  secondaryCta: { label: "Explore Our Services", href: "#services" },
  callLabel: "Call the clinic",
  visitLabel: "Visit us",
  /** Set to an entry from ASSETS (e.g. ASSETS.hero) once the photo is added. */
  photo: null as Asset | null,
  photoPlaceholder: {
    label: "Hero photo",
    caption: "Dentist welcoming a patient in a bright, modern treatment room",
  },
  trustCard: { title: "Gentle, careful treatment", text: "Comfort at every step" },
  teamCard: {
    title: "A caring local team",
    text: "for every age",
    initials: ["AS", "SM", "RK"],
  },
};

export const HERO = {
  main: {
    ...shared,
    title: { line1: "Care 32", line2: "Dental" },
  },
  thirtyTwo: {
    ...shared,
    title: { line1: "Care", line2: "Thirty Two", line3: "Dental", pill: "32" },
  },
};
