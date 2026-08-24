# Youths 4 Change Bamenda — Website

A React (Vite) website for Youths 4 Change Bamenda. No backend, no sign-up/login —
this is the front-end only; a Node.js backend can be connected later (see the
"Connecting a backend later" section below).

## Getting Started

You'll need [Node.js](https://nodejs.org) installed (v18 or newer recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev

# 3. Open the URL shown in the terminal (usually http://localhost:5173)
```

To build for production:

```bash
npm run build
```

This creates a `dist/` folder you can upload to any static host (Netlify, Vercel,
GitHub Pages, cPanel, etc.).

## Project Structure

```
src/
  assets/images/     <- put your real photos here
  components/        <- reusable pieces (Navbar, Footer, cards, etc.)
  data/programs.js   <- ALL TEXT CONTENT for the 9 activity pages lives here
  pages/             <- one file per top-level page
  styles/            <- CSS, one file per component/page (kept separate from JS)
```

## Pages

- `/` — Home
- `/about` — About Us (mission, vision, story, values, team)
- `/programs` — Overview grid of all 9 activities
- `/programs/:slug` — Individual page for each activity (see below)
- `/contact` — Get Involved (contact form + info)

## The 9 Activity Pages

Each activity automatically gets its own page and URL, generated from
`src/data/programs.js`, using the shared template in
`src/pages/ProgramDetail.jsx`:

| Activity | URL |
|---|---|
| EmpowerHer Initiative | `/programs/empowerher-initiative` |
| GreenFuture Initiative | `/programs/greenfuture-initiative` |
| Mentorship and Career Guidance Program | `/programs/mentorship-career-guidance` |
| Community Support and Social Outreach | `/programs/community-support-outreach` |
| Youth Innovation Hub | `/programs/youth-innovation-hub` |
| Back-to-School Campaign | `/programs/back-to-school-campaign` |
| Digital Safety and Scam Awareness Program | `/programs/digital-safety-scam-awareness` |
| Computer and Basic IT Skills Training | `/programs/computer-basic-it-skills` |
| Community Problem Identification Platform | `/programs/community-problem-identification` |

**To edit any activity's text** (summary, goals, activities list, who it's for,
etc.), open `src/data/programs.js` and edit that program's object — you don't
need to touch any component code.

**To add a new activity**, copy one of the objects in `src/data/programs.js`,
give it a unique `slug`, and it will automatically get its own page and appear
on the `/programs` overview and in the footer.

## Adding Your Photos

Every spot where a photo belongs is marked two ways:
1. A `{/* IMAGE SPOT: ... */}` comment in the code, describing what should go there.
2. A visible dashed placeholder box on the page itself, so you can see exactly
   where it will appear while browsing the site.

To replace a placeholder with a real photo:

1. Save your photo into `src/assets/images/`.
2. In the relevant page file, import it near the top:
   ```jsx
   import heroPhoto from '../assets/images/hero.jpg'
   ```
3. Replace the `<ImagePlaceholder ... />` tag with:
   ```jsx
   <img src={heroPhoto} alt="Describe the photo" className="photo" />
   ```

Tip: search the whole project for `IMAGE SPOT` to find every single placeholder
at once.

## Styling

All CSS is separated from the components — every component/page has its own
`.css` file in `src/styles/`, imported at the top of its matching `.jsx` file.
Shared design tokens (colors, fonts, spacing) live in `src/styles/variables.css`
— change a value there and it updates across the whole site.

The site is fully responsive, with breakpoints mainly at 860px (tablet) and
560px (small mobile).

## Connecting a Backend Later

The Contact page (`src/pages/Contact.jsx`) has a working form that currently
just confirms submission on-page. It's marked with a `TODO` comment showing
exactly where to add a real `fetch()` call once your Node.js backend and API
endpoint exist.

There is intentionally no sign-up / login flow anywhere in this project, per
your instructions — that can be added later once the backend is ready.
