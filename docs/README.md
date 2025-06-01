# Arbutus Jekyll Theme

A modern, brand-agnostic Jekyll theme designed for organizations and projects. Features multiple templates, accessible design, and easy customization.

---

## Features
- Multiple page and post templates
- Customizable brand color palette
- Accessible and responsive layout
- Flexible navigation and content blocks
- Includes error pages (404, 500)

---

## Quick Start

### Use as a Remote Theme

1. In your site's `_config.yml`, add:
   ```yaml
   remote_theme: Arbutus-Code/arbutus-jekyll-theme
   plugins:
     - jekyll-remote-theme
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
description: >-
  A modern Jekyll site using the Arbutus theme.
baseurl: ""
url: "https://yoursite.com"
remote_theme: Arbutus-Code/arbutus-jekyll-theme
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-remote-theme
```

---

## Customization

- Override layouts or includes by copying them into your site's `_layouts` or `_includes` folders.
- Add or modify Sass partials in your site's `_sass` directory.
- Edit `_sass/_brand.scss` to change your color palette.
- Update navigation in `_data/navigation.yml`.

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

For a full list of available icons and detailed usage instructions, see the [Heroicon Documentation](../scripts/heroicon_docs.md).

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
