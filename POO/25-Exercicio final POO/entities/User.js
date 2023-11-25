const Account = require("./Account")


 class User{
  constructor(email,name){
    this.name=name
    this.email=email
    this.account = new Account(this)
  }
}
module.exports = User