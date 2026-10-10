import type { ReactNode } from "react";

type IconDef = {
  /** Filled icons use `fill="currentColor"` instead of a stroke. */
  filled?: boolean;
  body: ReactNode;
};

const STAR = "M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8L12 2.8z";

/** Paths taken from the Care 32 Dental design (24×24 viewBox). */
export const ICONS = {
  tooth: {
    body: (
      <path d="M7.5 3C5 3 3.5 5 3.5 7.6c0 2 .8 3.4 1.4 5.3.6 1.9.8 4.2 1.3 6.1.3 1.3.9 2 1.7 2 1 0 1.4-1 1.7-2.6.3-1.6.6-3.4 2.4-3.4s2.1 1.8 2.4 3.4c.3 1.6.7 2.6 1.7 2.6.8 0 1.4-.7 1.7-2 .5-1.9.7-4.2 1.3-6.1.6-1.9 1.4-3.3 1.4-5.3C20.5 5 19 3 16.5 3c-1.9 0-2.6 1-4.5 1S9.4 3 7.5 3z" />
    ),
  },
  phone: {
    body: (
      <path d="M5 4h3.5l1.7 4.3-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
    ),
  },
  pin: {
    body: (
      <>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
  pinFilled: {
    filled: true,
    body: (
      <>
        <path d="M12 22s-7.5-6.6-7.5-12.3a7.5 7.5 0 0 1 15 0C19.5 15.4 12 22 12 22z" />
        <circle cx="12" cy="9.7" r="2.6" fill="#FFFFFF" />
      </>
    ),
  },
  mail: {
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M4 7l8 6 8-6" />
      </>
    ),
  },
  heart: { body: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /> },
  user: {
    body: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </>
    ),
  },
  smile: {
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14.5a5 5 0 0 0 8 0" />
        <path d="M9 9.5h.01M15 9.5h.01" />
      </>
    ),
  },
  shieldCheck: {
    body: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  drop: { body: <path d="M12 3c3 4 6 7.2 6 10.5a6 6 0 0 1-12 0C6 10.2 9 7 12 3z" /> },
  sparkle: {
    body: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6" />,
  },
  root: { body: <path d="M12 3v18M8 7l4-4 4 4M7 13c2 1.5 8 1.5 10 0" /> },
  plusSquare: {
    body: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <path d="M9 12h6M12 9v6" />
      </>
    ),
  },
  extraction: {
    body: (
      <>
        <path d="M9 14c-1.7 0-3-1.6-3-3.6C6 8 7.2 6 9 6c1.2 0 1.8.6 3 .6S13.8 6 15 6c1.8 0 3 2 3 4.4 0 2-1.3 3.6-3 3.6" />
        <path d="M12 10v11M9 18l3 3 3-3" />
      </>
    ),
  },
  braces: {
    body: (
      <>
        <path d="M3 12h18" />
        <rect x="5" y="9.5" width="3" height="5" rx="1" />
        <rect x="10.5" y="9.5" width="3" height="5" rx="1" />
        <rect x="16" y="9.5" width="3" height="5" rx="1" />
      </>
    ),
  },
  crown: {
    body: (
      <>
        <path d="M5 9l3.5-4h7L19 9l-7 11L5 9z" />
        <path d="M5 9h14" />
      </>
    ),
  },
  child: {
    body: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
        <path d="M10 7.5h.01M14 7.5h.01" />
      </>
    ),
  },
  implant: {
    body: (
      <>
        <path d="M8 3h8l-1 6H9L8 3z" />
        <path d="M10 9v3M14 9v3M9 12h6M10 15h4M10.5 18h3M11 21h2" />
      </>
    ),
  },
  star: { filled: true, body: <path d={STAR} /> },
  starOutline: { body: <path d={STAR} /> },
  quote: {
    filled: true,
    body: (
      <path d="M9.5 6C6.5 7 4.5 9.6 4.5 13v5h6v-6h-3c0-2 1.2-3.6 3-4.3L9.5 6zm9 0c-3 1-5 3.6-5 7v5h6v-6h-3c0-2 1.2-3.6 3-4.3L18.5 6z" />
    ),
  },
  facebook: {
    body: <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15V3z" />,
  },
  instagram: {
    body: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17 7h.01" />
      </>
    ),
  },
  whatsapp: {
    body: (
      <>
        <path d="M4 20l1.3-4A8 8 0 1 1 8.4 19L4 20z" />
        <path d="M9 9.5c.3 2.3 2.2 4.2 4.5 4.5l1-1.2 1.8.8-.4 1.6c-3.3.2-7-3.4-6.8-6.8l1.6-.4.8 1.8L9 9.5z" />
      </>
    ),
  },
  arrowRight: { body: <path d="M5 12h14M13 6l6 6-6 6" /> },
  arrowUpRight: { body: <path d="M7 17L17 7M9 7h8v8" /> },
  menu: { body: <path d="M4 7h16M4 12h16M4 17h16" /> },
  close: { body: <path d="M6 6l12 12M18 6L6 18" /> },
  image: {
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <circle cx="9" cy="10.5" r="1.8" />
        <path d="M21 15.5l-5-5-8.5 8.5" />
      </>
    ),
  },
  alert: {
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16h.01" />
      </>
    ),
  },
  checkCircle: {
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </>
    ),
  },
  spinner: { body: <path d="M12 3a9 9 0 1 0 9 9" /> },
} satisfies Record<string, IconDef>;

export type IconName = keyof typeof ICONS;
