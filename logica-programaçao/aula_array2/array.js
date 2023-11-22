const arr=["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
//Adicionar elementos no final do arrey
//Push
let tamanho=arr.push("Caio")
console.log(arr)
console.log(tamanho )


//Adiciona elementos no começo do arrey
//Unshift
tamanho= arr.unshift("Nemésio")
console.log(arr)
console.log(tamanho)


//Remover elementos no final do arrey 
//Pop
let ultimoElemento=arr.pop()
console.log(arr)
console.log(ultimoElemento)


//Remover elemenos no final do arrey
//Shift
ultimoElemento=arr.shift()
console.log(arr)
console.log(ultimoElemento)


//Pesquisar por um elemento
//includes
const inclui= arr.includes("Gandalfd")
console.log(inclui)

//Pesquisar por um elemento atraves do indice
//indexOf
const indice= arr.indexOf("Gandalf")
console.log(indice)


//Cortar
//slice
const hobbits=arr.slice(0,4)
console.log(hobbits)
const outros = arr.slice(-4)
console.log(outros)


//Concatenar arrays
//concact
const sociedade=hobbits.concat(outros,"Nemésio")
console.log(sociedade)


//Substituição de elementos
//splice
const ElementosRemovidos= sociedade.splice(indice,3,"Gandalf, o Cinzento","Dale","Dele","Doly")
//indice é 4, o 3 são os elementos a partir desse que serao excluidos e substituidos por novos
console.log(sociedade)
console.log(ElementosRemovidos)

//Iterar sobre os elementos
for(let i=0; i<sociedade.length;i++){
  const elemento=sociedade[i]
  console.log(elemento+" se encontra na posição "+i)
}