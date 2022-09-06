//Array<T> ou T[] (Generics)
//Retorno tipo number
function multiplicaArgs(...args: Array<number>):number {
    return args.reduce((ac, valor) => ac * valor, 1);
}
//Retorno tipo string
function concatenaString(...args: string[]):string {
    return args.reduce((ac, valor) => ac + valor);
}
//Retorno tipo array string
function toUpperCase(...args:string[]): string[]{
  return args.map(valor=>valor.toUpperCase())
}

const result = multiplicaArgs(1,2,3)
const result2 = concatenaString('Pão', 'Pamonha', 'Bolacha')
const result3 = toUpperCase('a','b','c')

export{result, result2, result3}