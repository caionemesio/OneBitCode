class Comment{
  constructor(username,comment){
    this.username=username
    this.comment= comment
    this.dateAt =  new Date()
  }
}
module.exports = Comment