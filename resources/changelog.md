# 🚀 Deep Front - What's New

Welcome to **Deep Front V1.22.12**, the polished evolution of OpenFront with a deeper strategy layer, expanded toolbox, and tighter visual feedback. Here's everything that's new:

---

## 🆕 V1.22.12 Latest Updates

### ⚡ Blitz & 🔥 Chaos — Two New Game Modes

- **⚡ Blitz** — A speed-focused variant where everything doubles: troop growth, gold income, and construction speed. +50% starting troops. First player to build an economic advantage wins before others can catch up.
- **🔥 Chaos** — Maximum destruction mode. 2× nuke explosion radius, 50% faster reload on all launchers, 2× starting troops, 50% cheaper buildings. Expect nukes flying in the first 100 ticks.
- Both modes are available in Solo and Create Lobby (use the mode selector tiles).

### 🎯 Cruise Missile Rework

- **Surgical strikes only.** Cruise missiles now destroy **Factory, Oil Factory, and Copper Mine** — and nothing else. Cities, Ports, Silos, and Defense Posts survive a cruise hit.
- This makes cruise missiles a precision economic weapon. Use them to cripple enemy income, not to clear cities.
- **Glowing headlight.** Cruise missiles now show a gold → orange → red radial glow at the nose while in flight.
- **SAM sounds.** SAM launchers now play a launch sound when they fire and a hit sound on interception.

### 🎵 Victory Song

- A **Play Victory Song** button is now in the in-game Settings panel. You can use it **twice per game** to blast the victory theme. Uses left are shown on the button.

### ⌨️ Keybind Fixes

- **`-` and `=` keys** now control your **attack ratio** (troop commitment) instead of zooming. Zoom keys remain `Q` / `E` (or scroll wheel). This makes unit-focused hotkeys feel more natural.

### 🏗️ Visual Improvements

- **Pixel-art buildings appear earlier** when zooming out (threshold lowered from 4.3× to 2.5× zoom). Copper Mine, Oil Factory, Cruise Launcher, and Fishing Dock pixel-art icons are now visible at a wider zoom range.

---

## 🆕 V1.22.12 Polish Pass

- **All Single Player options are now in the multiplayer Create Lobby modal too** — host with the exact same toggles as solo (mega income, big bombs, limit cities, etc.).
- **Oil Factories and Copper Mines now connect via railroad** like Factories — they automatically build a train station and link to nearby industrial buildings.
- **New "Info" tab in the header** — a one-stop reference for build limits, cooldowns, income rates, and lobby option effects.
- **New "Battle Royale" and "Doomsday" game modes** — two new flavors of FFA in the mode selector.
- **Brand-new typography** — the whole UI is now set in Rajdhani for that crisp military / strategy feel.
- **Version stamp** — `V1.22.12` shown right under the "Deep Front" title.

---

## 🎮 New Game Options

A growing roster of optional rule tweaks for Single Player. Mix and match to design the match you want:

- **Mega Income** — Huge gold income boost for fast-paced games.
- **Cheap Buildings** — All structures cost 50% less to build.
- **Fast Construction** — Buildings finish significantly faster.
- **Disable Nukes** — A pure conventional warfare experience (no atomic bombs, hydrogen bombs, MIRVs, or cruise missiles).
- **Disable Naval** — No warships, focus on land conflict.
- **Big Bombs** — Nukes detonate with 1.5× the blast radius.
- **Super Troops** — Troop growth doubled for explosive expansion.
- **No Launcher Cooldown** — Missile silos and cruise launchers fire instantly.
- **Cheap Missiles** — Atom bombs, hydrogen bombs, MIRVs, and cruise missiles cost 50% less.
- **Fast Nukes** — Nukes fly at 2× speed for rapid strikes.
- **Limit Launchers** — Cap each player at 5 missile silos + cruise launchers combined.
- **Limit Oil Factories** — Cap each player at 3 oil factories.
- **Limit Cities** — Cap each player at 10 cities.
- **Limit Warships** — Cap each player at 5 warships.

---

## 🚀 Cruise Missile System

A brand-new long-range strike weapon, fully integrated with the existing missile arsenal:

- **Cruise Launcher building** — A new structure dedicated to launching cruise missiles.
- **Reload timer & visible cooldown bar** — Just like missile silos and SAM launchers, the launcher displays a clear ground-based cooldown bar while reloading (75 ticks per cycle).
- **Dashed flight trail** — Cruise missiles trace a clean dashed path from launcher to target, matching the visual language of nukes.
- **Trail clears on impact** — The flight trail is reliably removed on detonation or interception (no more orphan dashes).
- **Explosion light effect** — Cruise impacts now produce a proportional flash and shockwave (radius 35), giving them the right "atom bomb" punch in scale.
- **SAM defense** — SAM launchers can now intercept cruise missiles in addition to nukes.

---

## ⚖️ Building & Economy Rebalance

- **Building pricing tiers** — Costs and durations re-tuned across the board for a more meaningful build order.
- **Oil & copper income** — Resource generation rebalanced so factories and oil wells feel impactful but not oppressive.
- **Refined building SVGs** — Cleaner, more readable structure icons on the map.

---

## 🎨 Polish & Quality of Life

- **Cooldown bars on all launchers** — Missile Silo, SAM Launcher, and now Cruise Launcher all show their reload state at a glance.
- **Defensive trail cleanup** — All nuke-class units (atom, hydrogen, MIRV, cruise) reliably clear their dashed flight trails on deactivation.
- **Robust missile readiness** — Fixed an edge-case division-by-zero in the missile readiness indicator.
- **Updated footer & branding** — The home screen now wears its Deep Front identity proudly.
- **News in the header** — A dedicated News tab in the top navigation so you never miss a new feature drop.

---

## 🔧 Under the Hood

- Compatibility maintained with existing single-player and multiplayer flows.
- All new options are off by default — your existing matches play exactly as before.
- Type-safe wiring across schemas, config, gameplay, and UI for every new feature.

---

Thanks for playing **Deep Front**. More polish on the way.
