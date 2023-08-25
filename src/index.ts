import Cat from "./Cat";
import Dog from "./Dog";
import Whale from "./Whale";

const cat = new Cat('Frajola', 4, 15, 40)
const dog = new Dog('PiuPiu', 40, 50, 100)
const whale = new Whale('Friwily', 100000, 1000, 3000)

console.log(cat.talk())
console.log(cat.move())
console.log(cat.eat())
console.log('----------------------------')
console.log(dog.talk())
console.log(dog.move())
console.log(dog.eat())
console.log('----------------------------')
console.log(whale.talk())
console.log(whale.move())
console.log(whale.eat())