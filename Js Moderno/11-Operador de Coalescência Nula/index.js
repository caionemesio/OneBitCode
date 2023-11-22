// const a = 0//false

// const b= null//false

// const c= "Text"

// console.log(a || b || c)
// console.log(a ?? c)

let a = 0

let b = a || 42

console.log({a,b})

b = a ?? 42

console.log({a,b})