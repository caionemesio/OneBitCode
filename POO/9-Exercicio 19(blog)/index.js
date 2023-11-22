const Author = require("./Author");
const Comment = require("./Comment");
const Post = require("./Post");

const firstComment= new Comment('BLA BLA BLA')
const Post1Caio= new Post('Caio',firstComment)

const caioAuthor= new Author('Caio',Post1Caio)

Post1Caio.addComment('que tal outra coisa em dog')

caioAuthor.createNewPost('Caio','Post2 Do guerreiro')

console.log(firstComment)



