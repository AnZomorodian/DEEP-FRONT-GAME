import { Execution, Game, Unit } from "../game/Game";

const OIL_INCOME_PER_TICK = 200n;
const OIL_INCOME_INTERVAL = 10;

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
      const level = BigInt(this.oilFactory.level());
      this.oilFactory.owner().addGold(OIL_INCOME_PER_TICK * level);
    }
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }
}
