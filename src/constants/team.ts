import type { SectionIntro, TeamMember } from "@/types/content";

export const TEAM = {
  intro: {
    eyebrow: "Our team",
    title: "Meet the People Behind Your Smile",
    lead: "A caring team dedicated to making every dental visit comfortable, reassuring, and personal.",
  } satisfies SectionIntro,
  /** Shows the "Sample profile" badge on every card. Set to false once real profiles are in. */
  isSample: true,
  sampleBadge: "Sample profile",
  /** `photo`: set to an entry from ASSETS.team once the portrait is added. */
  members: [
    {
      name: "Dr. Anamol Dumaru",
      role: "Dentist",
      bio: "Believes good care starts with listening before treating.",
      initials: "AD",
      photo: null,
    },
    {
      name: "Dr. Sabin Gwachha",
      role: "Dentist",
      bio: "Focused on gentle cleanings and simple daily-care habits.",
      initials: "SM",
      photo: null,
    },
    {
      name: "Sunena Lageju",
      role: "Dental Hygenist",
      bio: "Your first hello — helps with bookings, questions, and follow-ups.",
      initials: "SL",
      photo: null,
    },
    {
      name: "Rasna Gosain",
      role: "Dental Hygenist",
      bio: "Supports the team for specialist consultations by appointment.",
      initials: "RG",
      photo: null,
    },
    {
      name: "Dr. Nabin Gosain",
      role: "On-call Orthodontist",
      bio: "Supports the team for specialist consultations by appointment.",
      initials: "NG",
      photo: null,
    },
    {
      name: "Dr. Chindu Lama",
      role: "On-call Dental Professional",
      bio: "Supports the team for specialist consultations by appointment.",
      initials: "CL",
      photo: null,
    },
  ] satisfies TeamMember[],
};
