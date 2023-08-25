import Animal, { Being } from "./Animal";

export default class Cat extends Animal {
  constructor(cat: Being) {
    super(cat)
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