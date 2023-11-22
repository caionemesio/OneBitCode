let nome=prompt("Qual nome você deseja verificar")
let palavraInvertida=""
//caio 4 letras, porem tem o 0 na contagem por isso tira -1
for(let i=nome.length - 1;i>=0; i--){
  palavraInvertida+=nome[i]
}
if (nome===palavraInvertida){
  alert(nome+" é um palindromo")
}else{
  alert(nome+ " não é um palindromo\n Sua versão invertida é: "+palavraInvertida)
}