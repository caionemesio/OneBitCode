// const book={
//   title:"Pequeno principe",
//   pages:46,
//   published:true,
//   inStock:34,
//   tags:["fantasy","adventure","children"],
//   author:{
//     name:"Principe"
//   },
//   addOnStock(quantity){
//     this.inStock+=quantity
//   },
 
// }

//PascalCase->camelCase

function Book(title,pages,tags,author){
  this.title=title
  this.pages=pages
  this.tags=tags
  this.author=author
  this.published=false
  this.inStock=0
  this.addOnStock= function addOnStock(quantity){
    this.inStock+=quantity
  }
  this.save = function(){
    //salva no banco de dados
  }
}

const author={name:"George Orwell"}
const tags = ["dystopia","Adventure"]

const book1984 = new Book("1984",468,tags,author)

console.log(book1984)

const revolucaoDosBichos = new Book('Revolução dos bichos',320,tags,author)

console.log(revolucaoDosBichos)