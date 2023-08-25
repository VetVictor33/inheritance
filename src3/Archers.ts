import Soldier, { Character } from "./Soldier";

export default class Archer extends Soldier {
  private availableArrows: number
  constructor(archer: Character) {
    super(archer)
    this.availableArrows = 5
  }

  public useArrow() {
    if (!this.availableArrows) return `${this.name} is out of arrows!`
    this.availableArrows--
    return `Ziiiilp`
  }

  public makeArrow() {
    this.availableArrows++
  }
}