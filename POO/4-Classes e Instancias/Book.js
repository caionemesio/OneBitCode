class Book{
  constructor(title) {
    this.title=title
    this.published= false
  
  }

  publish(){
    this.published=true
  }

}

const revolucao = new Book("Revolução dos bixos")
const book1984 = new Book('1984')

revolucao.publish()

console.log(revolucao,book1984)

console.log(revolucao instanceof Book)