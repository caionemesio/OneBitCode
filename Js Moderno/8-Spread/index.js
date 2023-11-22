const towns=['Itapissuma','Itamaraca','Igarassu','Recife']

console.log(towns)
console.log(...towns)
console.log(...towns[0])


// O towsCopy ta referenciando o array towns ou seja tudo que alterar no copy ira ser
// alterado no array towns
const townsCopy= towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Abreu')

console.log({towns, townsCopy})


//Com o operador spread é possivel criar um novo array baseado no outro array
//sendo ambos independentes
const townsClone=[...towns]

townsClone.push('Olinda')

console.log({towns, townsCopy,townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}

townsObjClone.test="Test"

console.log({townsObj,townsObjClone})