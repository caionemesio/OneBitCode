let fila=[]
let opcao =""
do{
 let pacientes=""
 for (let i=0; i<fila.length;i++){
  pacientes+= (i+1)+"º-"+fila[i]+"\n"
 }
opcao=prompt("Pacientes:\n"+pacientes+"\n Escolha uma opção: \n1-Salvar um imóvel\n2-Mostrar todos os imóveis\n3-Sair")

switch(opcao){
  case "1":
  let novoPaciente=prompt("Qual nome do paciente?")
  fila.push(novoPaciente)
  break

  case "2":
  var removeItem=fila.shift()
  if(removeItem){
    alert("O paciente "+ removeItem+ " foi atendido")
  }else{
    alert("Não há pacientes na fila")
  }
  
  break

  case "3":alert("Encerrando o programa")
  break

  default:
  alert("Opção invalida")
  break

}
} while (opcao !== "3")