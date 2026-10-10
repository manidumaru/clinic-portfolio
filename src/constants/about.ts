import type { Asset, Feature, SectionIntro } from "@/types/content";

export const ABOUT = {
  intro: {
    eyebrow: "About our clinic",
    title: "Your Smile Deserves Thoughtful Care",
    lead: "At Care 32 Dental, we believe a healthy smile begins with trust, comfort, and personalized attention. Our goal is to make every visit a positive experience through attentive care, modern dental practices, and a commitment to your long-term oral health.",
  } satisfies SectionIntro,
  /** Set to an entry from ASSETS (e.g. ASSETS.clinic) once the photo is added. */
  photo: null as Asset | null,
  photoPlaceholder: {
    label: "Clinic photo",
    caption: "Calm, sunlit reception or treatment room",
  },
  quote: "“A healthy smile begins with trust.”",
  pillars: [
    {
      icon: "heart",
      title: "Patient Comfort",
      text: "A calm, unhurried visit where every step is explained first.",
    },
    {
      icon: "user",
      title: "Personalized Care",
      text: "Treatment plans shaped around your needs, not a template.",
    },
    {
      icon: "smile",
      title: "Healthy Smiles",
      text: "Prevention-first habits that protect your teeth for years.",
    },
  ] satisfies Feature[],
};
