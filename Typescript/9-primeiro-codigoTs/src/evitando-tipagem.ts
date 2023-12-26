
//Quando colocar o ? depois da propriedade ele vira opcional
function sendSpaceship(spaceship:{pilot:string,copilot?:string}){
// ...
}
sendSpaceship({pilot:'caio',copilot:'caua'})

sendSpaceship({pilot:'caio'})

//unknow pode receber outros tipos, mas outros tipos nao podem receber unknow
let input: unknown
input='teste'
input=20

let text:string

//text=input

input= text



//O tipo any desabilita o typeScript ele
let any: any
any='teste'
any=20

text=any

input= text


function verification(test) {
  if (test) {
    
  } else {
    let _check:never
    let text= _check
    return _check
  }
}