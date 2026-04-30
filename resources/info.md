# Deep Front — Field Manual V1.22.12

> **Welcome, Commander.** Everything you need to plan, build, and conquer.
> Numbers below assume default lobby settings.

---

## Game Modes — pick your fight

| Mode | Vibe | Key tweaks |
| --- | --- | --- |
| 🌍 **Free For All** | Classic openfield brawl | Default values across the board |
| 🤝 **Team** | Pre-assigned alliances share gold/troops | Win at 95% map control |
| 💀 **Battle Royale** | Big armies, fast eliminations | **+50% starting troops** for everyone |
| ☢️ **Doomsday** | All-out missile warfare | **+25% starting troops · +25% nuke radius · 40% faster silo reloads** |
| ⚡ **Blitz** | Speed run — everything goes twice as fast | **+50% starting troops · 2× troop growth · 2× gold income · 50% faster construction** |
| 🔥 **Chaos** | Maximum destruction | **2× starting troops · 2× nuke radius · 50% faster reloads · 50% cheaper buildings** |

---

## Build Limits (per player)

When the matching lobby toggle is on:

| Building | Cap |
| --- | --- |
| Missile Silos + Cruise Launchers | **5 combined** |
| Oil Factories | **3** |
| Cities | **10** |
| Warships | **5** |

Upgrading an existing building never consumes a slot. Only living units count.

---

## Reload Times (in ticks · 1 tick = 0.1 s)

```
SAM Launcher    ▓▓▓▓▓▓▓▓▓▓                                                50t
Cruise Missile  ▓▓▓▓▓▓▓▓▓▓▓                                               55t
Atom Bomb       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                          80t
Hydrogen Bomb   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                               125t
MIRV Bomb       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  300t
```

> In **Doomsday**, every silo cooldown is multiplied by **0.6** (Atom 48t · Hydrogen 75t · MIRV 180t).
> Lobby option **No launcher cooldown** removes them entirely.

---

## Explosion Scales (radius in tiles)

| Weapon | Inner | Outer | Notes |
| --- | --- | --- | --- |
| Cruise Missile | **6** | **15** | Surgical strike — destroys Factory / Oil Factory / Copper Mine only |
| Atom Bomb | **14** | **35** | One-shot kill on structures |
| Hydrogen Bomb | **32** | **75** | City-leveler with fallout |
| MIRV Warhead | 14 | 35 | Multiple warheads per launch |

> **Big Bombs** lobby option × 1.5 · **Doomsday** mode × 1.25 (they stack).

---

## Building Damage Profile

| Weapon | Buildings | Soft targets (ships, transports, troops) |
| --- | --- | --- |
| Cruise Missile | Destroys **Factory / Oil Factory / Copper Mine** only — all other buildings ignored | 1 hit |
| Atom Bomb | Destroyed | Destroyed |
| Hydrogen Bomb | Destroyed | Destroyed |
| MIRV | Destroyed | Destroyed |

**Cruise tactic:** Use cruise missiles to precision-strike economic buildings (Factory, Oil Factory, Copper Mine). They deal no damage to Cities, Ports, or Silos — making them surgical economic weapons. Fire 3 cruises at once to overwhelm a single SAM (which can only intercept one missile per 5s reload).

---

## SAM Defense System

- Range: **~70 tiles** at L1, growing to **~150** at max level
- Reload: **50 ticks** (5 s) per interceptor
- Intercepts: Atom · Hydrogen · **Cruise** · MIRV warheads
- Visual cue: When you select Atom / Hydrogen / Cruise to fire, all enemy SAM rings light up red

---

## Income Buildings

| Building | Base income | Interval | Mega Income |
| --- | --- | --- | --- |
| City | population-scaled gold | continuous | — |
| Oil Factory | 15,000 g | 100t | × 3 |
| Copper Mine | 7,000 g | 100t | × 3 |

### Upgrade Multipliers

```
Oil   L1 ━━━━━━━ ×1.00   L2 ━━━━━━━━ ×1.10   L3 ━━━━━━━━━ ×1.15   L4+ ━━━━━━━━━━ ×1.20
Cu    L1 ━━━━━━━ ×1.00   L2 ━━━━━━━━ ×1.08   L3 ━━━━━━━━━ ×1.12   L4+ ━━━━━━━━━━ ×1.15
```

---

## Railroads & Trains

Factories, Oil Factories, and Copper Mines automatically build a station and connect via rail to nearby:

- **Cities** (passenger traffic)
- **Ports** (export to ships)
- **Other industrial buildings** (cross-shipment)

Trains move continuously between stations and **earn bonus gold per delivery**. The denser the network, the higher the multiplier.

> **Strategy:** A factory-oil-copper triangle next to a port can run trains in a loop forever.

---

## Build Order Reference

```
Tick   0 ──── Spawn / land grab
Tick  50 ──── First City
Tick 100 ──── First income tick
Tick 150 ──── First Factory + auto-railroad
Tick 200 ──── First Oil Factory (joins rail network)
Tick 250 ──── First Missile Silo
Tick 300 ──── First Atom Bomb ready
Tick 350 ──── First SAM around your city cluster
Tick 500 ──── First Hydrogen Bomb option
Tick 800 ──── MIRV doctrine (heavy gold investment)
```

---

## Lobby Options Cheat Sheet

| Option | Effect |
| --- | --- |
| Mega income | × 3 gold from Oil & Copper |
| Cheap buildings | × 0.5 build cost |
| Fast construction | × 0.5 construction time |
| Disable nukes | No atom / hydro / MIRV / cruise |
| Disable naval | No warships |
| Big bombs | × 1.5 nuke radius |
| Super troops | × 2 troop growth |
| No launcher cooldown | Instant launcher reload |
| Cheap missiles | × 0.5 missile cost |
| Fast nukes | × 2 missile flight speed |
| Limit launchers | Max 5 silos+launchers / player |
| Limit oil factories | Max 3 / player |
| Limit cities | Max 10 / player |
| Limit warships | Max 5 / player |

---

## Tactical Tips

- **Cruise missiles are economic weapons.** They only destroy Factory / Oil Factory / Copper Mine. Use them to cripple enemy economies, not to clear cities.
- **Cruise volleys beat lone SAMs.** A single SAM intercepts 1 missile per 5s reload — fire 3 cruises and 2 will hit.
- **Build SAM clusters around your industrial buildings.** Two overlapping SAMs over a key mine or factory defeat most cruise volleys.
- **Blitz mode snowballs early.** With 2× gold and 2× troops, whoever expands fastest wins — build income buildings in the first 100 ticks.
- **Chaos mode = nuke war from turn one.** Missiles are cheap and radii are doubled — get your silos up before your neighbors do.
- **Doomsday rewards pre-built silos.** Stockpile launchers in your safe zone before the missile war erupts.
- **MIRVs break stalemates.** Slow reload (180t in Doomsday, 300t default), but devastating in volleys.
- **Industrial railroads compound.** Linking 4+ industrial buildings to a port can quadruple your train income.
- **Use = / - to adjust your attack ratio.** These keys now control how many troops you commit to each attack instead of zooming.

---

*Patch notes & version history are in the News tab.*
