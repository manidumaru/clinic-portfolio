export type HeroVariant = "main" | "thirtyTwo";

export const siteConfig = {
  /**
   * "main"      → "Care 32 / Dental" headline, "Care 32 Dental" logo
   * "thirtyTwo" → "Care / Thirty Two / Dental" headline with the 32 pill,
   *               "Care Thirty Two · Dental · Bhaktapur" logo
   */
  heroVariant: "thirtyTwo" as HeroVariant,
  /** Set to false to stop the decorative blob, rise, reveal and float animations. */
  animate: true,
};
