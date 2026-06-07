import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const publicFontsDir = path.join(rootDir, "public", "fonts");
const heroFontsDir = path.join(rootDir, "src", "assets", "fonts", "canela");
const secretsDir = path.join(rootDir, "fonts-secrets");

const FONT_EXTENSIONS = new Set([".woff", ".woff2", ".otf", ".ttf"]);
const HERO_FONT_NAMES = [
  "Canela-Thin.otf",
  "Canela-Light.otf",
  "Canela-Regular.otf",
  "Canela-LightItalic.otf",
  "Canela-Medium.otf",
];

function log(message) {
  console.log(`[hero-fonts] ${message}`);
}

function warn(message) {
  console.warn(`[hero-fonts] ${message}`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function isHeroFont(fileName) {
  return fileName.startsWith("Canela");
}

function listHeroFonts(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        FONT_EXTENSIONS.has(path.extname(entry.name).toLowerCase()) &&
        isHeroFont(entry.name),
    )
    .map((entry) => entry.name);
}

function hasRequiredHeroFonts(dir) {
  const files = new Set(listHeroFonts(dir));
  return files.has("Canela-Light.otf") && files.has("Canela-Regular.otf");
}

function copyHeroFonts(fromDir, toDir) {
  ensureDir(toDir);
  const copied = [];

  for (const fileName of listHeroFonts(fromDir)) {
    fs.copyFileSync(path.join(fromDir, fileName), path.join(toDir, fileName));
    copied.push(fileName);
  }

  return copied;
}

function extractArchive(archivePath, destDir) {
  ensureDir(destDir);

  if (archivePath.endsWith(".zip")) {
    execSync(
      `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${archivePath.replace(/'/g, "''")}' -DestinationPath '${destDir.replace(/'/g, "''")}' -Force"`,
      { stdio: "inherit", cwd: rootDir },
    );
    return;
  }

  execSync(`tar -xzf "${archivePath}" -C "${destDir}"`, {
    stdio: "inherit",
    cwd: rootDir,
  });
}

async function downloadArchive(url, token) {
  const headers = {};
  if (token) {
    headers.Authorization = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to download hero font archive (${response.status})`);
  }

  const tempDir = path.join(rootDir, ".tmp-hero-fonts");
  ensureDir(tempDir);

  const archivePath = path.join(tempDir, "hero-fonts.tar.gz");
  fs.writeFileSync(archivePath, Buffer.from(await response.arrayBuffer()));
  return archivePath;
}

function flattenNestedFonts(destDir) {
  const nested = path.join(destDir, "fonts");
  if (!fs.existsSync(nested)) return;

  for (const fileName of listHeroFonts(nested)) {
    fs.copyFileSync(path.join(nested, fileName), path.join(destDir, fileName));
  }

  fs.rmSync(nested, { recursive: true, force: true });
}

async function populateFromEnv() {
  const archiveBase64 = process.env.FONTS_HERO_ARCHIVE_BASE64?.trim();
  const archiveUrl = process.env.FONTS_HERO_ARCHIVE_URL?.trim();
  const archiveToken = process.env.FONTS_HERO_ARCHIVE_TOKEN?.trim();
  const sourceDir = process.env.FONTS_HERO_SOURCE_DIR?.trim();

  if (sourceDir) {
    const resolved = path.isAbsolute(sourceDir)
      ? sourceDir
      : path.join(rootDir, sourceDir);
    if (!fs.existsSync(resolved)) {
      throw new Error(`FONTS_HERO_SOURCE_DIR does not exist: ${resolved}`);
    }

    const copied = copyHeroFonts(resolved, heroFontsDir);
    log(`Copied ${copied.length} Canela file(s) from FONTS_HERO_SOURCE_DIR.`);
    return copied.length > 0;
  }

  if (fs.existsSync(secretsDir) && listHeroFonts(secretsDir).length > 0) {
    const copied = copyHeroFonts(secretsDir, heroFontsDir);
    log(`Copied ${copied.length} Canela file(s) from fonts-secrets/.`);
    return copied.length > 0;
  }

  if (archiveUrl) {
    log("Downloading hero font archive from FONTS_HERO_ARCHIVE_URL...");
    const archivePath = await downloadArchive(archiveUrl, archiveToken);
    const tempDir = path.join(rootDir, ".tmp-hero-fonts", "extract");
    ensureDir(tempDir);
    extractArchive(archivePath, tempDir);
    flattenNestedFonts(tempDir);
    copyHeroFonts(tempDir, heroFontsDir);
    log("Extracted downloaded hero font archive.");
    return true;
  }

  if (archiveBase64) {
    log("Decoding FONTS_HERO_ARCHIVE_BASE64...");
    const tempDir = path.join(rootDir, ".tmp-hero-fonts");
    ensureDir(tempDir);
    const archivePath = path.join(tempDir, "hero-fonts.tar.gz");
    fs.writeFileSync(archivePath, Buffer.from(archiveBase64, "base64"));
    const extractDir = path.join(tempDir, "extract");
    ensureDir(extractDir);
    extractArchive(archivePath, extractDir);
    flattenNestedFonts(extractDir);
    copyHeroFonts(extractDir, heroFontsDir);
    log("Extracted base64 hero font archive.");
    return true;
  }

  return false;
}

async function main() {
  ensureDir(heroFontsDir);

  if (listHeroFonts(publicFontsDir).length > 0) {
    const copied = copyHeroFonts(publicFontsDir, heroFontsDir);
    log(`Synced ${copied.length} Canela file(s) from public/fonts/.`);
  } else if (!hasRequiredHeroFonts(heroFontsDir)) {
    await populateFromEnv();
  }

  const files = listHeroFonts(heroFontsDir).sort();
  if (!hasRequiredHeroFonts(heroFontsDir)) {
    warn("Canela hero fonts are missing from src/assets/fonts/canela/.");
    warn("Add Canela .otf files to public/fonts/ locally, or set FONTS_HERO_ARCHIVE_BASE64 on Vercel.");
    warn(`Expected at minimum: ${HERO_FONT_NAMES.slice(0, 3).join(", ")}`);
    warn("Production hero text will fall back to Cormorant Garamond until fonts are provided.");

    if (
      process.env.FONTS_HERO_REQUIRE === "true" ||
      process.env.VERCEL === "1"
    ) {
      process.exit(1);
    }
    return;
  }

  log(`Hero fonts ready (${files.length}): ${files.join(", ")}`);
}

main().catch((error) => {
  console.error("[hero-fonts] Prepare step failed:", error);
  process.exit(1);
});
