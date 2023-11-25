const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App{
  static #userList=[]

 
 
    static searchUserbyEmail(email){
      const user= App.#userList.find(user=>user.email === email)
       return user ?? null
    }
 

  static createUser(name,email){
     if (!App.searchUserbyEmail(email)){
        const user = new User(email,name)
        App.#userList.push(user)
      }else{
        console.log('O e-mail já está sendo utilizado')
      }
    }

  

  static operationDeposit(email,value){
   const user = App.searchUserbyEmail(email)
   if (user){
    const deposit = new Deposit(value)
    user.account.newDeposit(deposit)
   }else{
    console.log('Usuário não encontrado')
   }

  }

  static operationTransfer(userTransferEmail, userReceivedEmail,value){
    const userTransfer=App.searchUserbyEmail(userTransferEmail);
    const userReceived = App.searchUserbyEmail(userReceivedEmail);
    if (userTransfer && userReceived){
    const transfer = new Transfer(userTransfer, userReceived,value)
    userTransfer.account.newTransfer(transfer)
    userReceived.account.newTransfer(transfer)
    }
    
  }

  static operationLoan(email,value,installments){
   
    const user = App.searchUserbyEmail(email);
    if (user){
    const loan= new Loan(value,installments)
    user.account.newLoan(loan)
    }
    
    
  }
  
  static alterInstallment(newInstallment){
   Loan.interest= newInstallment
  }
}