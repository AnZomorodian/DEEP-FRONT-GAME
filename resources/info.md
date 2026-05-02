# Deep Front — Field Manual V1.22.12

> Everything you need to plan, build, and conquer.
> All numbers assume default lobby settings.

---

## Game Modes

| Mode | Vibe | Key differences |
| --- | --- | --- |
| **Free For All** | Classic open-field brawl | Default settings |
| **Team** | Pre-assigned alliances share gold & troops | Win at 95% map control |
| **Battle Royale** | Big armies, fast eliminations | +50% starting troops |
| **Doomsday** | All-out missile warfare | +25% troops · +25% nuke radius · 40% faster silos |
| **Blitz** | Speed run — everything twice as fast | +50% troops · 2× growth · 2× gold · 50% faster builds |
| **Chaos** | Maximum destruction | 2× troops · 2× nuke radius · 50% faster reloads · 50% cheaper buildings |

---

## Build Limits (per player)

| Building | Cap |
| --- | --- |
| Missile Silos + Cruise Launchers | **5 combined** |
| Oil Factories | **3** |
| Cities | **10 locations** (each upgradable to any level) |
| Warships | **5** |

Upgrading an existing building never consumes a slot — only placed units count against limits.

---

## Weapons & Ranges

| Weapon | Inner | Outer | Notes |
| --- | --- | --- | --- |
| Cruise Missile | 6 | 15 | Destroys Factory / Oil Factory / Copper Mine only |
| Atom Bomb | 14 | 35 | One-shot kill on all structures |
| Hydrogen Bomb | 32 | 75 | City-leveler |
| MIRV | 14 | 35 | Multiple warheads per launch |

> **Big Bombs** lobby option ×1.5 · **Doomsday** mode ×1.25 — they stack.

---

## Reload / Cooldown Times

```
SAM Launcher      ▓▓▓▓▓▓▓▓▓▓                                        50t  (5s)
Cruise Missile    ▓▓▓▓▓▓▓▓▓▓▓                                        55t  (5.5s)
Atom Bomb         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                   80t  (8s)
Hydrogen Bomb     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                        125t (12.5s)
MIRV              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 300t (30s)
Anti-Ship L1      ▓▓▓▓▓▓                                             60t  (6s)
Anti-Ship L2      ▓▓▓▓                                               40t  (4s)
Anti-Ship L3      ▓▓▓                                                30t  (3s)
```

> In **Doomsday**, every silo cooldown is ×0.6 (Atom 48t · Hydrogen 75t · MIRV 180t).

---

## Anti-Ship Battery

Coastal defense structure — build on shore tiles adjacent to water.

| Stat | Value |
| --- | --- |
| Range | 80 tiles |
| Damage per shot | 334 (fixed) |
| Shots to destroy a Warship | **3** |
| Level 1 fire rate | 6 s |
| Level 2 fire rate | 4 s |
| Level 3 fire rate | 3 s |
| Cost (L1 / L2 / L3) | 600K · 900K · 1.2M |
| Max level | 3 |

- Respects alliances — will not fire on allied or same-team warships
- Shows range ring when placing (white circle, 80 tiles)
- Build near your coast to deny enemy warship access to your ports

---

## SAM Defense System

| Stat | Value |
| --- | --- |
| Range L1 → max | ~70 → ~150 tiles |
| Reload | 50t (5 s) per interceptor |
| Intercepts | Atom · Hydrogen · Cruise · MIRV |

Enemy SAM rings light up **red** when you select a nuke to fire.

**Counter:** Fire 3 cruise missiles at once — a single SAM can only intercept 1 per 5 s reload.

---

## Income Buildings

| Building | Base income | Interval |
| --- | --- | --- |
| City | Population-scaled gold | Continuous |
| Oil Factory | 15,000 g | 100t |
| Copper Mine | 7,000 g | 100t |
| Fishing Dock | Passive coastal income | Continuous |

### Upgrade Multipliers

```
Oil   L1 ×1.00   L2 ×1.10   L3 ×1.15   L4+ ×1.20
Cu    L1 ×1.00   L2 ×1.08   L3 ×1.12   L4+ ×1.15
```

---

## Railroads & Trains

Factories, Oil Factories, and Copper Mines auto-build a station and link via rail to nearby Cities, Ports, and other industrial buildings. Trains earn **bonus gold per delivery** — denser networks multiply the rate.

---

## Lobby Options

| Option | Effect |
| --- | --- |
| Mega income | ×3 gold from Oil & Copper |
| Cheap buildings | ×0.5 build cost |
| Fast construction | ×0.5 construction time |
| Disable nukes | No atom / hydro / MIRV / cruise |
| Disable naval | No warships |
| Big bombs | ×1.5 nuke radius |
| Super troops | ×2 troop growth |
| No launcher cooldown | Instant reload |
| Cheap missiles | ×0.5 missile cost |
| Fast nukes | ×2 missile speed |
| Limit launchers | Max 5 silos + launchers |
| Limit oil factories | Max 3 |
| Limit cities | Max 10 locations |
| Limit warships | Max 5 |

---

## Tactical Tips

- **Cruise missiles are economic weapons.** They only destroy Factory / Oil Factory / Copper Mine — not cities, ports, or silos.
- **Cruise volleys beat lone SAMs.** One SAM intercepts 1 missile per 5 s — fire 3 and 2 will land.
- **Anti-Ship Batteries deny ports.** Place them near your coastal cities — 3 shots destroy any warship.
- **City upgrades are always free of the cap.** You can upgrade all 10 city locations to max level without hitting the 10-slot limit.
- **Blitz snowballs fast.** With 2× gold and 2× troops, first-mover advantage wins — build income in the first 100 ticks.
- **Chaos = nuke war from tick one.** Missiles are cheap, radii doubled — silos up before your neighbors.
- **MIRVs break stalemates.** Slow reload but devastating in volleys.
- **Railroad loops compound income.** Link Factory → Oil → Copper → Port for continuous train income multipliers.

---

*Patch notes and version history are in the News tab.*
