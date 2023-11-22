let carro1 = prompt("Qual o nome do primeiro veículo")
let velocidade1 = prompt("Qual sua velocidade?")
let carro2 = prompt("Qual o nome do segundo veículo")
let velocidade2 = prompt("Qual sua velocidade?")

if (velocidade1 > velocidade2){
  alert("O "+carro1+" é mais rápido que o "+carro2)
}else if(velocidade2> velocidade1){
  alert("O "+carro2+" é mais rápido que o "+carro1)
}else{
  alert("Tanto o "+carro1+" quanto o "+carro2+" estão na mesma velocidade")
}