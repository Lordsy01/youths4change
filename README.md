# Youths4Change — Bamenda Branch Website

A full website for the Youths4Change Initiative (Y4C) Bamenda branch, built with
**React (Vite)** on the frontend and **Node.js/Express** on the backend.

## Project structure

```
youths4change-bamenda/
├── client/     React frontend (pages, components, styles, images)
└── server/     Node.js/Express backend (contact + volunteer form handling)
```

See `client/` and `server/` for their own internal structure — everything is
organized by feature (one folder per component/page) to make it easy to find
and edit things.

## Running it locally

### 1. Backend (server)

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

The API runs at `http://localhost:5000` by default. Form submissions are saved
to `server/data/*.json` and logged to the console (email sending is off until
you configure SMTP — see comments in `server/utils/sendEmail.js`).

### 2. Frontend (client)

In a second terminal:

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) — open it in
your browser.

## Adding your real photos

The site currently shows styled placeholder boxes wherever a photo belongs, so
the layout looks intentional even before you add real images. To swap them in:

1. Drop your photos into the matching folder under
   `client/public/images/projects/<project-folder>/` (folders already exist for
   all five projects), `client/public/images/team/`, or `client/public/images/hero/`.
2. Open `client/src/data/projects.js` and `client/src/data/team.js`, and add the
   filenames you used to the `images` / `photo` arrays/fields.

The Home, Projects, Project Detail, and Gallery pages will automatically pick
up any images you list — no code changes needed beyond that.

## Deploying

- **Frontend**: `cd client && npm run build` produces a static `dist/` folder
  you can deploy to Netlify, Vercel, GitHub Pages, or any static host.
- **Backend**: deploy `server/` to any Node host (Render, Railway, a VPS, etc.)
  and point the frontend's `VITE_API_URL` (in `client/.env`) at its live URL.

## Editing text content

Almost all page copy (vision, mission, slogans, project descriptions,
membership requirements) lives in plain JS files under `client/src/data/`, so
you can update wording without touching any component code.
