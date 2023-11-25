class Account{
  #saldo=0
  constructor(user){
    this.loans=[]
    this.transfers=[]
    this.deposits=[]
    this.user=user
  }

  newDeposit(deposit){
    this.#saldo +=deposit.value
    this.deposits.push(deposit)
  }

  newLoan(loan){
    this.#saldo+=loan.value
    this.loans.push(loan)
  }

  newTransfer(transfer){
    if (transfer.userTransfer.email===this.user.email){
      this.#saldo-=transfer.value
      this.transfers.push(transfer)
    }else if (transfer.userReceived.email===this.user.email){
      this.#saldo+=transfer.value
      this.transfers.push(transfer)
    }
    
  }
  get saldo(){
    return this.#saldo
  }
}
module.exports = Account