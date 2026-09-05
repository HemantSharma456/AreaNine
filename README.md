# AreaNine — Architecture Portfolio

A premium, minimal React architecture portfolio website for **AreaNine Studio**.

> **v2 — Logo-matched monochrome theme.** The colour palette has been updated to match the AreaNine logo: deep black backgrounds, crisp white/silver accents, and zero gold. The logo mark (geometric double-A in a white circle) is implemented as a native SVG component — no image file required.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🖼️ Replacing Placeholder Images

> **Important:** All images in this project are placeholders. Replace them with your actual project photos before deploying.

All image files should be placed in:

```
src/assets/images/
```

Keep the **same filenames** listed below, or update the `src/data/siteData.js` imports accordingly.

### Required Images

| File | Used In |
|------|---------|
| `hero.jpg` | Home hero section (full-viewport) |
| `about-studio.jpg` | About section — studio photo |
| `contact-bg.jpg` | Contact section background |
| `project1.jpg` | Meridian House — cover |
| `project1-2.jpg` | Meridian House — gallery |
| `project1-3.jpg` | Meridian House — gallery |
| `project2.jpg` | Oblique Tower — cover |
| `project2-2.jpg` | Oblique Tower — gallery |
| `project2-3.jpg` | Oblique Tower — gallery |
| `project3.jpg` | Salt Gallery — cover |
| `project3-2.jpg` | Salt Gallery — gallery |
| `project4.jpg` | Canopy Pavilion — cover |
| `project4-2.jpg` | Canopy Pavilion — gallery |
| `project5.jpg` | Threshold Spa — cover |
| `project5-2.jpg` | Threshold Spa — gallery |
| `project5-3.jpg` | Threshold Spa — gallery |
| `project6.jpg` | Void House — cover |
| `project6-2.jpg` | Void House — gallery |
| `team1.jpg` | Team — Elena Voss |
| `team2.jpg` | Team — Marcus Chen |
| `team3.jpg` | Team — Isabelle Fontaine |
| `team4.jpg` | Team — Raj Patel |
| `gallery1.jpg` | Gallery grid |
| `gallery2.jpg` | Gallery grid |
| `gallery3.jpg` | Gallery grid |
| `gallery4.jpg` | Gallery grid |
| `gallery5.jpg` | Gallery grid |
| `gallery6.jpg` | Gallery grid |
| `gallery7.jpg` | Gallery grid |
| `gallery8.jpg` | Gallery grid |

### Recommended Image Sizes

| Use | Recommended Size |
|-----|-----------------|
| Hero | 2560 × 1440px |
| Project cover | 1200 × 900px |
| Gallery | 1200 × 1600px (tall), 1600 × 900px (wide) |
| Team | 600 × 800px |
| About studio | 1200 × 1600px |

---

## 🗂️ Project Structure

```
src/
  assets/
    images/           ← Put all your images here
  components/
    Navbar.jsx        ← Sticky nav with mobile menu
    Navbar.css
    Footer.jsx        ← Site footer
    Footer.css
    PlaceholderImage.jsx  ← Smart image component
    SectionHeader.jsx     ← Reusable section titles
    SectionHeader.css
  data/
    siteData.js       ← All content lives here (projects, team, etc.)
  hooks/
    useHooks.js       ← Custom React hooks (theme, scroll animation, etc.)
  pages/
    Hero.jsx / .css         ← Home hero section
    Projects.jsx / .css     ← Projects grid + modal
    About.jsx / .css        ← Firm story, team, awards
    Gallery.jsx / .css      ← Image gallery with lightbox
    Services.jsx / .css     ← Services cards
    Contact.jsx / .css      ← Contact form
  styles/
    global.css        ← Global reset, tokens, typography
  App.jsx             ← Main app + routing
  main.jsx            ← React entry point
```

---

## 🎨 Customisation

### Changing Content
Edit `src/data/siteData.js` to update:
- Firm name, tagline, location, contact details
- Project names, descriptions, categories, locations
- Team member names, roles, bios
- Services list
- Gallery captions

### Changing Colours
Edit `src/styles/global.css` — look for the `:root` block. Key variables:
- `--color-accent` — the gold accent colour (default `#c9a96e`)
- Dark/light mode colours in `[data-theme="dark"]` and `[data-theme="light"]`

### Adding / Removing Projects
In `src/data/siteData.js`, add or remove entries in the `projects` array. Each project needs:
```js
{
  id: 7,
  title: "Project Name",
  category: "Residential",   // must match a category in `categories` array
  location: "City, Country",
  year: "2024",
  area: "500 sqm",
  status: "Completed",
  description: "Long description...",
  shortDesc: "Short tagline.",
  coverImage: "/assets/images/project7.jpg",   // Replace with actual image
  gallery: ["/assets/images/project7.jpg"],
  tags: ["Tag1", "Tag2"],
}
```

---

## ⚙️ Features

- ✅ React 18 + Vite
- ✅ Light / Dark mode (persists via localStorage)
- ✅ Smooth scroll navigation
- ✅ Project category filtering
- ✅ Project detail modal with gallery
- ✅ Gallery lightbox with keyboard-style prev/next
- ✅ Scroll-triggered reveal animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Contact form with success state
- ✅ Accessible markup (aria-labels, semantic HTML)

---

## 📝 Notes

- No external CSS frameworks — all styles are handwritten
- Fonts loaded from Google Fonts: Cormorant Garamond, Syne, DM Sans
- No routing library needed — single-page scroll with IntersectionObserver

---

*AreaNine Architecture Studio — Designing Spaces. Defining Experiences.*
