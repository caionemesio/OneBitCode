import { Component } from "./Component.js";


export class InputClass extends Component{
  constructor(parent,options){
    super('input',parent,options)
  }
}



// export class InputClass extends Component{
  
//   constructor(type,id,placeholder,parentSelector){
//     super('input',parentSelector)
//     this.type=type
//     this.id=id
//     this.placeholder=placeholder
//     this.inputMethod()
//   }
//   inputMethod(){
//     if (this.getElement().tagName.toLowerCase()==='input'){
//      this.getElement().type=this.type 
//      this.getElement().id=this.id
//      this.getElement().placeholder=this.placeholder
//     }
//   }
// }