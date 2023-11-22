let numero=parseFloat(prompt("Qual número q deseja obter a tabuada?"))
let resultado=""
for(i=0;i<=20;i++){
  resultado+=numero+"*"+i+"="+numero*i+"\n"
}
alert(resultado)