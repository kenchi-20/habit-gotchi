# HabitGotchi

A browser-based virtual pet — care for an egg through adulthood, unlock forms in the Petdex, and play short mini-games. Built with plain HTML, CSS, and JavaScript (no build step).

## Features

- **Care loop** — Feed, Play, Clean, and Light manage Food, Fun, Energy, and Health
- **Growth stages** — Egg → Baby → Child → Adult in real time (~15s / ~3 min / ~10 min)
- **8 adult forms** — Care quality in the child stage decides the form:
  - Fluffwing, Grumble, Shellby, Fanglet, Whisker, Bubblo, Starlet, Droplet
- **Petdex** — Catalog of unlocked adult forms; locked entries show as `???`
- **3 mini-games** — Look (left/right), Dice (high/low), Catch (tap when the heart appears)
- **Customize** — Name, coat pattern (Classic / Spotted / Striped / Patched), accessories (Bow, Crown, Top hat, Glasses), device colors, screen tints
- **Pixel pet screen** — 32×24 canvas sprite with mood animations
- **Local saves** — Progress stays in the browser (`localStorage`)

## How to Play

1. Wait for the egg to hatch, then keep the four meters healthy
2. Clean messes; use **Light** when the pet needs sleep
3. Open **Play** and pick Look, Dice, or Catch for bonus Fun
4. Raise the pet through childhood — better care unlocks rarer adult forms
5. Open **Petdex** to see which forms you’ve discovered
6. Use **Customize** for name, look, and device styling
7. If the pet passes away, hatch a new egg and try again

## Run locally

Open `index.html` in a modern browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

### Mobile

Works on phone browsers. The layout uses a responsive viewport and fluid width. On the same Wi‑Fi, run the local server on your PC and open `http://YOUR-PC-IP:8000`, or deploy and open the public URL.

## Data storage

Everything is stored **per browser / device** in `localStorage`. There is no account or cloud sync.

| Key | Contents |
|-----|----------|
| `pocketpet-v1` | Pet stats (age, meters, form, sleep, alive, …) |
| `pocketpet-style` | Name, breed pattern, accessories, shell/LCD colors |
| `pocketpet-dex` | Unlocked adult form IDs for the Petdex |

Clearing site data, switching browsers, or using another device starts fresh.

## Deploy

Static hosting only — upload the project root (`index.html` at the top level).

- **Netlify Drop** — drag the `HabitGotchi` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages** — push these files to a repo, then enable Pages from the `main` branch / root
- **Vercel / Cloudflare Pages** — connect the repo or upload; framework = none / static

## Files

| File | Description |
|------|-------------|
| `index.html` | Page structure, controls, customize + Petdex panels |
| `style.css` | Device look, meters, chips, Petdex cards |
| `script.js` | Care loop, sprites, mini-games, Petdex, saves |
