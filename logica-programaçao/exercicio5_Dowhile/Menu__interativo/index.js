
do{
let escolha=prompt("Escolha uma opção\n 1-Primeira\n2-Segunda\n3-Terceira\n4-Quarta\n5-Sair")
opcoes=parseFloat(escolha)
switch(opcoes){
  case 1: 
  alert("Você escolheu a primeira opção")
  break

  case 2: 
  alert("Você escolheu a segunda opção")
  break

  case 3: 
  alert("Você escolheu a terceira opção")
  break

  case 4: 
  alert("Você escolheu a quarta opção")
  break
  
  default: 
  alert("Opção invalida")
}
}
while(opcoes!=5)
