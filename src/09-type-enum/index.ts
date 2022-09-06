enum Cores {
  VERMELHO,
  AZUL, 
  AMARELO
}

console.log(Cores);
console.log(Cores.VERMELHO); // 0
console.log(Cores[0]); // VERMELHO

function escolhaCor(cor:Cores):void{
  console.log(Cores[cor]);
}

escolhaCor(Cores.AMARELO)