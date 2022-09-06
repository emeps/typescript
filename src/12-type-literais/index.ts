let x = 10;
x = 10203

const y = 100
let a = 100 as const


const person = {
  name:'emeps' as const, 
  sobrenome: 'emepacks'
}
//Da erro
person.name = 'emepacks'

function escolhaCor2(cor: 'Vermelho'|'Azul'|'Amarelo'): string{
  return cor
}

console.log(escolhaCor2('Vermelho'));
