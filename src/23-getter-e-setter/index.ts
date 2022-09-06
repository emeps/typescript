export class Pessoa {
    constructor(
        private nome: string,
        private _idade:number
    ){}
    // Metodo antigo
    getNome():string{
        return this.nome;
    } 
    setNome(valor:string):void{
        this.nome = valor;
    } 

    //Metodo pratico
    get idade():number{
        return this._idade
    }
    set idade(valor:number){
        this._idade = valor
    }
}

// Metodo antigo
const pessoa = new Pessoa('João', 20)
//Getter
pessoa.getNome()
//Setter
pessoa.setNome('Henrique')

// Metodo pratico
//Getter
pessoa.idade
//Setter
pessoa.idade = 50