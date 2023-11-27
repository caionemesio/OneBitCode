console.log('salve seres humanos')

// const timeoutId=setTimeout(()=>{
//   console.log('3 segundos se passaram ja ')
// },3000)

// clearTimeout(timeoutId)

let seconds = 0

 const intervalId = setInterval(()=>{
  seconds +=3
  console.log(`se passaram ${seconds} segundos`)
  if (seconds >10){
    clearInterval(intervalId)
    console.log('tempo esgotado')
  }
},1000*3)


