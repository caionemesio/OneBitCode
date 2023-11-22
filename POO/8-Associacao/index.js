const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('7 de setembro',99,'Centro','Itapissuma','PE')

const caio= new Person('Caio',addr)

console.log(caio)
console.log(caio.address.fullAddress())