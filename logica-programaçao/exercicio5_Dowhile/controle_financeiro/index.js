let saldoInicial= prompt("Qual seu saldo inicial?")
let Saldo_inicial=parseFloat(saldoInicial)
do{
  let escolha=prompt("Seu saldo atual é de: "+Saldo_inicial+
                    ". O que você deseja fazer com a quantia\n1-Depositar\n2-Retirar\n3-Sair")
   opcoes= parseFloat(escolha)
  switch(opcoes){
    case 1:
      let adicionar=prompt("Qual quantia deseja adicionar?")
      let soma= parseFloat(adicionar)
      Saldo_inicial+=soma
      break
    case 2:
      let remover=prompt("Qual quantia deseja remover?")
      let subtracao= parseFloat(remover)
      Saldo_inicial-=subtracao
      break
    case 3:
      alert("Encerrando o programa")
    default: 
      alert("Opção invalida!")
  }
}
while(opcoes!=3)
