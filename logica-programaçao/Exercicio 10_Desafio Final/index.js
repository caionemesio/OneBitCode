let opcao=""
let vagas=[]
let candidatos=[]

function CriarVaga(){
  const nome= prompt("Qual o nome da vaga a ser criada?")
  const descricao=prompt("Qual descrição da vaga?")
  const data=prompt("Qual a data limite?")
  const confirmacao=prompt("Você confirma estas informações?(Sim/Nao)\nNome: "+nome+"\nDescrição: "+descricao+"\nData Limite: "+data)
  
  if (confirmacao==="Sim"){
  let vaga={
    nome,
    descricao,
    data
  }
  return vagas.push(vaga)
  }else if(confirmacao==="Nao"){
    alert("Tente novamente")
    CriarVaga()
  }else{
    alert("Resposta inválida, voltando ao menu")
  }
}

function CriarCandidato(){
  let nomeCandidato=prompt("Qual nome do candidato?")
  let IndiceVaga=parseFloat(prompt("Qual o índice da vaga?"))
  if (IndiceVaga<vagas.length){       
            const confirmacao=prompt("Você confirma estas informações?(Sim/Nao)\nNome: "+vagas[IndiceVaga].nome+"\nDescrição: "+vagas[IndiceVaga].descricao+"\nData Limite: "+vagas[IndiceVaga].data)
        
        if (confirmacao==="Sim"){
        let candidato={
          nomeCandidato,
          IndiceVaga
          
        }
        return candidatos.push(candidato) 
        }else if(confirmacao==="Nao"){
          alert("Tente novamente")
          CriarCandidato()
        }else{
          alert("Resposta inválida, voltando ao menu")
        }
} else{
    alert("Não existe vaga com esse índice")
  }
}


//Não sei como colocar para filtrar os candidatos pelo indice da vaga 
// function FiltrarCandidatos(IndiceVagaParametro){
//   const numeroCandidatos = candidatos.reduce((count,nomeCandidato)=>{
//     return nomeCandidato.IndiceVaga===IndiceVagaParametro ? count+1:count;
//   },0);
//   return numeroCandidatos
// }

function ListarVagas(){
  for (let i=0;i<vagas.length;i++){
    alert("Vaga "+(i)+
    "\n Nome da vaga:"+vagas[i].nome+
    "\n Número de candidatos totais "+candidatos.length)
  }
} 

function VisualizarVaga(){
  let IndiceVaga=parseFloat(prompt("Qual o índice da vaga?"))     
      let caracteristica=""
      for (let j=0; j<FiltrarCandidatos();j++){ 
        caracteristica+= "Nome dos candidatos:"+candidatos[IndiceVaga].nomeCandidato+"\n"
          }
          alert("A vaga de índice "+IndiceVaga+" possui essas informações:\nÍndice: "+IndiceVaga+"\n"+"nome: "+vagas[IndiceVaga].nome +"\nDescrição: "+vagas[IndiceVaga].descricao+"\nData Limite: "+
          vagas[IndiceVaga].data+"\nQuantidade de candidatos: "+FiltrarCandidatos()+caracteristica)
    }

function ExcluirVaga(){
  let IndiceVaga=parseFloat(prompt("Qual o índice da vaga?"))
    if (IndiceVaga<vagas.length){       
      const confirmacao=prompt("Você confirma estas informações?(Sim/Nao)\nNome: "+vagas[IndiceVaga].nome+"\nDescrição: "+vagas[IndiceVaga].descricao+"\nData Limite: "+vagas[IndiceVaga].data)

      if (confirmacao==="Sim"){
        alert("Vaga excluida")
      return vagas.pop()
      }else if(confirmacao==="Nao"){
        alert("Tente novamente")
        CriarCandidato()
      }else{
        alert("Resposta inválida, voltando ao menu")
       }
    } else{
    alert("Não existe vaga com esse índice")
    }

}    





do{
opcao=prompt("Escolha uma opção: \n1-Listar vagas disponíveis\n2-Criar uma nova vaga\n3-Visualizar uma vaga\n4-Inscrever um cadidato em uma vaga\n5-Excluir uma vaga\n6-Sair")
switch(opcao){
  case "1":
    ListarVagas()
    break
  case "2":
    CriarVaga()
    break
  case "3":
    VisualizarVaga()
    break
  case "4":
    CriarCandidato()
    break
  case "5":
    ExcluirVaga()
    break
  case "6":
    alert("Saindo...")
    break     

}
}while(opcao!=="6")