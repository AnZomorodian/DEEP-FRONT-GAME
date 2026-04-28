import { Execution, Game, Unit } from "../game/Game";

const COPPER_INCOME_BASE = 7_000n;
const COPPER_INCOME_INTERVAL = 100;

function copperLevelMultiplier(level: number): number {
  let m = 1;
  for (let l = 2; l <= level; l++) {
    if (l === 2) m *= 1.08;
    else if (l === 3) m *= 1.12;
    else m *= 1.15;
  }
  return m;
}

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
      const multiplier = copperLevelMultiplier(level);
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
