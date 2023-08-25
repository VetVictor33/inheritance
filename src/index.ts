import { Being } from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Whale from "./Whale";


const frajola: Being = { name: 'Frajola', weight: 4, height: 15, length: 40 }
const piupiu: Being = { name: 'PiuPiu', weight: 40, height: 50, length: 100 }
const friwily: Being = { name: 'Friwily', weight: 100000, height: 1000, length: 3000 }

const cat = new Cat(frajola)
const dog = new Dog(piupiu)
const whale = new Whale(friwily)

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