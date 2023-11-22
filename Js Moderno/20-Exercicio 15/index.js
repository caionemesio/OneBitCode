import clipboard from "./clipboard.js"
import calculate from "./calculate.js"
import switchTheme  from "./switchTheme.js"
import { addInput, clear, keydownCalc } from "./functionsGeral.js"





document.querySelectorAll('.charKey').forEach(addInput)
document.getElementById('clear').addEventListener('click',clear)
input.addEventListener('keydown',keydownCalc)
document.getElementById('equal').addEventListener('click',calculate)  
document.getElementById('copyToClipboard').addEventListener('click',clipboard )
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)

 