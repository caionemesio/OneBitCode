const App = require("./App");

App.createUser("Caio Nemésio","caionemesio@gmail.com")
App.createUser("Carlos Nemésio","carlosnemesio@gmail.com")
App.createUser("Cauã Roberto","cauaroberto@gmail.com")

App.operationDeposit('caionemesio@gmail.com',100)

App.operationTransfer("caionemesio@gmail.com", "carlosnemesio@gmail.com",20)
App.alterInstallment(10)
App.operationLoan("cauaroberto@gmail.com",2000,24)


console.log(App.searchUserbyEmail("caionemesio@gmail.com"))
console.log(App.searchUserbyEmail("caionemesio@gmail.com").account)

console.log(App.searchUserbyEmail("carlosnemesio@gmail.com"))
console.log(App.searchUserbyEmail("carlosnemesio@gmail.com").account)

console.log(App.searchUserbyEmail("cauaroberto@gmail.com"))
console.log(App.searchUserbyEmail("cauaroberto@gmail.com").account)
console.log(App.searchUserbyEmail("cauaroberto@gmail.com").account.loans[0].installments)

