export type Character = { name: string }

export default abstract class Soldier {
  protected name: string
  protected speed: number
  constructor(soldier: Character) {
    this.name = soldier.name
    this.speed = 0
  }

  public walk() {
    this.speed++
  }

  public stop() {
    this.speed = 0
  }
}