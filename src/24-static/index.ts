export class Pessoa {
    constructor(
        private nome: string,
        private _idade:number
    ){}
    static falaOI():void{
        console.log('oi');
        
    }
    static criaPessoa (nome:string, idade: number): Pessoa{
        return new Pessoa(nome, idade);
    }
}

// Static permite criar atributos e metodos que sejam visto fora da classe sem precisar instanciar

Pessoa.falaOI();
Pessoa.criaPessoa('João', 600)