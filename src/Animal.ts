export default abstract class Animal {
  protected name: string
  protected weight: number
  protected height: number
  protected length: number

  constructor(name: string, weight: number, height: number, length: number) {
    this.name = name
    this.weight = weight
    this.height = height
    this.length = length
  }

  public abstract move(): string
  public abstract talk(): string
  public abstract eat(): string
}