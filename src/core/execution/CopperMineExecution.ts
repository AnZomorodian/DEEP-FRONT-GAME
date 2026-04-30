import { Execution, Game, Unit, UnitType } from "../game/Game";
import { TrainStationExecution } from "./TrainStationExecution";

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
  private stationCreated = false;

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
    if (!this.stationCreated) {
      this.createStation();
      this.stationCreated = true;
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

  private createStation(): void {
    const structures = this.game.nearbyUnits(
      this.copperMine.tile()!,
      this.game.config().trainStationMaxRange(),
      [
        UnitType.City,
        UnitType.Port,
        UnitType.Factory,
        UnitType.OilFactory,
        UnitType.CopperMine,
      ],
    );
    if (!this.copperMine.hasTrainStation()) {
      this.game.addExecution(new TrainStationExecution(this.copperMine));
    }
    for (const { unit } of structures) {
      if (!unit.hasTrainStation()) {
        this.game.addExecution(new TrainStationExecution(unit));
      }
    }
  }
}
