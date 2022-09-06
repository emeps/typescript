export class Pessoa {
    constructor(
        private nome: string,
        private idade: number,
        protected sexo: string

    ){}

    getNome():string{
        return this.nome;
    } 
    getIdade():number{
        return this.idade;
    }
    getSexo():string{
        return this.sexo;
    }
}

// Exemplo de Herança e Polimorfismo

export class Aluno extends Pessoa{
    getDadosCompleto():string {
        return `${this.getNome()} ${this.getIdade()} ${this.getSexo()}`
    }
}
export class Professor extends Pessoa{
    getDadosCompleto():string {
        return `${this.getNome()} ${this.getIdade()}`
    }
}

const professor = new Professor('João', 20, 'Masculino')
const aluno = new Aluno('João', 20, 'Masculino')


console.log(`Professor: ${professor.getDadosCompleto()}\nAluno:${aluno.getDadosCompleto()}`);
