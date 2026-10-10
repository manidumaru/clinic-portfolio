import type { SocialLink } from "@/types/content";

export const CLINIC = {
  name: "Care 32 Dental",
  /** Logo wordmark per hero variant (see src/config/site.config.ts). */
  wordmark: {
    main: { title: "Care 32 Dental", subtitle: "Bhaktapur" },
    thirtyTwo: { title: "Care Thirty Two", subtitle: "Dental · Bhaktapur" },
  },
  tagline: "Committed to your oral health",
  description:
    "Personalized dental care, modern treatments, and a comfortable experience for every smile. A neighbourhood dental clinic in Duwakot Mod, Bhaktapur.",
  location: {
    short: "Duwakot Mod, Bhaktapur",
    full: "Duwakot Mod, Bhaktapur, Nepal",
  },
  phones: [
    { display: "+977 9813510103", tel: "+9779813510103" },
    { display: "+977 9803127029", tel: "+9779803127029" },
  ],
  email: "care32dentalclinicbkt@gmail.com",
  socials: [
    { platform: "facebook", label: "Facebook", href: "www.facebook.com" },
    { platform: "instagram", label: "Instagram", href: "instagram.com" },
    { platform: "whatsapp", label: "WhatsApp", href: "wa.me" },
  ] satisfies SocialLink[],
  /**
   * Directions to the clinic's own Google Maps listing (feature id from the embed URL below);
   * the place name in the path is the fallback if Google ignores the id.
   */
  directionsUrl:
    "https://www.google.com/maps/dir//Care+32+Dental+Clinic,+Duwakot,+Bhaktapur/data=!4m5!4m4!1m0!1m2!1m1!1s0x39eb1bf985b50b3b:0xfcc3c8c6fe43a75c",
  /** Google Maps embed URL. Leave empty to show the map placeholder card. */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.26701131014!2d85.40514000606885!3d27.6781411569672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bf985b50b3b%3A0xfcc3c8c6fe43a75c!2sCare%2032%20Dental%20Clinic!5e0!3m2!1sen!2snp!4v1791610443860!5m2!1sen!2snp",
};

export const PRIMARY_PHONE = CLINIC.phones[0];
