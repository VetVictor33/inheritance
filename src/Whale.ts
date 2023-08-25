import Animal from "./Animal";

export default class Whale extends Animal {
  constructor(name: string, weight: number, height: number, length: number) {
    super(name, weight, height, length)
  }

  public move(): string {
    return `${this.name} is swimming`
  }
  public talk(): string {
    return `${this.name} is singing`
  }
  public eat(): string {
    return `${this.name} is eating`
  }

}