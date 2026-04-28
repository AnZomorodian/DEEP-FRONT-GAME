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

- `GAME_ENV` — `dev`, `staging`, or `prod` (required)
- `API_KEY` — API key for external integrations
- `CDN_BASE` — Optional CDN URL for assets
- `STRIPE_PUBLISHABLE_KEY` — Optional Stripe integration

## Deployment

Configured as VM deployment (required for WebSocket state persistence):
- **Build**: `npm run build-prod`
- **Run**: `cross-env GAME_ENV=prod tsx src/server/Server.ts`
