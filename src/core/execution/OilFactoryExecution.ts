import { Execution, Game, Unit } from "../game/Game";

const OIL_INCOME_BASE = 15_000n;
const OIL_INCOME_INTERVAL = 100;
const OIL_LEVEL_BONUS_PERCENT = 7;

export class OilFactoryExecution implements Execution {
  private active: boolean = true;
  private game: Game;

  constructor(private oilFactory: Unit) {}

  init(mg: Game, _ticks: number): void {
    this.game = mg;
  }

  tick(ticks: number): void {
    if (!this.oilFactory.isActive()) {
      this.active = false;
      return;
    }
    if (this.oilFactory.isUnderConstruction()) {
      return;
    }
    if (ticks % OIL_INCOME_INTERVAL === 0) {
      const level = this.oilFactory.level();
      const multiplier = Math.pow(1 + OIL_LEVEL_BONUS_PERCENT / 100, level - 1);
      const megaMul = this.game.config().megaIncome() ? 3 : 1;
      const amount = BigInt(
        Math.floor(Number(OIL_INCOME_BASE) * multiplier * megaMul),
      );
      this.oilFactory.owner().addGold(amount, this.oilFactory.tile());
    }
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
