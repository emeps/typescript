export class Empresa {
    public readonly nome: string;
    private readonly colaboradores : Colaborador[] = [];
    protected readonly cnpj: string;
    constructor(nome: string, cnpj:string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    public adicionarColaborador (colaboradores: Colaborador):void{
        this.colaboradores.push(colaboradores);
    }
    public mostrarColaboradores():void{
        for(const colaborador of this.colaboradores){
            console.log(colaborador);
            
        }
    }
}
// Versão resumida
export class Colaborador{
    constructor(
        public readonly nome:string,
        public readonly sobrenome:string
    ){}
}