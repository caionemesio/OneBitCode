import { Component } from "./Component.js";


export class Form extends Component{
  constructor(parentSelector,options){
    super('form', parentSelector,options);
  }
  addChildren(...children){
    children.forEach(child=>{
      this.getElement().appendChild(child.getElement())
    })
  }
}