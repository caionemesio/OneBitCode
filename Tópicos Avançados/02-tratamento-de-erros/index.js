function sum(a,b){
  const firstNumber = Number (a)
  const secondNumber = Number(b)

  if(isNaN(firstNumber) || isNaN(secondNumber)){
    throw new Error('arguments must be two numbers')
  }

  

  return firstNumber +secondNumber
}

try{
    console.log(sum(2,9))
    console.log(sum(true,9))
    // console.log(sum(undefined,9))
    console.log(sum(18,"10"))
    console.log(sum(18,null))
  } catch(error){
    console.log('An error ocurred!')
    console.log(error.message)
  } finally{
    console.log('Calculations finished')
  }