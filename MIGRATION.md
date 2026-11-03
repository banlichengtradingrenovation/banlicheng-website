# Claude Code Migration Guide

This project is prepared as a portable Claude Code workspace. It contains the React/Vite source, package lockfile, static media assets, bilingual English/Chinese interface, and the run instructions needed to continue development without Manus-managed storage.

## 1. Copy or extract the project

Copy the complete project folder, or extract the supplied `banlicheng-claude-code.zip` archive. Keep the directory structure unchanged. Do not copy `node_modules`, `dist`, `.git`, `.manus-logs` or other generated runtime folders from the original environment; Claude Code can recreate them.

## 2. Install and run

From the project root:

```bash
pnpm install
pnpm dev:claude
```

Then open `http://localhost:3000`.

Useful commands:

```bash
pnpm check          # TypeScript check
pnpm build:static   # Vite production build
pnpm test           # Existing test suite
pnpm format         # Prettier formatting
```

The website is intentionally runnable as a static frontend. It does not require a database, authentication, API key or external environment variable for the current landing page.

## 3. Media assets

The original uploaded MOV files have been converted to silent, 1080px-wide, 30fps H.264 MP4 files with no audio track. They are stored locally here:

| File | Website role |
|---|---|
| `client/public/media/kitchen-hero.mp4` | Opening hero transformation |
| `client/public/media/kitchen-island.mp4` | Kitchen project showcase |
| `client/public/media/living-room.mp4` | Living-room feature wall showcase |
| `client/public/media/common-room.mp4` | Common-room storage/carpentry showcase |
| `client/public/media/bedroom.mp4` | Space-saving bedroom showcase |

The page references them as `/media/*.mp4`. Do not change them back to `/manus-storage/*` paths in the portable version.

## 4. Contact behavior

The contact number is currently `+65 8156 8359`. The form opens a pre-filled WhatsApp message in a new tab. Replace this only after the owner confirms a new number. The page also provides direct call and WhatsApp links.

## 5. Bilingual behavior

The header contains a prominent `EN / 中文` switch. The selected language is stored in browser local storage under `blc-language`. The Chinese mode translates the main hero, pain points, solution, project descriptions, services, process, popup, enquiry form and mobile CTAs. When adding new visible content, add both English and Simplified Chinese copy.

## 6. Deployment

For a static host, build with `pnpm build:static` and deploy the generated `dist/public` directory. The build output contains `index.html`, assets and the route manifest. If using a host with a different output convention, keep the SPA fallback pointed at `index.html` and keep `/media/*` as public static assets.

## 7. Owner content still needed

Before launch, collect and add only verified content:

- Genuine customer reviews and names/property labels if permission is available
- Final company address and service area
- Verified certifications, registrations or warranty statements
- Final logo/brand assets if the owner has a preferred version
- Any additional project details such as property type, scope and duration

Do not fabricate these details to fill empty sections.
