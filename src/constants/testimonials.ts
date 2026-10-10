import type { SectionIntro, Testimonial } from "@/types/content";

export const TESTIMONIALS = {
  intro: {
    eyebrow: "Testimonials",
    title: "Smiles That Speak for Themselves",
    lead: "Every smile tells a story. Discover what patients appreciate about their experience with us.",
  } satisfies SectionIntro,
  /** Shows the "sample reviews" notice. Set to false once genuine reviews are in. */
  isSample: true,
  sampleNotice: "Sample reviews — replace with genuine patient feedback",
  items: [
    {
      quote:
        "I was nervous about my first visit, but everything was explained so calmly. I left feeling completely at ease.",
      name: "Anjali K.",
      initials: "AK",
      rating: 5,
      caption: "Sample patient",
    },
    {
      quote: "The whole team is warm and welcoming. They took time to answer every question and never rushed me.",
      name: "Ramesh S.",
      initials: "RS",
      rating: 5,
      caption: "Sample patient",
      highlight: true,
    },
    {
      quote: "Clean, bright clinic and very clear communication. Booking a follow-up was quick and easy.",
      name: "Priya M.",
      initials: "PM",
      rating: 4,
      caption: "Sample patient",
    },
  ] satisfies Testimonial[],
};
