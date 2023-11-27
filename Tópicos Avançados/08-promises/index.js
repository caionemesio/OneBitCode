//pendente-pending
//resolvida-resolved
//rejeitada-rejected
//finaliza

function execute(){
  //faz algo
  return new Promise((resolve,reject)=>{
    console.log('A promise está sendo executada')
    setTimeout(()=>{
      console.log('resolvendo a promise')
      resolve('resultado')
    })
  })
}
const p = execute()
console.log(p)

setTimeout(()=>{
  console.log(p)
},2000)


// const p = new Promise((resolve,reject)=>{
//   console.log('A promise está sendo executada')
//   setTimeout(()=>{
//     if(true){
//       reject(false)
//     }
//     console.log('resolvendo a primise')
//     resolve(true)
//   },2000)
// })

// console.log(p)

// setTimeout(()=>{
//   console.log(p)
// },3000)