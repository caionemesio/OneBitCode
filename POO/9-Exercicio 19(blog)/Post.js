
class Post{
  constructor(author,comment){
    this.author= author
    this.comments=[comment]
    
  }
  addComment(newComent){
    this.comments.push(newComent)
  }
}


module.exports=Post