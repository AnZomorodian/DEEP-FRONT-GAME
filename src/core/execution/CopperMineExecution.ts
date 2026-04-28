import { Execution, Game, Unit } from "../game/Game";

const COPPER_INCOME_BASE = 5_000n;
const COPPER_INCOME_INTERVAL = 150;
const COPPER_LEVEL_BONUS_PERCENT = 4;

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
      const level = this.copperMine.level();
      const multiplier = Math.pow(
        1 + COPPER_LEVEL_BONUS_PERCENT / 100,
        level - 1,
      );
      const megaMul = this.game.config().megaIncome() ? 3 : 1;
      const amount = BigInt(
        Math.floor(Number(COPPER_INCOME_BASE) * multiplier * megaMul),
      );
      this.copperMine.owner().addGold(amount, this.copperMine.tile());
    }
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
