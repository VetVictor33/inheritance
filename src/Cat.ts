import Animal from "./Animal";

export default class Cat extends Animal {
  constructor(name: string, weight: number, height: number, length: number) {
    super(name, weight, height, length)
  }

  public move(): string {
    return `${this.name} is moving`
  }
  public talk(): string {
    return `${this.name} is meowing`
  }
  public eat(): string {
    return `${this.name} is eating`
  }

}