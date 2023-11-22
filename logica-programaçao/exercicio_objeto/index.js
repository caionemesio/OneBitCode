let opcao=""
const imovel=[]

do{
  opcao=prompt("Quantidade de imóveis cadastrados: "+imovel.length+"\n Escolha uma opção: \n1-Salvar um imóvel\n2-Imóveis salvos\n3-Sair")
  switch(opcao){
    case "1":
      const caracteristica = {}
      caracteristica.nome = prompt("Qual nome do proprietário?")   
      caracteristica.QtdQuartos= prompt("Quantos quartos possui o imóvel?")
      caracteristica.QtdBanheiro=prompt("Quantos banheiros o imóvel possui?")
      caracteristica.Garagem=prompt("O imóvel possui garagem?(Sim/Não)")
      const confirmacao=confirm(
        "Salvar este imóvel?\n"+
        "\nProprietário "+caracteristica.nome+
        "\n Quartos: "+caracteristica.QtdQuartos+
        "\n Bahneiros: "+caracteristica.QtdBanheiro+
        "\n Possui garagem? "+caracteristica.Garagem
      )

      if(confirmacao){
        imovel.push(caracteristica)  
      }
      
      break
    case "2":
      for (let i=0 ;i<imovel.length;i++) {
       alert(
        "Imóvel "+(i + 1)+
        "\nProprietário: "+imovel[i].nome+
        "\n Quartos: "+imovel[i].QtdQuartos+
        "\n Banheiros: "+imovel[i].QtdBanheiro+
        "\n Possui garagem? "+imovel[i].Garagem
        )
      }
      break
    case "3":
      alert("Encerrando o programa")
      break
    default:
      alert("Opção invalida")
  }

}while(opcao!=="3")