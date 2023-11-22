function normalSum(a,b){
    return a+b
}

console.log(`Soma normal: ${normalSum(2,2)}`)


const anonymousSum = function(a,b){
    return a+b

}

console.log(`Soma anonima: ${anonymousSum(2,2)}`)

const arrowSum = (a,b)=> a+b

console.log(`Soma arrowFunction: ${arrowSum(2,2)}`)

const arrowFunction2 = (a,b)=>{
    return a-b

}

console.log(`Soma arrowFunction: ${arrowFunction2(3,2)}`)


const double= n=> `O dobro de ${n} é ${n*2}`

const num=21

console.log(double(21))

const towns = ['itapissuma','igarassu','itamaraca','Recife']

const startingWithI= towns.filter(town=> town[0]==='i')
console.log(startingWithI)