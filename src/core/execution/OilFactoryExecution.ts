import { Execution, Game, Unit } from "../game/Game";

const OIL_INCOME_BASE = 15_000n;
const OIL_INCOME_INTERVAL = 100;

function oilLevelMultiplier(level: number): number {
  let m = 1;
  for (let l = 2; l <= level; l++) {
    if (l === 2) m *= 1.10;
    else if (l === 3) m *= 1.15;
    else m *= 1.20;
  }
  return m;
}

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
      const multiplier = oilLevelMultiplier(level);
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
