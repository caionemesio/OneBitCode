import { Component } from "./Component.js";
import { Form } from "./Forms.js";
import { InputClass } from "./InputClass.js";
import { LabelClass } from "./LabelClass.js";

const title = new Component('h1','body',{textContent:'Olá, mundo!'}) 
console.log(title)


title.tagname='h1'
title.build().render()

const form = new Form('body')

const label = new LabelClass('Name',form,{htmlFor:'nameInput'})
const input = new InputClass(form,{id:'nameInput',name:'name'})

form.render()
label.render()


input.render() // mesma coisa de form.addChildren(input)


form.addChildren(
  new Component('br'),
  new Component ('br'),
  new LabelClass('Data de nascimento',form,{htmlFor:'birthdayInput'}),
  new InputClass(form,{id:'birthdayInput',name:'birthday',type:'date'})

)