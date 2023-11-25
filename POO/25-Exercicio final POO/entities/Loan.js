const Installment = require("./Installment")

class Loan {
  

  constructor(value,installments){
    this.value=value
    this.createdAt= new Date()
    this.installments=[]
    for (let i=1; i<=installments;i++){
      this.installments.push(new Installment((value*Loan.#interest)/installments,i))
    }
    
  }

  static #interest= 1.05

  static get getinterest(){
    return Loan.#interest
  }
  static set interest(newInterest){
      if (typeof newInterest==='number'){
        this.#interest=1+(newInterest/100)
      }
  }


}

module.exports = Loan