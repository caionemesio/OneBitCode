class Installment {
  constructor(value,installmentNumber){
    this.value=value
    this.installmentNumber=installmentNumber
    this.status='pending'
  }
}

module.exports = Installment