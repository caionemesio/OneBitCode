const Author = require("./Author");

const Caio = new Author('Caio')

const post = Caio.creatPosts('A arca de noé','Nem noé carregou tanto animal')

post.addComment('Caua', 'tu é uma anta')

console.log(Caio)
console.log(post)