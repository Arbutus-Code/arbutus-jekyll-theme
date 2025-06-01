# Heroicons Outline SVG Sprite Documentation

This document explains how to use the automated Heroicons outline sprite system in your Jekyll site, and provides a table listing all available icon names with a live preview for each.

---

## 1. How It Works

- **Script:** `scripts/build-heroicons-sprite.js` downloads all outline Heroicons SVGs and combines them into a single SVG sprite.
- **Sprite Location:** `_includes/heroicons-outline-sprite.svg`
- **Individual SVGs:** Downloaded to `assets/images/icons/`

---

## 2. How To Update/Rebuild the Sprite

1. Make sure you have Node.js installed.
2. From your project root, run:
   ```sh
   node scripts/build-heroicons-sprite.js
   ```
3. This will:
   - Download (or update) all outline Heroicons SVGs into `assets/images/icons/`
   - Generate the sprite at `_includes/heroicons-outline-sprite.svg`

---

## 3. How To Use an Icon in Jekyll

Embed this wherever you want an icon:

```html
<svg class="icon" aria-hidden="true" focusable="false">
  <use xlink:href="{{ '/assets/images/sprites/heroicons-outline-sprite.svg#' | append: 'icon-name' | relative_url }}"></use>
</svg>
```
Replace `icon-name` with the name of the icon you want to use (see the list below).

---

## 4. Using Heroicons in Card Front Matter

You can use Heroicons in Arbutus cards by simply specifying the icon name in your card's front matter.

Example:

```yaml
cards:
  - title: "Secure"
    description: "Your data is protected."
    url: "/security/"
    media_type: icon
    icon: shield-check
```

- Set `media_type: icon` and specify the `icon` field with the desired Heroicon name.
- The card will automatically display the icon from the sprite.

For more details, see the [README](../docs/README.md#heroicons-and-icons-in-cards).

---

## 5. All Available Outline Heroicons
[Icons](icons.md)
