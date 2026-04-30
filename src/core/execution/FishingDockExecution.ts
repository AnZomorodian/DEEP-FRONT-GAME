import { Execution, Game, Unit, UnitType } from "../game/Game";
import { TrainStationExecution } from "./TrainStationExecution";

const FISHING_INCOME_INTERVAL = 100;

function fishingIncomeForLevel(level: number): number {
  switch (level) {
    case 1:
      return 4_000;
    case 2:
      return 6_000;
    case 3:
      return 7_500;
    case 4:
      return 9_000;
    default:
      return 10_000;
  }
}

export class FishingDockExecution implements Execution {
  private active: boolean = true;
  private game: Game;
  private stationCreated = false;

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
    if (!this.stationCreated) {
      this.createStation();
      this.stationCreated = true;
    }
    if (ticks % FISHING_INCOME_INTERVAL === 0) {
      const level = this.fishingDock.level();
      const base = fishingIncomeForLevel(level);
      const megaMul = this.game.config().megaIncome() ? 3 : 1;
      const amount = BigInt(Math.floor(base * megaMul));
      this.fishingDock.owner().addGold(amount, this.fishingDock.tile());
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
      this.fishingDock.tile()!,
      this.game.config().trainStationMaxRange(),
      [
        UnitType.City,
        UnitType.Port,
        UnitType.Factory,
        UnitType.OilFactory,
        UnitType.CopperMine,
        UnitType.FishingDock,
      ],
    );
    if (!this.fishingDock.hasTrainStation()) {
      this.game.addExecution(new TrainStationExecution(this.fishingDock));
    }
    for (const { unit } of structures) {
      if (!unit.hasTrainStation()) {
        this.game.addExecution(new TrainStationExecution(unit));
      }
    }
  }
}
