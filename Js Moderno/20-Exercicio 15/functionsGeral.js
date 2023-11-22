import calculate from "./calculate.js"

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const input= document.getElementById('input')


export function addInput(charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value+=value
  })
}

export function clear(){
  input.value=''
  input.focus()
}

export function keydownCalc(ev){
  ev.preventDefault()

  if (allowedKeys.includes(ev.key)){
    input.value+=ev.key
    return 
  }
  if (ev.key ==='Backspace'){
    input.value= input.value.slice(0, -1)
  }

  if (ev.key==='Enter'){
    calculate()
  }
}