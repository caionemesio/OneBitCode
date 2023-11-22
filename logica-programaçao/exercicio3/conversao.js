let metrosDigitado= prompt("Quantos metros você deseja converter?")
let opcoes=prompt("Para qual unidade deseja converter? \n 1-mm\n 2-cm \n 3-dm\n 4-dam\n 5-hm \n 6-km")
let metros= parseFloat(metrosDigitado)
let resultado = parseFloat(opcoes)
switch (resultado){
  case 1 :  
    alert("A conversão de"+metros+"metros em milimetros é igual a: "+metros*1000+" milimetros")
    break
 case 2 :  
    alert("A conversão de"+metros+"metros em centimetros é igual a: "+metros*100+" centimetros")
    break 
  case 3 :  
    alert("A conversão de"+metros+"metros em decimetros é igual a: "+metros*10+" decimetros")
    break
  case 4 :  
    alert("A conversão de"+metros+"metros em decâmetros é igual a: "+metros/10+" decâmetros")
    break
  case 5 :  
    alert("A conversão de"+metros+"metros em hectometros é igual a: "+metros/100+" hectometros")
    break
  case 6 :  
    alert("A conversão de"+metros+"metros em kilometros é igual a: "+metros/1000+" kilometros")
    break
  default:{
    alert("Valor indisponível")
  }
  }