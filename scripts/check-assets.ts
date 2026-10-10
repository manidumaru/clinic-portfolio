import { existsSync } from "node:fs";
import { join } from "node:path";
import { listAssets } from "../src/constants/assets.ts";

const publicDir = join(import.meta.dirname, "..", "public");
const assets = listAssets();
const missing = assets.filter(([, asset]) => !existsSync(join(publicDir, asset.src)));

if (missing.length > 0) {
  console.error("Missing assets (listed in src/constants/assets.ts but not found in public/):");
  for (const [name, asset] of missing) console.error(`  ASSETS.${name} → public${asset.src}`);
  process.exit(1);
}

console.log(`✓ ${assets.length} asset(s) found in public/`);
