# Deep Front — Field Manual

A comprehensive reference for everything that shapes the battlefield. Numbers reflect build **V1.22.12**.

---

## Build Limits (per player)

When the corresponding lobby option is enabled, every player is capped at:

| Building | Cap | Notes |
| --- | --- | --- |
| Missile Silos + Cruise Launchers | **5** combined | Mix freely between launcher types |
| Oil Factories | **3** | Heavy gold output |
| Cities | **10** | Population & gold |
| Warships | **5** | Naval combat |

Limits count alive units only. Upgrading an existing building never consumes from your cap.

---

## Reload Times

```
SAM Launcher       ▓▓▓▓▓▓▓▓▓▓                                        50t  (5.0s)
Cruise Missile     ▓▓▓▓▓▓▓▓▓▓▓                                       55t  (5.5s)
Atom Bomb          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                                  80t  (8.0s)
Hydrogen Bomb      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                        125t (12.5s)
MIRV Bomb          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  300t (30.0s)
```

Setting **No launcher cooldown** in the lobby makes every launcher reload instantly.

---

## Explosion Scales

Outer radius is the kill zone — anything inside dies (warships, cities, factories, troops). Inner radius is total annihilation including terrain scarring and fallout.

| Weapon | Inner | Outer | Notes |
| --- | --- | --- | --- |
| Cruise Missile | 14 | **35** | Two hits required to destroy a structure |
| Atom Bomb | 28 | **70** | Destroys structures in one hit |
| Hydrogen Bomb | 64 | **160** | City-leveler, leaves fallout |
| MIRV Warhead | 28 | 70 | Splits into many warheads |

Lobby option **Big Bombs** multiplies all radii by **1.5×**.

---

## Building Damage Profile

| Weapon | Buildings | Soft Targets (ships, transports, troops) |
| --- | --- | --- |
| Cruise Missile | 2 hits required | 1 hit |
| Atom Bomb | Destroyed | Destroyed |
| Hydrogen Bomb | Destroyed | Destroyed |
| MIRV Bomb | Destroyed | Destroyed |

Cruise missiles are precision strikes — fast and cheap, but light. A coordinated double-tap brings a structure down.

---

## SAM Defense System

SAM Launchers automatically intercept incoming missiles within their range.

- **SAM range:** ~70 tiles at level 1, growing to ~150 at max level (rational growth)
- **Reload:** 50 ticks (5 seconds) per missile
- **Targets:** Atom Bombs, Hydrogen Bombs, **Cruise Missiles**, and MIRV Warheads near the SAM
- **Animation:** SAM fires a small interceptor that follows the incoming missile's trajectory and detonates it in mid-flight
- **Visual:** When you select Atom, Hydrogen, or Cruise Missile to fire, all enemy SAM coverage rings light up red so you can plan around them

> **Tip:** Launching multiple cruise missiles at the same target overwhelms a single SAM — the SAM can only intercept one missile per reload cycle.

---

## Income Buildings

| Building | Base income | Interval | Multiplied by Mega Income |
| --- | --- | --- | --- |
| City | population-scaled gold | continuous | — |
| Oil Factory | 15,000 gold | 100 ticks | **3×** |
| Copper Mine | 7,000 gold | 100 ticks | **3×** |

### Upgrade Multipliers

```
Oil Factory     L1 ━━━━━━━ ×1.00
                L2 ━━━━━━━━ ×1.10
                L3 ━━━━━━━━━ ×1.15
                L4+ ━━━━━━━━━━ ×1.20

Copper Mine     L1 ━━━━━━━ ×1.00
                L2 ━━━━━━━━ ×1.08
                L3 ━━━━━━━━━ ×1.12
                L4+ ━━━━━━━━━━ ×1.15
```

---

## Railroad Network

Factories, **Oil Factories**, and **Copper Mines** automatically build a train station and connect via railroad to nearby:

- **Cities** (passenger / population traffic)
- **Ports** (export to ships)
- **Other industrial buildings** (cross-shipment of resources)

Trains carry goods between stations and generate **bonus gold** every time they complete a trip. The longer the rail network, the more your industrial complex earns.

> **Strategy:** Cluster industrial buildings near a Port for maximum throughput. A factory + oil + copper triangle near a port can generate trains that loop endlessly between all four nodes.

---

## Build Order Timeline

A reference progression for the early-game player:

```
Tick   0 ────────── Spawn / start expanding
Tick  50 ────────── First City placed
Tick 100 ────────── First income tick from City
Tick 150 ────────── First Factory + auto-railroad
Tick 200 ────────── First Oil Factory (joins rail network)
Tick 250 ────────── First Missile Silo built (begins reload countdown)
Tick 300 ────────── First Atom Bomb ready to fire
Tick 350 ────────── First SAM Launcher in friendly cities
Tick 500 ────────── First Hydrogen Bomb capability
Tick 800 ────────── MIRV doctrine (large gold investment required)
```

Numbers are approximate; map size and starting gold dramatically change the curve.

---

## Game Modes

| Mode | Description |
| --- | --- |
| **Free For All** | Classic — every player for themselves. |
| **Team** | Pre-assigned teams share alliance, troops, and gold. |
| **Battle Royale** | Fast-paced FFA variant with aggressive AI. |
| **Doomsday** | FFA variant focused on missile warfare and total destruction. |

---

## Lobby Options Cheat Sheet

| Option | Effect |
| --- | --- |
| Mega income | 3× gold from Oil Factories & Copper Mines |
| Cheap buildings | 50% off all build costs |
| Fast construction | 50% construction time |
| Disable nukes | No atom / hydrogen / MIRV / cruise |
| Disable naval | No warships |
| Big bombs | 1.5× nuke explosion radius |
| Super troops | 2× troop growth |
| No launcher cooldown | Instant launcher reload (all silos) |
| Cheap missiles | 50% off all missiles |
| Fast nukes | 2× missile flight speed |
| Limit launchers | Max 5 silos+launchers / player |
| Limit oil factories | Max 3 / player |
| Limit cities | Max 10 / player |
| Limit warships | Max 5 / player |

---

## Tactical Tips

- **Cruise volleys beat lone SAMs.** SAMs can only intercept one missile per reload (5s). Send 3 cruise missiles at once and at least 2 will hit.
- **Build SAM clusters around cities.** Two overlapping SAMs at a city will defeat most cruise volleys.
- **Industrial railroads compound.** Linking 4+ industrial buildings to a port can quadruple your train income vs. running each one in isolation.
- **MIRVs are punishing but slow.** A 30s reload means committing to one MIRV per silo per half-minute. Use them to break stalemates, not as primary offense.
- **Doomsday mode rewards pre-built silos.** Stockpile launchers in your safe zone before the missile war erupts.

---

*Patch notes & version history are in the News tab.*
