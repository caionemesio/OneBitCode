class Product{
  constructor(name, description,price){
    this.name=name
    this.description=description
    this.price=price
    this.inStock=0
  }
  addStock(quantity){
    this.inStock+=quantity
  }
  calculateDiscount(percentagem){
  return this.price-(this.price*percentagem/100)
 
  }
}

const Carro = new Product('corola','Carro rapido',5000)

console.log(Carro)

Carro.addStock(50)
const priceWithDiscount = Carro.calculateDiscount(50)



console.log(Carro)

console.log(priceWithDiscount)
