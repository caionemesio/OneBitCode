function somar(a,b){
  return a+b
}
let operacao=somar
console.log(operacao(4,5))

operacao = function (a,b){
  return a-b
}
console.log(operacao(4,5))



olaMundo()



function olaMundo(){
  console.log("olá, mundo")
} //Quando criada a função ela é jogada para o começo do código e pode ser chamada independente do lugar

const oiMundo = function(){
  console.log("Oi, mundo")
}

oiMundo() // Já a função anonima só é criada na linha do código, portanto só pode ser chamada após a sua criação 