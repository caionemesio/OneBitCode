const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

// console.log(user.friends[0].phone.ddd)


//usa-se a interrogação para verificar se a propriedade existe, caso nao exista irá parar
//por ali e retornar um dado do tipo undefined, por exemplo esta tentando acessar a proprie
//dade phone que nao existe, mas ate ai nao da erro pois o js retorna undifened, mas ao tentar
//pegar a propriedade ddd estoura um erro, por isso que com o phone?.ddd verifica que nao existe
//a propriedade phone e ja para por ali retornando o undefined
console.log(user?.friends[0]?.phone?.ddd)

console.log(user?.xesque?.lenght)

console.log(user.brothers?.[5].name)