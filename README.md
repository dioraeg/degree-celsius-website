Degree Celsius Website

Degree Celsius — Static Website

A fast, lightweight, single-page website for a Melbourne HVAC business.
Built with plain HTML + CSS (no frameworks or build tools).
Includes a sidebar layout, service cards, a featured project video, and a contact form powered by Formspree.

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
GitHub Pages (custom domain)
cPanel Hosting
Troubleshooting
License

Overview
Single file: index.html
Assets: images & video in /assets/
Form: sends enquiries to Formspree (no backend required)
Design: modern dark theme, responsive, no external dependencies

Tech & Requirements
Works in any modern browser
Host on any static web server (GitHub Pages, Netlify, cPanel, etc.)
Requires a free Formspree account for the contact form
No Node, npm, PHP, or database needed

Project Structure
/
├── index.html
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── pages-home.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── degreecelsius-logo.png
│   │   ├── favicon.ico
│   │   ├── ducted-air-conditioning.jpg
│   │   ├── split-system.jpg
│   │   ├── hydronic-heating.jpg
│   │   ├── hydronic-underfloor-heating.jpg
│   │   ├── new-build.jpg
│   │   ├── servicing.jpg
│   │   └── integration.jpg
│   └── videos/
│       ├── project-video.mp4
│       └── project-video-preview.jpg
├── CNAME
├── README.md
├── robots.txt
├── site.webmanifest
└── sitemap.xml

Ensure file names exactly match what’s referenced in index.html.

Quick Start
Clone or copy the project to your computer or web host.
Keep the folder structure intact (/assets/ paths must stay the same).
Open index.html in a browser to preview.
Replace images/video with your own (or update the paths).
Update the Formspree action URL (see below).

Editing Content
All content is inside index.html:
Branding & Hero
Logo: assets/images/degreecelsius-logo.png
Tagline: “Redefining comfort, one degree at a time”
Sidebar Navigation
Section anchors: #hero, #why, #services, #projects, #contracting, #contact

Sections
Update text directly in each <section> block.
Service images located in /assets/images/.
Featured Project
Video: /assets/videos/project-video.mp4
Poster image: /assets/videos/project-video-preview.jpg
Footer (Contact)
Phone, website, and social links appear near the end of the file.
<a href="tel:+61459326621">0459 326 621</a>
<a href="https://www.degreecelsius.com.au" target="_blank">www.degreecelsius.com.au</a>

Meta Tags
Update <title> and <meta name="description"> for your preferred SEO text.
Contact Form (Formspree)
The site uses Formspree.io
 for form submissions — no backend required.
<form action="https://formspree.io/f/xkgqyvdz" method="POST">

To use your own Formspree form:
Create a Formspree form and copy your endpoint URL (e.g., https://formspree.io/f/xxxxxxx).

Replace the action value in the form.
Keep the hidden fields:
<input type="text" name="_gotcha" hidden>
<input type="hidden" name="_subject" value="New website enquiry – Degree Celsius">
<input type="hidden" name="_captcha" value="false">

Images, Video & Favicon
Images
Use JPG for photos, PNG/WebP for graphics.
Recommended max width: 1600–2000 px.
Compress to under ~300 KB where possible.

Video
Format: MP4 (H.264).
Keep under ~15–20 MB for smooth loading.
Poster image shows before playback.

Favicon
Ensure assets/images/favicon.ico exists and matches this tag:
<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">
If not showing, clear browser cache or hard refresh.

Accessibility & SEO
All <img> tags include descriptive alt text.
Maintain logical heading order (h1 → h2 → h3).
Keep strong color contrast (theme is already high-contrast).
Meta description and Open Graph tags are pre-filled for SEO.

Optional extras:
robots.txt:
User-agent: *
Allow: /
Sitemap: https://www.degreecelsius.com.au/sitemap.xml

Deploying
Create (or open) your repository on GitHub.
Example: https://github.com/YOURUSERNAME/degree-celsius-website

Upload your files keep the existing structure:

Go to
Settings → Pages → Build and Deployment

Source: Deploy from a branch
Branch: main
Folder: / (root)
Save and wait for the page to build.

Once GitHub Pages publishes your site, it will appear at
https://YOURUSERNAME.github.io/degree-celsius-website/

Connect Your Custom Domain (Crazy Domains)
In your repo:
Go to Settings → Pages → Custom domain
Enter:
www.degreecelsius.com.au
GitHub will create a CNAME file automatically.
In Crazy Domains → cPanel → Zone Editor, add/update DNS records:
CNAME (for www)
Name: www
Type: CNAME
Value: YOURUSERNAME.github.io
TTL: 3600

A Records (for root domain)
Name: degreecelsius.com.au
Type: A
Value:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
TTL: 3600

(These are GitHub’s official IPs — keep them as is.)

In GitHub → Settings → Pages,
Tick “Enforce HTTPS” once the SSL certificate is ready.
It may take 15–60 minutes after DNS propagation.

Troubleshooting
Site not secure:
Ensure SSL is enabled for the domain.
Use only HTTPS image/video URLs.
Only one host (GitHub or cPanel) should serve your site.

Favicon missing:
Confirm path and file name match.
Clear cache or use Ctrl + Shift + R (hard refresh).

Images or videos not loading:
Check case-sensitive paths.
Compress large files.
Verify <video poster> image path.

Form not sending:
Check Formspree action URL.
Test submission via your Formspree dashboard.

Layout issues on mobile:
Check CSS media queries (search @media in CSS files).

License
Proprietary © 2025 Degree Celsius.
For internal or client use only.
If you plan to open-source this, replace proprietary assets and add a standard license (e.g., MIT).