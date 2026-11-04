# Ban Li Cheng Renovation Website

A mobile-first, bilingual (English / 简体中文) one-page website for Ban Li Cheng Trading & Renovation, a Singapore renovation contractor established in 1984.

## Quick start with Claude Code

```bash
pnpm install
pnpm dev:claude
```

Open `http://localhost:3000`.

```bash
pnpm check
pnpm build:static
```

The website is currently a static frontend and does not need a database, login or API key. The five silent renovation videos are included in `client/public/media/` and are referenced with local `/media/*.mp4` paths.

Read [CLAUDE.md](CLAUDE.md) for project rules and [MIGRATION.md](MIGRATION.md) for the complete migration/deployment guide.

## Main files

- `client/src/pages/Home.tsx` — page structure, bilingual copy, CTAs and popup behavior
- `client/src/index.css` — responsive visual system and layout
- `client/public/media/` — local renovation video assets
- `client/public/manus-routes.json` — single-page route declaration
- `package.json` / `pnpm-lock.yaml` — reproducible Node dependencies and scripts
