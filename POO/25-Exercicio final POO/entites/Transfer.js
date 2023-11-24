class Transfer extends Deposit{
    constructor(userTransfer, userReceived,value,date){
        super(value,date)
        this.userTransfer=userTransfer
        this.userReceived=userReceived
    }
}