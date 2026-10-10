/**
 * Asset library — the only place image paths are written.
 *
 * 1. Drop the file under `public/` (e.g. `public/images/team/aarati-shrestha.jpg`).
 * 2. Add or uncomment its entry below with the real pixel width/height.
 * 3. Point the content constant at it (e.g. `photo: ASSETS.team.aaratiShrestha`).
 *
 * `npm run check:assets` (also run before every build) fails if a path below
 * does not exist in `public/`. Keep this file free of `@/` imports so that
 * script can load it directly.
 */

export type Asset = {
  /** Path relative to `public/`, starting with "/". */
  src: string;
  alt: string;
  width: number;
  height: number;
};

type AssetTree = { [key: string]: Asset | AssetTree };

export const ASSETS = {
  // hero: { src: "/images/hero/hero.jpg", alt: "Dentist welcoming a patient in a bright, modern treatment room", width: 1200, height: 1500 },
  // clinic: { src: "/images/about/clinic.jpg", alt: "Calm, sunlit reception area at Care 32 Dental", width: 1200, height: 1400 },
  team: {
    // aaratiShrestha: { src: "/images/team/aarati-shrestha.jpg", alt: "Dr. Aarati Shrestha", width: 800, height: 1000 },
    // sunitaMaharjan: { src: "/images/team/sunita-maharjan.jpg", alt: "Sunita Maharjan", width: 800, height: 1000 },
    // rojinaKarki: { src: "/images/team/rojina-karki.jpg", alt: "Rojina Karki", width: 800, height: 1000 },
    // bikashThapa: { src: "/images/team/bikash-thapa.jpg", alt: "Dr. Bikash Thapa", width: 800, height: 1000 },
  },
  // og: { src: "/og-image.jpg", alt: "Care 32 Dental — Committed to your oral health", width: 1200, height: 630 },
} as const satisfies AssetTree;

export function isAsset(value: unknown): value is Asset {
  return typeof value === "object" && value !== null && typeof (value as Asset).src === "string";
}

/** Every asset in the tree, flattened — used by scripts/check-assets.ts. */
export function listAssets(tree: AssetTree = ASSETS, prefix = ""): [string, Asset][] {
  return Object.entries(tree).flatMap(([key, value]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    return isAsset(value) ? [[name, value]] : listAssets(value, name);
  });
}
