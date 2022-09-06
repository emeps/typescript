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
    getDadosCompleto():string {
        return `${this.getNome()} ${this.getIdade()}`
    }
}

// Acessando metodos e propriedades da classe principal

export class Aluno extends Pessoa{
    getDadosCompleto():string {
        const result = super.getDadosCompleto();
        return `${result + 'Estou utilizando o metodo da classe principal'}`
    }
}
export class Professor extends Pessoa{
    constructor(nome:string, idade:number, sexo:string, public trabalho:string){
        super(nome, idade, sexo,)
    }
    getDadosCompleto():string {
        return `${this.getNome()} ${this.getIdade()}`
    }
}

const professor = new Professor('João', 20, 'Masculino', 'Geografia')
const aluno = new Aluno('João', 20, 'Masculino')


console.log(`Professor: ${professor.getDadosCompleto()}\nAluno:${aluno.getDadosCompleto()}`);
