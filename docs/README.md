# Arbutus Jekyll Theme

A modern, brand-agnostic Jekyll theme designed for organizations and projects. Features multiple templates, accessible design, and easy customization.

---

## Features

- Multiple page and post templates
- Customizable brand color palette
- Accessible and responsive layout with consistent typography
- Flexible navigation and content blocks
- Separate header and footer logos
- Includes error pages (404, 500)

---

## Quick Start

### Use as a Gem

1. In your site's `Gemfile`, add:

   ```ruby
   # For GitHub-hosted sites
   gem "arbutus-theme", github: "Arbutus-Code/arbutus-jekyll-theme", branch: "main"

   # For Ruby 3.4+ compatibility
   gem "base64"
   gem "bigdecimal"
   ```

   For local development with a local copy of the theme:

   ```ruby
   # Assuming the theme is in a sibling directory
   gem "arbutus-theme", path: "../arbutus-jekyll-theme"
   ```

2. Add a `_sass/_brand.scss` file to your site with your color palette:

   ```scss
   $color-primary: #EE3B43 !default;
   $color-primary-dark: #C1282D !default;
   $color-primary-light: #F5B3B5 !default;
   $color-accent-dark: #4B2E83 !default;
   ```

   **All four variables are required for the theme to compile.**

3. (Optional) Add a `Gemfile` to your site for local development:

   ```ruby
   source "https://rubygems.org"
   gem "github-pages", group: :jekyll_plugins
   gem "jekyll-remote-theme"
   gem "base64"
   gem "bigdecimal"
   ```

### Local Development

1. Clone this repo:

   ```sh
   git clone https://github.com/Arbutus-Code/arbutus-jekyll-theme.git
   cd arbutus-jekyll-theme
   ```

2. Install dependencies:

   ```sh
   bundle install
   ```

3. Serve locally:

   ```sh
   bundle exec jekyll serve
   ```

---

## Configuration

- See `_config.yml` for example settings.
- Set navigation links in `_data/navigation.yml`.
- Add your site title, description, and other metadata in `_config.yml`.

### Example `_config.yml`

```yaml
title: My Site
email: info@example.com
description: >
  A modern Jekyll site using the Arbutus theme.
logo: assets/media/logo.svg
footer_logo: assets/media/logo-white.svg  # Optional, falls back to logo if not specified
baseurl: ""
url: "https://yoursite.com"
remote_theme: Arbutus-Code/arbutus-jekyll-theme
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-remote-theme
contact:  # Optional contact information for footer
  address: "123 Main St, City, Country"
  email: "info@example.com"
  phone: "+1 555-555-5555"
```

---

## Customization

- Override layouts or includes by copying them into your site's `_layouts` or `_includes` folders.
- Add or modify Sass partials in your site's `_sass` directory.
- Edit `_sass/_brand.scss` to change your color palette.
- Update navigation in `_data/navigation.yml`.

### Navigation Configuration

Create a `_data/navigation.yml` file with the following structure:

```yaml
main_nav_links:
  - name: "About"
    link: "/about/"
  - name: "Projects"
    link: "/projects/"
  - name: "Contact"
    link: "/contact/"

footer_nav_links:
  - name: "Privacy Policy"
    link: "/privacy/"
  - name: "Terms"
    link: "/terms/"
```

### Social Media Configuration

Add social media links to your `_config.yml`:

```yaml
socials:
  - name: "Twitter"
    url: "https://twitter.com/yourhandle"
    icon: "twitter"
  - name: "GitHub"
    url: "https://github.com/yourusername"
    icon: "github"
  - name: "LinkedIn"
    url: "https://linkedin.com/in/yourprofile"
    icon: "linkedin"
```

---

## Components

The theme includes several reusable components that can be used in your pages:

### Cards Component

Display a grid of featured cards with images, icons, or plain content.

```liquid
{% include cards.html title="Featured Content" cards=page.cards %}
```

**Parameters:**

- `title` (optional): Section title
- `cards` (required): Array of card objects

Each card object supports:

- `title` (required): Card title
- `description` (required): Card description
- `image` (optional): Image URL
- `image_alt` (optional): Image alt text
- `url` (required): Link URL
- `cta_text` (optional): Button text (defaults to "Learn More")
- `media_type` (optional): "icon" for icon cards
- `icon` (required if media_type is "icon"): Heroicon name

### CTA Component

Call-to-action section with optional image and buttons.

```liquid
{% include cta.html title="Join Us" description="Become a member today!" center_content=true image=image_obj primary_button=btn1 secondary_button=btn2 %}
```

**Parameters:**

- `title` (required): Title text
- `description` (required): Description text
- `center_content` (optional): Boolean to center-align content
- `image` (optional): Object with `url` and `alt`
- `primary_button` (optional): Object with `text` and `url`
- `secondary_button` (optional): Object with `text` and `url`

### Contact Form Component

Web3Forms-powered contact form with hCaptcha.

```liquid
{% include contact-form.html title="Contact Us" access_key=site.web3forms.access_key %}
```

**Parameters:**

- `title` (optional): Section title
- `access_key` (required): Web3Forms API key
- `subject` (optional): Email subject
- `hcaptcha_sitekey` (optional): hCaptcha site key

### Contact Form with Socials

Two-column layout combining contact form with social links.

```liquid
{% include contact-form-socials.html title="Get in Touch" access_key=site.web3forms.access_key socials=site.socials %}
```

### Hero Component

Large hero section with title, subtitle, and call-to-action.

```liquid
{% include hero.html hero=page.hero %}
```

**Hero object structure:**

- `title` (required): Hero title
- `subtitle` (optional): Hero subtitle
- `cta` (optional): Object with `text` and `url`
- `image` (optional): Image URL
- `image_alt` (optional): Alt text for image

### Split Section Component

Two-column layout with image and text content.

```liquid
{% include split-section.html image="/path/to/image.jpg" heading="Section Title" text="Content here..." image_position="left" %}
```

**Parameters:**

- `image` (optional): Image URL
- `image_alt` (optional): Alt text for image
- `image_position` (optional): "left" or "right" (default: left)
- `image_caption` (optional): Image caption
- `heading` (optional): Section heading
- `text` (optional): Section text (supports Markdown)

### Team Members Component

Display team member profiles in a grid.

```liquid
{% include team-members.html heading="Our Team" members=page.team show_images=true %}
```

**Parameters:**

- `heading` (optional): Section heading
- `members` (required): Array of member objects
- `show_images` (optional): Boolean to show member images (default: true)

Each member object supports:

- `name` (required): Member name
- `title` (optional): Member title
- `image` (optional): Image URL
- `bio` (optional): Short bio

### Text Section Component

Simple text content section.

```liquid
{% include text-section.html heading="About Us" text="Your content here..." %}
```

**Parameters:**

- `heading` (optional): Section heading
- `text` (optional): Section text (supports Markdown)

### Image Component

Standalone image with optional caption and attributes.

```liquid
{% include image.html src="/path/to/image.jpg" alt="Description" caption="Optional caption" width="400" height="300" %}
```

**Parameters:**

- `src` (required): Image URL
- `alt` (optional): Alt text
- `caption` (optional): Caption text
- `width` (optional): Image width
- `height` (optional): Image height
- `class` (optional): Additional CSS classes
- `aria` (optional): Aria-label for accessibility

### Social Links Component

Display social media links with icons.

```liquid
{% include social-links.html socials=site.socials class="footer__social" show_titles=false heading="Follow Us" %}
```

**Parameters:**

- `socials` (optional): Array of social objects (defaults to site.socials)
- `class` (optional): Extra CSS classes
- `show_titles` (optional): Boolean to show platform titles (default: true)
- `heading` (optional): Section heading text

---

## Heroicons and Icons in Cards

You can use [Heroicons](../scripts/heroicon_docs.md) in your cards by specifying `media_type: icon` and the `icon` name in your card front matter. **You do not need to write any SVG or HTML code—the theme will automatically render the correct icon.**

Example:

```yaml
cards:
  - title: "Secure"
    description: "Your data is protected."
    url: "/security/"
    media_type: icon
    icon: shield-check
```

Just set `media_type: icon` and provide the `icon` field; the theme takes care of rendering the SVG.

For a full list of available icons and detailed usage instructions, see the [Heroicons Documentation](../scripts/heroicon_docs.md).

---

## Error Pages

- `404.html` and `500.html` are included by default.
- To customize, add your own `404.html` or `500.html` at your project root.

---

## Development

- Requires Ruby and Bundler.
- Run `bundle install` to install dependencies.
- Run `bundle exec jekyll serve` to start a local server.

---

## License

The theme is available as open source under the terms of the [MIT License](LICENSE).

Heroicons is available under the terms of the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).
