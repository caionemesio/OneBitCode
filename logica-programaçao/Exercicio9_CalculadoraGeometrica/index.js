// //Meu jeito de fazer
// let opcao=""
// do{
//   opcao=prompt("Qual área você deseja calcular?\n1-Área do triângulo\n2-Área do retângulo\n3-Área do quadrado\n4-Área do trapézio\n5-Área do círculo\n6-Sair")
//   switch(opcao){
//     case "1":
//      function AreaTriangulo(base,altura){
//       alert("A área do triângulo é: "+(base*altura)/2)
//      }
//      let base=parseFloat(prompt("Qual a base do Triângulo?"))
//      let altura=parseFloat(prompt("Qual a altura do Triângulo?"))
//      AreaTriangulo(base,altura)
//      break

//      case "2":
//       function AreaRetangulo(base,altura){
//         alert("A área do triângulo é: "+base*altura)
//        }
//        let base_retangulo=parseFloat(prompt("Qual a base do Triângulo?"))
//        let altura_retangulo=parseFloat(prompt("Qual a altura do Triângulo?"))
//        AreaRetangulo(base_retangulo,altura_retangulo)
//       break

//       case "3":
//       function AreaQuadrado(lado){
//         alert("A área do quadrado é: "+lado*lado)
//       }
//       let ladoQuadrado=parseFloat(prompt("Qual o lado do quadrado?"))
//       AreaQuadrado(ladoQuadrado)
//       break
//       case "4":
//       function AreaTrapezio(BaseMaior,BaseMenor,altura_trapezio){
//         alert("A área do trapézio é: "+((BaseMaior+BaseMenor)*altura_trapezio)/2)
//       }
//       let BaseMaior=parseFloat(prompt("Qual a base maior do trapézio?"))    
//       let BaseMenor=parseFloat(prompt("Qual a base menor do trapézio?"))  
//       let altura_trapezio=parseFloat(prompt("Qual a altura do trapézio?"))
//       AreaTrapezio(BaseMaior,BaseMenor,altura_trapezio)
//       break

//       case "5":
//         function AreaCirculo(raio){
//           alert("A área do círculo é: "+3.14*raio*raio)

//         }
//         let raio =parseFloat(prompt("Qual o raio do círculo?"))  
//       AreaCirculo(raio)
//         break 

//       case "6":
//         alert("Encerrando a aplicação")
//       break

//       default:
//        alert("Opção invalida")
//   }
// }while(opcao!="6")
// //Jeito do curso

function AreaTriangulo(){
  const base= prompt("Informe a base do Trinângulo")
  const altura= prompt("Informe a altura do Trinângulo")
  return (base*altura)/2
}
function AreaRetangulo(){
  const base= prompt("Informe a base do retângulo")
  const altura= prompt("Informe a altura do retângulo")
  return base*altura
}
function AreaQuadrado(){
  const lado= prompt("Informe o lado do quadrado")
  return lado*lado
}
function AreaTrapezio(){
  const BaseMaior=parseFloat(prompt("Informe a base maior do trapezio"))
  const BaseMenor=parseFloat(prompt("Informe a base menor do trapezio"))
  const altura= prompt("Informe a altura do trapezio")
  return (BaseMaior+BaseMenor)*altura/2
}
function AreaCirculo(){
  const raio=prompt("Informe o raio do círculo")
  return 3.14*raio*raio
}

function exibirMenu(){
  return prompt(
"Qual área você deseja calcular?\n1-Área do triângulo\n2-Área do retângulo\n3-Área do quadrado\n4-Área do trapézio\n5-Área do círculo\n6-Sair"
  )
}
function executar(){
  let opcao=""
  do{
    opcao=exibirMenu()
    let resultado

    switch (opcao){
      case "1":
        resultado= AreaTriangulo()
        break
      case "2":
        resultado=AreaRetangulo()
        break
      case "3":
        resultado=AreaQuadrado()
        break
      case "4":
        resultado=AreaTrapezio()
        break
      case "5":
        resultado=AreaCirculo()
        break
      case "6":
      alert("Encerrando...")
        break
      default:
      alert("Opção invalida")
        
    }
  if (resultado){
    alert("Resultado: "+resultado)
  }
  }while(opcao !=="6")
}
executar()