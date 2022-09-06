function funcao(this: Date, nome:string, age:number):void{
    console.log(this);
    console.log(nome, age);
    
}
// Não sabe quem é o this nesta função
// funcao('emeps', 60)

funcao.call(new Date(), 'Emeps', 60)
funcao.apply(new Date(),[ 'Emeps', 60])