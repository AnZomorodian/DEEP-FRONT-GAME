import { Execution, Game, Unit } from "../game/Game";

const COPPER_INCOME_PER_TICK = 120n;
const COPPER_INCOME_INTERVAL = 10;

export class CopperMineExecution implements Execution {
  private active: boolean = true;
  private game: Game;

  constructor(private copperMine: Unit) {}

  init(mg: Game, _ticks: number): void {
    this.game = mg;
  }

  tick(ticks: number): void {
    if (!this.copperMine.isActive()) {
      this.active = false;
      return;
    }
    if (this.copperMine.isUnderConstruction()) {
      return;
    }
    if (ticks % COPPER_INCOME_INTERVAL === 0) {
      const level = BigInt(this.copperMine.level());
      this.copperMine.owner().addGold(COPPER_INCOME_PER_TICK * level);
    }
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
