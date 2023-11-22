let pokemon="Charmander"
function evoluir(){
  pokemon="Charmeleon"
}
// console.log(pokemon)
evoluir()
// console.log(pokemon)

function criarAnimal(){
  let animal= "gato"
}
criarAnimal()
// console.log(animal)


//DIFERENÇA ENTRE VAR E LET
function avaliarNota(nota){
  if (nota>60){
    var aprovado=true
    let situacao="Aprovado"
  }else{
    var aprovado=false
    let situacao="Reprovado"
  }
  console.log(nota)
  console.log(aprovado)
  console.log(situacao)
}
// avaliarNota(83)
// avaliarNota(23)
function ola(){
  var texto="OLÁ MUNDO"
}
console.log(texto)



console.log(nome)
console.log(sobrenome)
var nome="Caio"// ele joga a variavel mesmo sem valor para começo do codigo
let sobrenome= "Nemesio"// só cria a variavel na linha do codigo
console.log(nome)
console.log(sobrenome)
