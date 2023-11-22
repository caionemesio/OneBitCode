let nomeAtaque= prompt("Insira o nome do personagem")
let poderAtaque= prompt("Insira o poder de ataque")
let power= parseFloat(poderAtaque)
let nomeDefesa = prompt ("Insira o nome do personagem de defesa")
let vida= prompt("Qual sua quantidade de vida")
let defesa= prompt("Quanto de defesa ele possui?")
let possuiEscudo = prompt("Ele possui escudo?Sim/Não")
let numeroAtaque= parseFloat(poderAtaque)
let numeroVida=parseFloat(vida)
let numeroDefesa=parseFloat(defesa)
let dano=0
if (numeroAtaque>numeroDefesa && possuiEscudo==="Sim"){
   dano= (numeroAtaque-numeroDefesa)/2
  vida= vida-dano
  alert("O usuário "+nomeDefesa+" sofreu "+dano+" de "+nomeAtaque+" e sua vida atual é de: "+vida)
} else if(numeroAtaque>numeroDefesa && possuiEscudo==="Não"){
  dano= numeroAtaque-numeroDefesa
   vida= vida-dano
  alert("O usuário "+nomeDefesa+" sofreu "+dano+" de "+nomeAtaque+" e sua vida atual é de: "+vida)
  
}else{
  alert("O usuário "+nomeAtaque+" causou 0 de dano ao "+nomeDefesa+" e o mesmo continua com : "+vida+ " pontos de vida")
}
