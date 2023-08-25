export type Being = { name: string, weight: number, height: number, length: number }

export default abstract class Animal {
  protected name: string
  protected weight: number
  protected height: number
  protected length: number

  constructor(animal: Being) {
    this.name = animal.name
    this.weight = animal.weight
    this.height = animal.height
    this.length = animal.length
  }

  public abstract move(): string
  public abstract talk(): string
  public abstract eat(): string
}