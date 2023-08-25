import Archer from "./Archers";
import Mage from "./Mage";

const legolas = new Archer({ name: 'Legolas' })
const gandalf = new Mage({ name: 'Gandalf' })


for (let i = 0; i <= 6; i++) {
  console.log(legolas.useArrow())
  console.log(gandalf.useMagic())
}

legolas.makeArrow()
gandalf.makeMagic()

console.log(legolas.useArrow())
console.log(gandalf.useMagic())
console.log(legolas.useArrow())
console.log(gandalf.useMagic())
