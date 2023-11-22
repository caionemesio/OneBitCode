
//Usando como parametro o operador spread o javascript dispobiliza todos os métodos
//de um array

//O parametro rest deve ser utilizado no ultimo em uma lista de parametros
function sum(param,...numbers){
  return numbers.reduce((accum,num)=>accum+num,0)
}

console.log(sum(1,1))

console.log(sum(1,1,6,7,2,4,1,6,3,7,4,7,122,4))