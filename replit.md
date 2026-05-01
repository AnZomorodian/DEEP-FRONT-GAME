# OpenFront.io

An online real-time strategy (RTS) game focused on territorial expansion and alliance building. A fork/rewrite of WarFront.io, licensed under GNU AGPL v3.0.

## Architecture

- **Frontend**: TypeScript + Vite + Lit web components + PixiJS (2D rendering) + Tailwind CSS
- **Backend**: Node.js + Express v5 + WebSockets (ws) + Protocol Buffers
- **Game Engine**: Deterministic TypeScript simulation running in Web Workers
- **Map Generator**: Go (standalone)

### Key Ports
- `5000` — Vite dev server (frontend)
- `3000` — Master server (Express + WebSocket lobby)
- `3001`, `3002` — Worker servers (forked by cluster)

### Server Structure
The server uses Node.js cluster: one master process (port 3000) and N worker processes (ports 3001+).

## Running Locally

The `Start application` workflow runs both frontend and backend concurrently:
```
cross-env GAME_ENV=dev concurrently "vite" "tsx src/server/Server.ts"
```

## Key Scripts

- `npm run dev` — Run both Vite and server concurrently in dev mode
- `npm run build-prod` — TypeScript check + Vite production build
- `npm run start:server` — Start backend only
- `npm run test` — Run unit tests with Vitest

## Environment Variables

- `GAME_ENV` — `dev`, `staging`, `prod`, or `selfhosted` (required)
- `API_KEY` — API key for external integrations (not needed in selfhosted mode)
- `NUM_WORKERS` — Number of game workers in selfhosted mode (default: 4)
- `CDN_BASE` — Optional CDN URL for assets
- `STRIPE_PUBLISHABLE_KEY` — Optional Stripe integration

### Self-Hosted VPS Mode (`GAME_ENV=selfhosted`)
Use this when running Deep Front on your own VPS without access to api.openfront.io:
- Accepts player-generated persistent IDs (no OpenFront.io account needed)
- Disables matchmaking polling to api.openfront.io (no more timeout errors)
- Skips Turnstile CAPTCHA enforcement
- Configurable worker count via `NUM_WORKERS` env var (default 4)
- Build: `GAME_ENV=selfhosted npm run build-prod` (uses production Vite build)
- Start: `GAME_ENV=selfhosted NUM_WORKERS=4 node dist/server/Server.js`

## Deployment

Configured as VM deployment (required for WebSocket state persistence):
- **Build**: `npm run build-prod`
- **Run**: `cross-env GAME_ENV=prod tsx src/server/Server.ts`

## Deep Front V1.22.12 Customizations

### Explosion Radii (DefaultConfig.nukeMagnitudes)
- Cruise: inner 6 / outer 15
- Atom: inner 14 / outer 35
- Hydrogen: inner 32 / outer 75
- MIRV warhead: inner 14 / outer 35
- Doomsday mode: +25% nuke radius; BattleRoyale: +50% startManpower

### Game Mode Differentiation
- Doomsday: 0.6× silo cooldown (SiloCooldown), +25% startManpower, +25% nuke radius
- BattleRoyale: +50% startManpower

### Cruise Launcher Cooldown Bar
- UILayer shows progress bar for CruiseLauncher (case in getProgress switch and onUnitEvent)
- SiloCooldown(CruiseMissile) = 55 ticks

### Cruise Missile 2-Hit Structure Mechanic
- NukeExecution uses a WeakMap<Game, Map<number,number>> (cruiseStructureHitsByGame)
- Structures (City, DefensePost, SAMLauncher, MissileSilo, Port, Factory, OilFactory, CopperMine, CruiseLauncher, FishingDock) require 2 cruise hits to destroy
- First hit calls unit.touch() (no visual damage indicator — expected)

### FishingDock Building (New)
- UnitType.FishingDock = "Fishing Dock"
- Coastal-only (isShore() restriction in PlayerImpl.fishingSpawn)
- Cost: 200,000 gold, not upgradable, construction duration 100 ticks
- Income: 4,000 gold per 100 ticks (FishingDockExecution)
- Keybind: ] (BracketRight)
- Icon: resources/images/FishingDockIcon.svg, resources/images/buildings/fishingDock.svg

### Flags System
- Flag files: resources/flags/<code>.svg (584 files total)
- Referenced by code in PlayerInfo.flag and nation.flag
- To add a new flag: drop an SVG named <yourcode>.svg into resources/flags/
- The flag picker in-game will automatically list it
