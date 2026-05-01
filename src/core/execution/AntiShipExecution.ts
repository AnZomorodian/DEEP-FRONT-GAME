import { Execution, Game, Unit, UnitType } from "../game/Game";
import { ShellExecution } from "./ShellExecution";

export class AntiShipExecution implements Execution {
  private mg: Game;
  private active: boolean = true;
  private target: Unit | null = null;
  private lastFired = 0;

  constructor(private battery: Unit) {}

  init(mg: Game, _ticks: number): void {
    this.mg = mg;
  }

  tick(_ticks: number): void {
    if (!this.battery.isActive()) {
      this.active = false;
      return;
    }

    if (this.battery.isUnderConstruction()) {
      return;
    }

    if (this.target !== null && !this.target.isActive()) {
      this.target = null;
    }

    if (this.target === null) {
      const range = this.mg.config().antiShipRange();
      const candidates = this.mg
        .nearbyUnits(this.battery.tile(), range, [UnitType.Warship])
        .filter(
          ({ unit }) =>
            unit.owner() !== this.battery.owner() &&
            !unit.owner().isFriendly(this.battery.owner()),
        );

      if (candidates.length > 0) {
        candidates.sort((a, b) => a.distSquared - b.distSquared);
        this.target = candidates[0].unit;
      }
    }

    if (this.target !== null) {
      const level = this.battery.level();
      const cooldown = this.mg.config().antiShipCooldown(level);
      if (this.mg.ticks() - this.lastFired >= cooldown) {
        this.lastFired = this.mg.ticks();
        // 334 damage per shot → exactly 3 hits destroy a 1000-HP warship
        this.mg.addExecution(
          new ShellExecution(
            this.battery.tile(),
            this.battery.owner(),
            this.battery,
            this.target,
            334,
          ),
        );
        this.target = null;
      }
    }
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
