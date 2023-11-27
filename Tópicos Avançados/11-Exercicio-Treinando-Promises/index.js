function calcIMC(weight,height){

  return new Promise((resolve,reject)=>{
    if ( isNaN(weight) || isNaN(height)){
      reject('Os paramêtros tem que ser um número')
    }else{
      let imc= weight/(height*height)
      resolve(imc)
    }
  })
}

function showIMC(weight,height){
  calcIMC(weight,height).then((imc)=>{
      console.log(`O IMC da pessoa é de ${imc.toFixed(2)}`)
      switch (true){
        case imc< 18.5:
          console.log('Abaixo do peso')
        break;
    
        case imc>=18.5 && imc<25:
        console.log('Normal')
        break;
    
        case imc>=25 && imc<30:
        console.log('sobrepeso')
        break;
    
        case imc>=30  && imc<40:
        console.log('obesidade')
        break;
    
        case imc> 40:
          console.log('obesidade grave')
        break; 
      }
  }).catch((err)=>{
    console.log(`A promise foi rejeitada, motivo: ${err}`)
  })

  console.log('só um teste')
  

}


showIMC(65,1.82)