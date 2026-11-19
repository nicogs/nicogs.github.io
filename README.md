# Nicogs Jekyll Blog Starter

## First-time setup
1. Create a public repository named `YOUR-USERNAME.github.io`.
2. Upload these files to the repository root.
3. Edit `_config.yml` and replace `YOUR-USERNAME` in `url` and `author.url`.
4. In GitHub, open **Settings → Pages** and select **Deploy from a branch → main → /(root)**.
5. Wait for the Pages build, then visit `https://YOUR-USERNAME.github.io`.

## Publish a post
Create a file in `_posts` named `YYYY-MM-DD-your-title.md`:

```markdown
---
title: "Your article title"
description: "A unique description for search and social previews."
date: 2026-11-07 12:00:00 +0100
categories: [ideas]
---

Your article in Markdown.
```

## Included
- Jekyll + GitHub Pages
- SEO tags / canonical metadata / Open Graph / JSON-LD (`jekyll-seo-tag`)
- Sitemap (`jekyll-sitemap`)
- RSS feed (`jekyll-feed`)
- Responsive editorial layout
- Dark mode toggle (preference saved in browser)
- Article categories, archive list and estimated reading time

## SEO checklist
- Set a unique `description` in each post's front matter.
- Add a representative image at `assets/images/` and use `image: /assets/images/name.jpg` in post front matter.
- Use descriptive article titles and headings.
- Add your custom domain in GitHub Pages settings if desired.
- After publishing, submit `/sitemap.xml` in Google Search Console.
