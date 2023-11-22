let nome= prompt("Qual o nome do turista")
let qtd=0; 
let resposta="Sim"
let cidades= ""
resposta=prompt("Já visitou alguma cidade?Sim/Não")
while(resposta==="Sim"){
  if (resposta!=="Sim"){
    break
  }
  qtd++
  let cidade=prompt("Qual nome da cidade?") 
  cidades+=" - "+cidade+"\n"
  resposta=prompt("Já visitou alguma outra cidade?Sim/Não")
}

alert("Turista:"+nome+
      "\nNúmero de cidade visitadas:"+qtd+
      "\nCidades visitadas:\n"+cidades
)