# The Just Rocket Science Show — Episode Guide

A small static web app that lists every episode of **The Just Rocket Science Show**, a podcast featuring long-form interviews with the founders, engineers, and investors building the future of space.

The app is a single-page Vite + React + TypeScript build. No backend, no API keys, no secrets — it ships as plain static files.

## Run locally

```bash
npm install
npm run dev      # start the local dev server (http://localhost:5173)
npm run build    # produce a production build in ./dist
npm run preview  # serve the built output locally
```

Requirements: Node 18+ (Node 20/24 tested) and npm.

## Project layout

```
.
├── index.html              # entry HTML
├── src/
│   ├── main.tsx            # React bootstrap
│   ├── App.tsx             # page layout + episode cards
│   ├── App.css             # retro-futuristic light theme
│   ├── index.css           # base styles + design tokens
│   └── episodes.ts         # episode data (21 episodes)
├── public/
│   └── favicon.svg
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Data source

Episode metadata (titles, durations, view counts, video IDs) is sourced from the public YouTube playlist for the show:

- Playlist: <https://www.youtube.com/playlist?list=PLCLc3X79kE7mB6aXVgb_T4Gg12ayg62wX>

Thumbnails are loaded directly from YouTube's CDN:

```
https://img.youtube.com/vi/<VIDEO_ID>/hqdefault.jpg
```

Thumbnails and video content remain the property of their respective rights holders. This is an unofficial, fan-made episode index.

## Design

- Cream / pale background with neon cyan + magenta accents
- Subtle background grid and starfield to reinforce a retro-futuristic feel
- Card-per-episode layout with thumbnail, episode number, duration, view count, and a deep link to YouTube
- Sort controls (newest, oldest, longest, most viewed) and a fully responsive layout down to ~360px wide

## License

The code in this repository is provided as-is for reference. All show titles, thumbnails, and links belong to the original creators.
