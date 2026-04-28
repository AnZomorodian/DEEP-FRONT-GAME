import { Execution, Game, Unit } from "../game/Game";

const CRUISE_RELOAD_TICKS = 50;

export class CruiseLauncherExecution implements Execution {
  private active = true;
  private mg: Game;

  constructor(private launcher: Unit) {}

  init(mg: Game, _ticks: number): void {
    this.mg = mg;
  }

  tick(_ticks: number): void {
    if (!this.launcher.isActive()) {
      this.active = false;
      return;
    }
    if (this.launcher.isUnderConstruction()) {
      return;
    }
    const frontTime = this.launcher.missileTimerQueue()[0];
    if (frontTime === undefined) {
      return;
    }
    const cooldown =
      CRUISE_RELOAD_TICKS - (this.mg.ticks() - frontTime);
    if (cooldown <= 0) {
      this.launcher.reloadMissile();
    }
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
