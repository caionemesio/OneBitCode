function calcularMedia(a,b){
  const media =(a+b)/2
  return media
}
const resultado= calcularMedia(7,2)
console.log(resultado)
function criarProduto(nome, preco){
  const produto={
    nome,//nome:nome
    preco,//preco:preco
    estoque:1
  }
  return produto
}
// console.log(criarProduto("Notebook gamer", "R$2250,00"))

function areaRetangular(base,altura){
  return base*altura

}
function areaQuadrada(lado){
  return areaRetangular(lado, lado)
}
// console.log(areaRetangular(3,5))
// console.log(areaQuadrada(9))

function ola(){
  let texto="..."
  texto="Olá mundo"
  return texto// NÃO PODE TER CODIGO NENHUM APÓS O RETURN
  console.log(texto)
}
console.log(ola())

function maiorIdade(idade){
  if (idade>=18){
    return "Maior de idade"//pode ter mais de um return nos ifs pois possue varias ramificaçoes
  }else{
    return "Menor de idade"
  }
}
console.log(maiorIdade(29))
console.log(maiorIdade(13))