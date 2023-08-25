import Soldier, { Character } from "./Soldier"

export default class Mage extends Soldier {
  private availableMagic: number
  constructor(mage: Character) {
    super(mage)
    this.availableMagic = 5
  }

  public useMagic() {
    if (!this.availableMagic) return `${this.name} is out of magic!`
    this.availableMagic--
    return `BOOOOOOOOOOOOOOOOOM`
  }

  public makeMagic() {
    this.availableMagic++
  }
}