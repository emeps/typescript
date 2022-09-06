// Função que nunca retorna nada 
function criarErro(): never{
  throw new Error("Erro qualquer")
}

criarErro();