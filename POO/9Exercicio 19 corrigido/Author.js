const Post = require("./post")

class Author{
  constructor(name){
    this.name=name
    this.posts=[]
  }
  creatPosts(title,body){
    const newPost = new Post(title,body,this)
    this.posts.push(newPost)
    return newPost
  }
}
module.exports=Author