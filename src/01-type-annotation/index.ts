/* eslint-disable*/

//Tipos Básicos
let nome: string = 'emeps';
let idade: number = 20;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Qualquer Um');
// let big: bigint = 10n

//Arrays
let arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let arrayNumbersMode2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 10];

let arrayStrings: Array<string> = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '10',
];
let arrayStringsMode2: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '10',
];

//Objetos
let pessoa: {
    nome: string;
    idade: number;
    adulto?: boolean;
} = { idade: 20, nome: 'emeps' };

// Funções
function soma(x: number, y: number): number {
    return x + y;
}
const result = soma(2, 2);
// Outro modo Funções
const soma2: (x: number, y: number) => number = (x, y) => x + y;
