# Ban Li Cheng Renovation — Claude Code Instructions

## Project goal

This is a one-page, mobile-first renovation contractor website for Ban Li Cheng Trading & Renovation in Singapore (the registered business name is NOT "Pte Ltd"; never add "Pte Ltd" or "Private Limited"). The company was established in 1984 and was formerly known as Sin Bee Loong. The site is designed to turn homeowner uncertainty into a simple consultation or WhatsApp enquiry.

## Local development

Use the portable static frontend workflow:

```bash
pnpm install
pnpm dev:claude
```

Open `http://localhost:3000`. The same command can be run as `pnpm dev:static`. Use `pnpm check` for TypeScript diagnostics and `pnpm build:static` for the production static build. The normal `pnpm dev` command starts the original Express/platform scaffold and is not required for the static landing page.

## Important implementation facts

- Main page: `client/src/pages/Home.tsx`
- Visual system: `client/src/index.css`
- HTML metadata: `client/index.html`
- Company logo: `client/public/brand/ban-li-cheng-logo.png` (navy on transparent). The live file is the cream/white version (for the dark background, no background tab). `ban-li-cheng-logo-navy.png` is the original navy version for light backgrounds. Do not redraw the logo without owner approval.
- Local videos: `client/public/media/`
- Single route manifest: `client/public/manus-routes.json`
- Contact/WhatsApp number: `+65 8156 8359` / `https://wa.me/6581568359`
- The page has an English / 中文 switch in the header. Keep the Chinese mode functional when changing content.
- Video assets are silent MP4 files. Do not reintroduce audio or allow an unmute path unless the owner explicitly requests it.
- The page includes a consultation popup after approximately 40% scroll. Keep it dismissible and do not show it repeatedly in the same browser session.
- Do not invent customer reviews, certifications, project counts, warranties, addresses or pricing. Use clearly marked placeholders or ask the owner for verified content.
- Do not add generic stock imagery or replace the supplied renovation videos without approval.

## Deployment (Cloudflare Workers Builds from GitHub)

- GitHub repo: `banlichengtradingrenovation/banlicheng-website` (branch `main`). Cloudflare project/Worker name: `banlicheng-website`.
- Cloudflare build settings: Build command `pnpm build:static`, Deploy command `npx wrangler deploy`, Root directory `/`.
- `wrangler.jsonc` serves the built site from `dist/public` as static assets. Keep the Worker `name` identical to the Cloudflare project name.
- `.node-version` pins Node 22. A push to `main` triggers a new build and deploy.

## Brand direction

Use a warm, modern editorial renovation aesthetic: cream, charcoal, terracotta and muted ochre, with confident serif headlines and clean sans-serif body copy. The voice should be direct, reassuring and practical rather than sales-heavy.

## Content priorities

Keep the story concise: homeowner worries, Ban Li Cheng's solution, real transformations, process, and a strong consultation/WhatsApp CTA. The service scope includes HDB, condo and landed homes; hacking, tiling, painting, custom carpentry and feature walls.

## Before handing back changes

Run:

```bash
pnpm check
pnpm build:static
```

Verify that all five files in `client/public/media/` exist and that the language toggle still changes the key page copy. Keep the site usable on a narrow mobile viewport and preserve accessible labels on buttons, links, forms and video elements.
