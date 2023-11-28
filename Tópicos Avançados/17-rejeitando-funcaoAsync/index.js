async function asyncSum(a, b) {
    if(isNaN(a) || isNaN(b)){
        return Promise.reject('Arguments must be a number')
    }
    return a+b
}

async function asyncSubtract(a, b) {
    if(isNaN(a) || isNaN(b)){
        return Promise.reject('Arguments must be a number')
    }
    return a-b
}

const sumResult=asyncSum(undefined,33)
const subtractResult=asyncSubtract(50,10)

Promise.all([sumResult,subtractResult]).then(results=>{
    console.log(results)
}).catch(err=>{
    console.log(err)
})

