# degree-celsius-website

Degree Celsius – Static Website (README)

A lightweight, single-page, static site for a Melbourne HVAC business. Built with plain HTML/CSS (no frameworks, no build tools). Includes a sidebar layout, services grid, featured project (video), and a contact form powered by Formspree.

Contents

Overview

Tech & Requirements

Project Structure

Quick Start

Editing Content

Contact Form (Formspree)

Images, Video & Favicon

Accessibility & SEO

Deploying

GitHub Pages (with custom domain)

cPanel hosting

Troubleshooting

License

Overview

Single file: index.html

Assets: images and video loaded from the assets/ directory

Form: sends enquiries to Formspree (no backend required)

Style: modern dark theme, responsive layout, no external CSS/JS dependencies

Tech & Requirements

Any modern browser

A static file host (GitHub Pages, Netlify, cPanel, etc.)

Formspree account (for the contact form endpoint)

No Node, npm, PHP, or database required.

Project Structure

Recommended layout for your repo / webroot:

/
├── index.html
└── assets/
    ├── images/
    │   ├── degreecelsius-logo.png
    │   ├── favicon.ico
    │   ├── ducted-air-conditioning.jpg
    │   ├── split-system.jpg
    │   ├── hydronic-heating.jpg
    │   ├── hydronic-underfloor-heating.jpg
    │   ├── new-build.jpg
    │   ├── servicing.jpg
    │   └── integration.jpg
    └── videos/
        ├── project-video.mp4
        └── project-video-preview.jpg   (poster frame)


Ensure the file names match exactly what index.html references.

Quick Start

Clone / copy the project to your machine or web host.

Keep the directory layout above (especially assets/ paths).

Open index.html in a browser to preview locally.

Replace images/video with your own (same file names or update paths).

Update the contact form endpoint (see Formspree section).

Editing Content

All content lives in index.html.

Branding & hero:

Logo image: assets/images/degreecelsius-logo.png (search for .logo-hero / .logo-footer)

Tagline near the logo: search for Redefining comfort, one degree at a time

Sidebar navigation:

Links anchor to sections: #hero, #why, #services, #projects, #contracting, #contact

Why Choose Us / Services / Contracting / Projects:

Edit headings & paragraphs directly in each section.

Service card images are in assets/images/…

Featured Project Video:

Video source: assets/videos/project-video.mp4

Poster image: assets/videos/project-video-preview.jpg

Contact details & social links (footer):

Phone (tel: link), website URL, and social profiles:

<a href="tel:+61459326621">0459 326 621</a>
<a href="https://www.degreecelsius.com.au" target="_blank">www.degreecelsius.com.au</a>


Replace Instagram/Facebook/LinkedIn URLs if needed.

Meta tags (in <head>):

Update <title> and <meta name="description" …> for SEO.

Contact Form (Formspree)

This site posts to Formspree (no backend server). The current form action is:

<form class="dark-card"
      action="https://formspree.io/f/xkgqyvdz"
      method="POST">

Steps to use your own Formspree form

Create a Formspree form and copy your endpoint URL (it looks like https://formspree.io/f/xxxxxxx).

Replace the action in the <form> tag with your endpoint.

Optional hidden fields (already included):

_gotcha — spam honeypot

_subject — subject line for Formspree emails

_captcha — set to false to skip their built-in captcha (optional)

<input type="text" name="_gotcha" style="display:none">
<input type="hidden" name="_subject" value="New website enquiry – Degree Celsius">
<input type="hidden" name="_captcha" value="false">


Test by submitting the form; confirm you receive the email in your Formspree inbox/forwarding email.

(Optional) Add a redirect after submit by adding:

<input type="hidden" name="_redirect" value="https://yourdomain/thank-you.html">

Images, Video & Favicon

Images:

Use JPG for photos, PNG/WebP for graphics where quality matters.

Aim for max width ~1600–2000px for hero/large images. Compress to keep under ~200–300 KB if possible.

Video:

H.264 MP4 is widely supported. Keep size reasonable (< ~15–20 MB) for fast loads.

Update the poster frame (project-video-preview.jpg) for a nicer placeholder.

Favicon:

Ensure assets/images/favicon.ico exists and the <link rel="icon" …> in <head> matches:

<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon" />


If browsers still show the old icon, clear cache or do a hard refresh.

Accessibility & SEO

Alt text: All <img> tags have alt text—keep these meaningful.

Headings: Keep a logical order (h1 → h2 → h3).

Contrast: This theme is high-contrast; avoid light text on light backgrounds.

Meta description: Already present—tune it for your keywords & location.

Open Graph (optional): Add for social sharing previews:

<meta property="og:title" content="Degree Celsius – Heating & Cooling" />
<meta property="og:description" content="Tailored heating & cooling solutions for Melbourne homes." />
<meta property="og:image" content="https://www.degreecelsius.com.au/assets/images/degreecelsius-logo.png" />
<meta property="og:url" content="https://www.degreecelsius.com.au" />
<meta name="twitter:card" content="summary_large_image" />


Robots & sitemap (optional but recommended):

robots.txt at site root:

User-agent: *
Allow: /
Sitemap: https://www.degreecelsius.com.au/sitemap.xml


Generate and upload a simple sitemap.xml if needed.

Deploying

You can host this anywhere that serves static files. Two common options:

GitHub Pages (with custom domain)

Repository

Create a repo, add the files, commit & push.

Enable Pages

Settings → Pages → Source: Deploy from a branch.

Branch: main, Folder: / (root). Save.

Custom domain (example: www.degreecelsius.com.au)

In Pages → Custom domain: enter www.degreecelsius.com.au. This creates a CNAME file in the repo.

In your DNS (domain host), set:

CNAME for www → YOUR_GITHUB_USERNAME.github.io.

Optional root (degreecelsius.com.au) → point A records to GitHub Pages:

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153


and/or AAAA:

2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153


Back in Pages, enforce HTTPS. Wait for DNS to propagate.

Tip: Only one host should serve your site. If you also deploy to cPanel, ensure DNS/redirects don’t conflict.

cPanel hosting

Upload index.html and the assets/ folder into public_html/ (or a subdomain directory).

Ensure paths remain assets/images/... and assets/videos/....

Enable AutoSSL/Let’s Encrypt in cPanel for HTTPS.

Force HTTPS / canonical URL with .htaccess in public_html/:

# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

# Canonical: redirect non-www to www (choose one canonical form)
RewriteCond %{HTTP_HOST} !^www\.degreecelsius\.com\.au$ [NC]
RewriteRule ^ https://www.degreecelsius.com.au%{REQUEST_URI} [R=301,L]


If using both GitHub Pages and cPanel, pick one as the source of truth and point DNS there to avoid SSL or “unsafe site” warnings.

Troubleshooting

“Site not secure / unsafe” warning

Ensure a valid SSL certificate is active for the exact hostname you’re visiting (e.g., www.degreecelsius.com.au).

Avoid mixed content (HTTP images or videos on an HTTPS page). All asset URLs should be relative or https://.

Check DNS: only one live host should answer for www (don’t point www to GitHub while serving from cPanel at the same time).

Favicon not showing

Confirm assets/images/favicon.ico exists and matches the <link rel="icon" …> path.

Hard refresh (Ctrl/Cmd+Shift+R) or clear cache. Some browsers cache favicons aggressively.

Images or video not loading

Check file names and paths (case-sensitive on some hosts).

Large files: compress images; keep video size reasonable.

Ensure the poster image path for <video> is correct.

Formspree not sending

Verify the action URL is your live Formspree endpoint.

Submit a test message; check Formspree dashboard & email forwarding.

Add a _redirect hidden field to send users to a “Thank you” page after success.

Layout issues on mobile

The layout is responsive; if new content breaks it, check media queries near the end of the <style> block (look for @media (max-width: …)).

License

Proprietary to Degree Celsius (or your business). If you plan to open-source it, add an SPDX-compatible license (e.g., MIT) and remove or replace proprietary imagery before publishing.