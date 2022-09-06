const dadosClientes:[number, string] = [1, 'emeps']
const dadosClientes2:[number, string, string] = [1, 'emeps', 'emepacks']
const dadosClientes3:[number, string, string?] = [1, 'emeps']
const dadosClientes4:[number, string,...string[]] = [1, 'emeps', 'emepacks']
//Imutavel
const dadosClientes5: readonly [number, string] = [1, 'emeps']

dadosClientes[0] = 10
dadosClientes[1] = 'Emepacks'

// Apresenta erro
// dadosClientes5[0] = 5
// dadosClientes5[1] = 'emepacks'

console.log(dadosClientes);
console.log(dadosClientes2);
console.log(dadosClientes3);
console.log(dadosClientes4);
console.log(dadosClientes5);

//Readonly 
const array: readonly string [] = ['emepacks', 'emeps']
const array2: ReadonlyArray<string> = ['emepacks', 'emeps']