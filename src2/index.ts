import Professor from "./Professor";
import Student from "./Student";

const girafales = new Professor(
  { name: 'Professor Girafales', email: 'girafa@prof.com', password: 'senhasegura', phone: '40228922' }
)
const chaves = new Student(
  { name: 'Chaves', email: 'chavinho@aluno.com', password: 'senhasegura', phone: '40228922' }
)

girafales.addGradeOf(chaves, 3)
girafales.addGradeOf(chaves, 2)
girafales.addGradeOf(chaves, 5)
girafales.addGradeOf(chaves, 1)

console.log(`Gira: ${girafales.authenticate('senhasegura')}
Chave: ${chaves.authenticate('senhainsegura')}`)

console.log(chaves.getAverageGrades())