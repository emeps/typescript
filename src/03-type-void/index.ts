// Quando uma função ou metodo não retorna nada
function noReturn(...args: string[]): void {
    console.log(args.join(''));
}

noReturn('Emeps', 'Adapti');

 const pessoa = {
  nome:'Emeps',
  ej: 'Adapti',

  displayName():void{
    console.log(`${this.nome}`);
  }
}

pessoa.displayName()

export{pessoa}