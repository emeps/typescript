// &  interseção entre dois conjuntos//
type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade = {idade: number}
// Combinação entre os tres tipos OU
type Pessoa = TemNome | TemIdade |TemSobrenome
// Combinação entre os tres tipos E
type Pessoa2 = TemNome & TemIdade & TemSobrenome

type AB = 'A'|'B'
type AC = 'A'|'C'
type AD = 'B'|'D'
type intersecao = AB & AD