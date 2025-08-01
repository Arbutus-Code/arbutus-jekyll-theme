// This script downloads all outline Heroicons SVGs and creates a single SVG sprite.
// Usage: node scripts/build-heroicons-sprite.js

const fs = require("fs");
const path = require("path");
const https = require("https");
const { promisify } = require("util");
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const ICONS_DIR = path.join(__dirname, "icons");
const SPRITE_OUTPUT_PATH = path.join(
  __dirname,
  "../assets/media/sprites/heroicons-outline-sprite.svg"
);
const HEROICONS_OUTLINE_URL =
  "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/optimized/24/outline/";

async function downloadIcon(name) {
  const url = `${HEROICONS_OUTLINE_URL}${name}`;
  const dest = path.join(ICONS_DIR, name);
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          return reject(
            new Error(`Failed to download ${name}: ${res.statusCode}`)
          );
        }
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on("finish", () => fileStream.close(resolve));
      })
      .on("error", reject);
  });
}

async function getAllIconNames() {
  // List of all outline icons from Heroicons repo (as of v2.0.18)
  // We'll fetch the list dynamically from GitHub API for future-proofing
  const apiUrl =
    "https://api.github.com/repos/tailwindlabs/heroicons/contents/optimized/24/outline";
  return new Promise((resolve, reject) => {
    https
      .get(apiUrl, { headers: { "User-Agent": "node" } }, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          if (res.statusCode !== 200) {
            return reject(
              new Error(`Failed to fetch icon list: ${res.statusCode}`)
            );
          }
          try {
            const files = JSON.parse(data);
            const svgs = files
              .filter((f) => f.name.endsWith(".svg"))
              .map((f) => f.name);
            resolve(svgs);
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function svgToSymbol(svgContent, symbolId) {
  // Extract <svg ...>...</svg> and convert to <symbol id=...>...</symbol>
  const body = svgContent
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>[\s\S]*$/, "");
  return `<symbol id="${symbolId}" viewBox="0 0 24 24">${body}</symbol>`;
}

async function buildSprite() {
  await mkdir(ICONS_DIR, { recursive: true });
  const iconNames = await getAllIconNames();

  // Download all icons if not present
  for (const name of iconNames) {
    const iconPath = path.join(ICONS_DIR, name);
    if (!fs.existsSync(iconPath)) {
      console.log(`Downloading ${name}...`);
      await downloadIcon(name);
    }
  }

  // Build sprite
  let spriteContent =
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n';
  for (const name of iconNames) {
    const iconPath = path.join(ICONS_DIR, name);
    const svg = await readFile(iconPath, "utf8");
    const symbolId = name.replace(/\.svg$/, "");
    spriteContent += svgToSymbol(svg, symbolId) + "\n";
  }
  spriteContent += "</svg>\n";
  await writeFile(SPRITE_PATH, spriteContent, "utf8");
  console.log(`Sprite built at ${SPRITE_PATH}`);

  // --- Generate icons.md ---
  const iconsMdPath = path.join(__dirname, "icons.md");
  let md = "# Outline Heroicons Index\n\n";
  md += "| Icon | Name |\n|------|------|\n";
  // Sort for nice output
  const sortedIcons = iconNames.slice().sort();
  for (const name of sortedIcons) {
    const iconId = name.replace(/\.svg$/, "");
    md += `| ![${iconId}](../assets/media/icons/${name}) | ${iconId} |\n`;
  }
  await writeFile(iconsMdPath, md, "utf8");
  console.log(`Icon index written to ${iconsMdPath}`);
}

buildSprite().catch((err) => {
  console.error(err);
  process.exit(1);
});
