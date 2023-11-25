 class Transfer{
    constructor(userTransfer, userReceived,value){
        
        this.userTransfer=userTransfer
        this.userReceived=userReceived
        this.value=value
        this.createdAt= new Date()
    }
}

module.exports = Transfer