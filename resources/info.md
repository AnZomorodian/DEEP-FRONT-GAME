# Deep Front — Game Info

A quick reference for the units, buildings, and limits that shape the battlefield.

## Per-Player Build Limits

When the corresponding lobby option is enabled, every player is capped at:

- **Missile Silos + Cruise Launchers (combined):** 5
- **Oil Factories:** 3
- **Cities:** 10
- **Warships:** 5

Limits count units that are alive on the map. Upgrading an existing building does not consume from your limit.

## Cooldowns & Reload Times

| Launcher | Reload time |
| --- | --- |
| Missile Silo (atom / hydrogen / MIRV) | based on warhead type |
| Cruise Launcher | 75 ticks (~7.5s) |

Setting **No launcher cooldown** in the lobby makes both launchers reload instantly.

## Cruise Missiles

Cruise missiles are precision strikes — fast, cheap, and hard to intercept, but each missile is light:

- **Building damage:** Two cruise missile hits are required to destroy a building. The first hit damages it, the second one finishes it.
- **Soft units (ships, transports, troops):** destroyed in one hit, like other ordnance.

This means structures can survive a single cruise hit, but a coordinated double-tap will bring them down.

## Income Buildings

| Building | Base income / interval |
| --- | --- |
| City | population / gold over time |
| Oil Factory | 15,000 gold every 100 ticks (level 1) |
| Copper Mine | 7,000 gold every 100 ticks (level 1) |

**Mega income** option triples the gold output of Oil Factories and Copper Mines.

## Upgrade Multipliers

Upgrading an income building multiplies its base output:

- **Oil Factory:** lvl 2 ×1.10, lvl 3 ×1.15, lvl 4+ ×1.20 per level
- **Copper Mine:** lvl 2 ×1.08, lvl 3 ×1.12, lvl 4+ ×1.15 per level

## Railroads

Factories, Oil Factories, and Copper Mines automatically build a train station and connect to nearby Cities, Ports, and other industrial buildings via railroad. Trains carry goods between stations and generate extra income.

## Game Modes

- **Free For All** — everyone for themselves.
- **Team** — pre-assigned teams share alliance, troops, and gold.
- **Battle Royale** — fast-paced FFA variant.
- **Doomsday** — FFA variant focused on missile warfare.

## Lobby Options Cheat Sheet

| Option | Effect |
| --- | --- |
| Mega income | 3× oil & copper output |
| Cheap buildings | 50% off all build costs |
| Fast construction | 50% construction time |
| Disable nukes | No atom / hydrogen / MIRV |
| Disable naval | No warships |
| Big bombs | 1.5× nuke explosion radius |
| Super troops | 2× troop growth |
| No launcher cooldown | Instant launcher reload |
| Cheap missiles | 50% off all missiles |
| Fast nukes | 2× missile flight speed |
| Limit launchers | Max 5 silos+launchers / player |
| Limit oil factories | Max 3 / player |
| Limit cities | Max 10 / player |
| Limit warships | Max 5 / player |

---

*Numbers reflect the current build (V1.22.12). Future updates may rebalance these values.*
