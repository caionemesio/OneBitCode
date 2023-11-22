import { Component } from "./Component.js"

export class LabelClass extends Component{

  constructor(text,parent,options){
    super('label',parent,Object.assign({},options,{textContent:text}))
  }
}

// export class LabelClass extends Component{
//   constructor(content,parentSelector,id){
//     super('label',parentSelector)
//     this.content=content
//     this.id=id
//     this.createLabel()
//   }

//   createLabel(){
//     if (this.getElement().tagName.toLowerCase()==='label'){
//       this.getElement().innerText=this.content
//       this.getElement().id=this.id
//      }
//   }
// }

