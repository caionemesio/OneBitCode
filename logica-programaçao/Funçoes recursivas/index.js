function dividir(num){
  console.log(num)
  if(num % 2 ===0){
    dividir(num/2)
  } else{
    return num
  }
}
dividir(1024)

function dobrar(num){
  console.log(num)
  dobrar(num*2)
}
// dobrar(1)
//Não tem fim entra em um loop ate o programa estourar


function fatorial(num){
  console.log("Número: "+num)
  if (num===0){//Caso base
    return 1
   
  }else if (num===1){
    return 1
  }else{
    console.log(num+" * !"+(num-1))
    return num *fatorial(num-1)
  }
    
}
console.log(fatorial(5))