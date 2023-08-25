import Animal, { Being } from "./Animal";

export default class Whale extends Animal {
  constructor(whale: Being) {
    super(whale)
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