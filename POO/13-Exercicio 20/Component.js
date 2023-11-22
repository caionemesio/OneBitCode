export class Component{

  #element = null
  constructor(tagname,parentSelector,options){
    this.tagname=tagname
    this.parentSelector=parentSelector
    this.options=options
    this.build()
  }
  getElement(){
   return this.#element
  }
  build(){
    this.#element = document.createElement(this.tagname)
    Object.assign(this.#element,this.options)
    return this
  }

  render(){
    if(this.parentSelector instanceof Component){
      this.parentSelector.#element.append(this.#element)
    } else{
      document.querySelector(this.parentSelector).append(this.#element)
    }
  }
}
