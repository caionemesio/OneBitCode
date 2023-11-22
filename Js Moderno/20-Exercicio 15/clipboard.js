const resultInput=document.getElementById('result')
export default function clipboard(ev){
  const button=ev.currentTarget
  if (button.innerText==='Copy'){
    button.innerText='Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else{
    button.innerText ='Copy'
    button.classList.remove('success')
  }

}