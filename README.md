# Nithin Kumar U – Portfolio

A clean, modern, and responsive personal portfolio website. Built with semantic HTML, modern CSS, and a sprinkle of JS for interactivity.

## Quick start

- Open `index.html` directly in your browser, or
- Serve the folder with any static server for best results (fonts, routing):
  - Node: `npx serve .` or `npx http-server .`
  - Python: `python -m http.server 8080`
  - VS Code: Live Server

## Customize

- Text and links: edit `index.html`
  - Replace `your.email@example.com`, LinkedIn, and GitHub URLs
  - Update project titles, descriptions, and links
  - Replace experience and testimonials
- Colors and spacing: tweak CSS variables at the top of `css/styles.css`
- Animations: `.reveal` elements use IntersectionObserver (see `js/main.js`)
- Resume: replace `assets/resume/Nithin-Kumar-U-Resume.pdf` with your real resume (create the `assets/resume/` folder). Update links if needed.
- Contact form: use Formspree (free) by creating a form and replacing `{{FORMSPREE_ID}}` in the form `action`. Without it, the form will open your mail client as a fallback.
- Favicon: replace `favicon.svg` with your own (or keep the included one).

## SEO

- Update `<meta>` tags (title, description, `og:*`), and the JSON-LD in `index.html`
- Set your real domain in `robots.txt` and `sitemap.xml`

## Notes

- This is a static site—no build step required.
- The site is responsive and tested at common breakpoints.
- Accessibility: semantic structure, labels, focusable controls.# Nithin Kumar U — Personal Portfolio

A clean, modern, and responsive personal portfolio website showcasing projects, skills, experience, and contact details. Built with semantic HTML, modern CSS, and a small amount of JavaScript for interactivity.

---

## Live demo
Your site will be available at:  
`https://nithinkumaru.github.io/professional-Profile/`  
(if you use GitHub Pages for the `main` branch)

---

## Features
- Responsive, mobile-first layout
- Sections: About, Projects, Skills, Experience, Contact
- Simple contact form (Formspree-ready)
- Resume download link
- Lightweight JS utilities (nav toggle, reveal fallback)
- Easy to customize and extend

---

## Tech stack
- HTML5, CSS3 (custom styles)
- Vanilla JavaScript for small interactions
- Static site — no build step required

---

## Quick start (local)
1. Clone the repo:
```bash
git clone https://github.com/Nithinkumaru/professional-Profile.git
cd professional-Profile



