type TipoPessoa ={
    nome:string;
    sobrenome:string
 
}

type TipoNomeCompleto = {
    nomeCompleto():string
}
export class Pessoa implements TipoPessoa, TipoNomeCompleto{
    constructor(public nome:string,  public sobrenome:string){}
    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}

const pessoa = new Pessoa('Emeps', 'Adapti')

console.log(pessoa.nomeCompleto())