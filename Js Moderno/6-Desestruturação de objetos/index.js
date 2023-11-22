const person = {
    name:"caio",
    job:"Desempregado",
    parents:["Carlos", "Renata"] 

}

const name = person.name

const {job,parents}=person

console.log(name, job, parents)

const[father,mother]=parents

console.log(father,mother)


function createUser({name,job,parents}){
    const id = Math.floor(Math.random()*999)

    return{
        id,
        name,
        job,
        parents
    }
}

const caio= createUser(person)
console.log(caio)