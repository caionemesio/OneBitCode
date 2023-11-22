
function media (...media){
  return media.reduce((count,num)=>count+num,0) / media.length
}

console.log(media(3,4,5))

function mediaPonderada(...entries){
    const sum = entries.reduce((accum,{number,weight})=> accum+(number*(weight ?? 1)),0)
    const weightSum=entries.reduce((accum,entry)=>accum+(entry.weight??1),0)
    return sum/weightSum
}

console.log(`Média ponderada: ${mediaPonderada(

  {number:9,weight:3},
  {number:7},
  {number:10},
)}`)


const mode = (...numbers)=>{
  //[[n,qtd],[n,qrd]]
  const quantities = numbers.map(num => [
    num,
    numbers.filter(n=> num===n).length
  ])
  quantities.sort((a,b)=>b[1]-a[1])
  return quantities[0][0]
}
console.log(mode(1,2,2,2,1,1,4,4,2,1,5,1,1,1,1))




function mediana (...valores){
  const orderedNumbers=[...valores].sort((a,b)=>a-b)

  const valorDoMeio= Math.floor(orderedNumbers.length/2)
  if (orderedNumbers.length % 2 ===0){
   const mediaSimples= (orderedNumbers[valorDoMeio -1]+orderedNumbers[valorDoMeio])/2
   return mediaSimples
  }else{
    return orderedNumbers[valorDoMeio]
  }
}

console.log(mediana(1,2,3,4,5,6))