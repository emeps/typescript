type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};

type CorRGB = 'RED' | 'GREEN' | 'BLUE';
type CorCMYK = 'CIANO' | 'MAGENTA' | 'PRETO';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
    idade: 30,
    nome: 'emeps',
    salario: 300000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'RED'));

export { pessoa };
