const objetoA:{
  //Não permite alteração na chaveA
  readonly chaveA:string;
  
  chaveB:string;
  chaveC?:string;

  //Index signature ( tanto faz unknown ou any. Scope unknown > any)
  [key:string]: unknown | any;
} = {
  chaveA:'emeps',
  chaveB:'packs7'
}

objetoA.chaveA = 'Outro valor'
objetoA.chaveC = 'Nova chave'
objetoA.chaveD = 'Nova chave'