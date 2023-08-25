import Animal, { Being } from "./Animal";

export default class Dog extends Animal {
  constructor(dog: Being) {
    super(dog)
  }

  public move(): string {
    return `${this.name} is moving`
  }
  public talk(): string {
    return `${this.name} is barking`
  }
  public eat(): string {
    return `${this.name} is eating`
  }

}