async function calcIMC(weight,height){
 
    if ( isNaN(weight) || isNaN(height)){
      return Promise.reject('Os paramêtros tem que ser um número')
    }
      let imc= weight/(height*height)
      return imc
}

async function showIMC(weight,height){

  try {
    const imc= await calcIMC(weight,height)
    console.log('só um teste')
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

  } catch (err) {
    console.log(`A promise foi rejeitada, motivo: ${err}`)
  }
 
  
  

}


showIMC(100,1.80)