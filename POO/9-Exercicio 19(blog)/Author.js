const Post = require("./Post")


class Author{

  constructor(name,postAuthor){
    this.name = name
    this.postsAuthor= [postAuthor]
  }
  createNewPost(title,content){
    const newPost = new Post(this, {title,content})
    this.postsAuthor.push(newPost)
    return newPost
  }
}

module.exports=Author