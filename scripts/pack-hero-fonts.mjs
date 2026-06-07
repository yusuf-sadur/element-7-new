import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const publicFontsDir = path.join(rootDir, "public", "fonts");
const outputArchive = path.join(rootDir, "hero-fonts-bundle.tar.gz");
const outputBase64 = path.join(rootDir, "hero-fonts-bundle.base64.txt");

function listCanelaFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.startsWith("Canela"))
    .map((entry) => entry.name);
}

function main() {
  const files = listCanelaFiles(publicFontsDir);
  if (files.length === 0) {
    console.error("[hero-fonts] No Canela files found in public/fonts/.");
    process.exit(1);
  }

  const tempDir = path.join(rootDir, ".tmp-hero-font-pack");
  const stagingDir = path.join(tempDir, "fonts");
  fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(stagingDir, { recursive: true });

  for (const fileName of files) {
    fs.copyFileSync(
      path.join(publicFontsDir, fileName),
      path.join(stagingDir, fileName),
    );
  }

  if (fs.existsSync(outputArchive)) {
    fs.unlinkSync(outputArchive);
  }

  execSync(`tar -czf "${outputArchive}" -C "${tempDir}" fonts`, {
    stdio: "inherit",
    cwd: rootDir,
  });

  fs.rmSync(tempDir, { recursive: true, force: true });

  const base64 = fs.readFileSync(outputArchive).toString("base64");
  fs.writeFileSync(outputBase64, base64, "utf8");

  const sizeKb = Math.round(fs.statSync(outputArchive).size / 1024);
  console.log(`[hero-fonts] Created ${outputArchive} (${sizeKb} KB, ${files.length} files).`);
  console.log(`[hero-fonts] Wrote ${outputBase64} for Vercel env var FONTS_HERO_ARCHIVE_BASE64.`);
  console.log("[hero-fonts] Set FONTS_HERO_REQUIRE=true on Vercel to fail builds if fonts are missing.");
}

main();
