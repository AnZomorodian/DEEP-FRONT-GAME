import { Execution, Game, Unit } from "../game/Game";

const FISHING_INCOME_BASE = 4_000n;
const FISHING_INCOME_INTERVAL = 100;

export class FishingDockExecution implements Execution {
  private active: boolean = true;
  private game: Game;

  constructor(private fishingDock: Unit) {}

  init(mg: Game, _ticks: number): void {
    this.game = mg;
  }

  tick(ticks: number): void {
    if (!this.fishingDock.isActive()) {
      this.active = false;
      return;
    }
    if (this.fishingDock.isUnderConstruction()) {
      return;
    }
    if (ticks % FISHING_INCOME_INTERVAL === 0) {
      const megaMul = this.game.config().megaIncome() ? 3 : 1;
      const amount = BigInt(Math.floor(Number(FISHING_INCOME_BASE) * megaMul));
      this.fishingDock.owner().addGold(amount, this.fishingDock.tile());
    }
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
