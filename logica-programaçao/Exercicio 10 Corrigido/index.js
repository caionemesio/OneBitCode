const vagas=[]

function listarVagas() {
  const vagasEmTexto =vagas.reduce(function(textoFinal,vaga,indice){
    //1. nome, (x candidatos)
    textoFinal+= indice+ ". "
    textoFinal +=vaga.nome
    textoFinal +="(" +vaga.candidatos.length + " candidatos)\n"
    return textoFinal
  },"") 
  alert(vagasEmTexto)
}

function novaVaga(){
  const nome=prompt("Informe um nome para vaga")
  const descricao=prompt("Informe uma descrição para a vaga")
  const dataLimite=prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

  const confirmacao=confirm("Deseja criar uma nova vaga com essas informações\n"+
  "Nome: "+nome+"\nDescrição: "+descricao+"\nData Limite: "+ dataLimite)

  if (confirmacao){
    const novaVaga={nome,descricao,dataLimite,candidatos:[]}
    vagas.push(novaVaga)
    alert("Vaga criada.")
  }
}

function exibirVaga(){
  const indice= prompt("Informe o índice da vaga que deseja exibir:")
  if (indice>=vagas.length || indice<0){
    alert("Índice inválido")
    return
  }
  const vaga=vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal,candidato){
    return textoFinal +"\n-" +candidato
  },"")

  alert(
    "Vaga n°" +indice+
    "\nNome: " +vaga.nome+
    "\nDrescrição: "+vaga.descricao+
    "\nData Limite: "+vaga.dataLimite+
    "\nQuantidade de candidatos: "+vaga.candidatos.length+
    "\nCandidatos inscritos: "+candidatosEmTexto
  )
}
function inscreverCandidato(){
  const candidato=prompt("Informe o nome do(a) candidato(a):")
  const indice=prompt("Informe o índice da vaga que o candidato deseja se increver ")
  const vaga=vagas[indice]

  const confirmacao=confirm(
    "Deseja inscrever o candidato " +candidato+ "na vaga"+indice+"?\n"+
    "Nome: "+vaga.nome+ "\nDescrição: "+vaga.descricao+"\nData limite: "+vaga.dataLimite
  )

  if (confirmacao){
    vaga.candidatos.push(candidato)
    alert("Inscrição realizada")
  }
}

function excluirVaga(){
  const indice=prompt("Informe o índice da vaga que deseja excluir")
  const vaga=vagas[indice]

  const confirmacaco=confirm(
    "Realmente deseja excluir a vaga"+indice+ "?\n"+
    "Nome: "+vaga.nome+ "\nDescrição: "+vaga.descricao+"\nData limite: "+vaga.dataLimite

  )

  if (confirmacaco){
    vagas.splice(indice, 1)
    alert("Vaga excluida.")
  }
}
function exibirMenu(){
  const opcao=prompt(
    "Cadastro de vagas de Emprego"+
    "\n Escolha uma das opções:"+
    "\n1. Listar vagas disponíveis"+
    "\n2. Criar uma nova vaga"+
    "\n3. Visualizar uma  vaga"+
    "\n4. Inscrever um candidato"+
    "\n5. Excluir uma vaga"+
    "\n6. Sair"
  )
  return opcao
}

function executar(){
  let opcao=""

  do{
    opcao=exibirMenu()

    switch(opcao){
      case"1":
      listarVagas()
        break
      case"2":
        novaVaga()
        break
      case"3":
        exibirVaga()
        break
      case"4":
        inscreverCandidato()
        break
      case"5":
        excluirVaga()
        break
      case"6":
        alert("Saindo...")
        break
      default:
        alert("Opção invalida")
    }

  }while(opcao !=="6")
}
executar()