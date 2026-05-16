import fs from "node:fs";
import path from "node:path";

const srcDir = path.join(process.cwd(), "src");

const replacements = [
  ["text-white/", "text-sand/"],
  ["hover:text-white/", "hover:text-sand/"],
  ["hover:text-white", "hover:text-sand"],
  ["border-white/", "border-sand/"],
  ["hover:border-white/", "hover:border-sand/"],
  ["bg-white/", "bg-sand/"],
  ["hover:bg-white/", "hover:bg-sand/"],
  ["ring-white/", "ring-sand/"],
  ["from-white/", "from-sand/"],
  ["via-white/", "via-sand/"],
  ["to-white/", "to-sand/"],
  ["text-white", "text-sand"],
  ["text-black", "text-earth-umber"],
  ["rgba(255,255,255", "rgba(216,220,208"],
  ["color: #ffffff", "color: #E8ECE2"],
  ["color: #fff;", "color: #E8ECE2;"],
  ["color: #000", "color: #1D271E"],
  ["bg-red-900/20 border border-red-500/30 text-red-400", "bg-rust/15 border border-rust/35 text-rust-light"],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts|jsx|js|css)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) fs.writeFileSync(filePath, content, "utf8");
  return changed;
}

const files = walk(srcDir);
let count = 0;
for (const file of files) {
  if (migrateFile(file)) {
    count++;
    console.log("updated:", path.relative(process.cwd(), file));
  }
}
console.log(`Done. ${count} files updated.`);
