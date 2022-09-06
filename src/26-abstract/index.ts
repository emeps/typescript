export abstract class Personagem{
    protected abstract emoji:string
    constructor(
        private nome:string,
        private vida:number,
        private forca:number
    ){}
    atacar(personagem:Personagem):void{
        this.bordao();
        personagem.perderVida(this.forca);
    }
    perderVida(forca:number):void{
        this.vida -= forca
        console.log(`${this.nome} agora tem ${this.vida} de vida`);
    }
    // Não precisa ter corpo no metodo
    abstract bordao():void;
}
export class Guerreira extends Personagem{
    protected emoji =  'bolo'
    bordao(): void {
        console.log('Guerreira atacando!');
        
    }
}

export class Monstro extends Personagem{
    protected emoji = 'monstro'
    bordao(): void {
        console.log('Monstro atacando');
        
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Monsotr', 300, 1200)


guerreira.atacar(monstro)
monstro.atacar(guerreira)

// Abstract permite criar um 'contrato' e a classe não pode ser instanciada diretamente