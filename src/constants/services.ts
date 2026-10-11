import type { SectionIntro, Service } from "@/types/content";

export const SERVICES = {
  intro: {
    eyebrow: "Our services",
    title: "Complete Care for Every Smile",
    lead: "From preventive checkups to smile transformations, explore dental care designed around your needs.",
  } satisfies SectionIntro,
  items: [
    {
      icon: "tooth",
      title: "Multispeciality Dentistry",
      text: "Routine checkups, consultations, and preventive care to keep small concerns from becoming big ones.",
    },
    { icon: "drop", title: "Dental Cleaning", text: "Professional cleaning and oral hygiene maintenance." },
    { icon: "sparkle", title: "Teeth Whitening", text: "Cosmetic treatments for a brighter smile." },
    {
      icon: "root",
      title: "Root Canal Treatment",
      text: "For suitable cases involving infected or damaged dental pulp.",
      tone: "tinted",
    },
    {
      icon: "plusSquare",
      title: "Dental Fillings",
      text: "Restorative treatment for cavities and minor tooth damage.",
    },
    { icon: "extraction", title: "Tooth Extraction", text: "Gentle removal of teeth when clinically indicated." },
    {
      icon: "braces",
      title: "Orthodontic Treatment",
      text: "Assessment and treatment options for teeth alignment.",
      tone: "tinted",
    },
    { icon: "crown", title: "Crowns & Bridges", text: "Restorative solutions for damaged or missing teeth." },
    { icon: "child", title: "Pediatric Dentistry", text: "Friendly dental care tailored to children’s needs." },
    {
      icon: "implant",
      title: "Dental Implants",
      text: "Tooth replacement options following clinical assessment.",
      tone: "tinted",
    },
  ] satisfies Service[],
  cta: { title: "Not sure what you need?", label: "Ask our team", href: "#contact" },
  disclaimer: "Services shown are illustrative. Availability of each treatment should be confirmed with the clinic.",
};
