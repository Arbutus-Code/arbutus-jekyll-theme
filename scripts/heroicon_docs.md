# Heroicons Outline SVG Sprite Documentation

This document explains how to use the automated Heroicons outline sprite system in your Jekyll site, and provides a table listing all available icon names with a live preview for each.

---

## 1. How It Works

- **Script:** `scripts/build-heroicons-sprite.js` downloads all outline Heroicons SVGs and combines them into a single SVG sprite.
- **Sprite Location:** `_includes/heroicons-outline-sprite.svg`
- **Individual SVGs:** Downloaded to `assets/media/icons/`

---

## 2. How To Update/Rebuild the Sprite

1. Make sure you have Node.js installed.
2. From your project root, run:

   ```sh
   node scripts/build-heroicons-sprite.js
   ``

3. This will:

   - Download (or update) all outline Heroicons SVGs into `assets/media/icons/`
   - Generate the sprite at `_includes/heroicons-outline-sprite.svg`

## 3. All Available Outline Heroicons

[Icons](icons.md)
