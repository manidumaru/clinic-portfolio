import type { IconName } from "@/components/icons/icons";
import type { Asset } from "@/constants/assets";

export type { Asset, IconName };

export type SectionId = "home" | "about" | "services" | "team" | "testimonials" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type Link = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: "facebook" | "instagram" | "whatsapp";
  label: string;
  /** Leave empty to hide the icon until the real URL is known. */
  href: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export type Feature = {
  icon: IconName;
  title: string;
  text: string;
};

export type Service = Feature & {
  /** "tinted" cards use the surface background, as in the design's grid rhythm. */
  tone?: "default" | "tinted";
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo: Asset | null;
};

export type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  rating: 1 | 2 | 3 | 4 | 5;
  caption: string;
  /** Renders the brand-coloured, raised card. */
  highlight?: boolean;
};
