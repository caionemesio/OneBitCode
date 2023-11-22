function dobro(x){
  alert("O dobro de "+x+" é "+(x*2))
}  
let teste=parseFloat(prompt("Qual numero vc quer dobrar?"))
dobro(teste)   

function dizerOla(nome="Mundo"){
  alert("Olá, "+nome+ "!")
}
// dizerOla("Caio")
// dizerOla()
function soma(a,b){
  alert("Resultado da soma de "+a+"+"+b+" é: "+(a+b))
}
// soma(teste,3)
function criarUsuario(nome,email,senha,tipo="ADM"){
//O padrão só serve se for colocado como ultimo na ordem, caso o contrario
//será necessario passar o parametro pois a ordem importará e o valor será pego
//nome,tipo="ADM",email,senha(forma errada)
  const usuario={
    nome,// mesmo que nome:nome
     email,//mesmo que email:email
    senha,//mesmo que senha:senha,
    tipo//mesmo que tipo:tipo
  }
  console.log(usuario)
}
criarUsuario("Caio","caio@gmail.com","1234")

function muitosparametros(nome,senha,endenreço,telefone,cep){

}
function ObjetoParametro(usuario){
usuario.nome
usuario.senha
}

muitosparametros("nome","senha","endenreço","telefone","cep")

const DadosUsuarios={
  nome:"",
  senha:"",
  endenreço:"",
  telefone:"",
  cep:""

}
ObjetoParametro(DadosUsuarios)




