let pilha=[]
let opcoes=""
do{
opcoes=prompt("O baralho possui "+pilha.length+" carta(s)\nEscolha\n1-Adicionar uma carta\n2-Puxar uma carta\n3-Sair")
switch(opcoes){
  case "1":
  let adicionarCarta=prompt("Qual carta deseja adicionar? ")
  pilha.unshift(adicionarCarta)
  break
  case "2":
  let removerCarta=pilha.shift()
  if (removerCarta){
  alert("A carta puxada foi: "+removerCarta)
  }else{
    alert("Não há cartas no baralho")
  }
  break
  case "3":
   alert("Encerrando o programa")
  break
}
}while(opcoes!=="3")