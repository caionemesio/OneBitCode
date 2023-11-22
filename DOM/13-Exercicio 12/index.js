const form=document.getElementById("form")
form.addEventListener("submit", function(ev){
  
  ev.preventDefault()
  const ul=document.getElementById('tecnologias')
  const newLi=document.createElement('li')
  newLi.innerHTML='<label for="tecnologia">Nome da tecnologia</label>'
  const newInput =document.createElement('input')
  newInput.type='text'
  newInput.name='tecnologia'
  newInput.id='tecnologia'
  const timeText=document.createElement('h4')
  timeText.innerText='Qual tempo de experiência com a tecnologia?'

  const InputRadio1=document.createElement('input')
  InputRadio1.type='radio'
  InputRadio1.name='radioElement'
  InputRadio1.value='0-2Anos'
  InputRadio1.id='main1'
  InputRadio1.innerHTML='<label for="tecnologia">0-2 Anos</label>'
  const labelInputRadio1=document.createElement('label')
  labelInputRadio1.innerText='0-2 Anos'

  const InputRadio2=document.createElement('input')
  InputRadio2.name='radioElement'
  InputRadio2.type='radio'
  InputRadio2.value='3-4Anos'
  InputRadio2.id='main2'
  const labelInputRadio2=document.createElement('label')
  labelInputRadio2.innerText='3-4 Anos'
  

  const InputRadio3=document.createElement('input')
  InputRadio3.name='radioElement'
  InputRadio3.type='radio'
  InputRadio3.value='5+Anos'
  InputRadio3.id='main3'
 
  const labelInputRadio3=document.createElement('label')
  labelInputRadio3.innerText='5+ Anos'
  
  

  const ButtonRemover=document.createElement('button')
  ButtonRemover.innerHTML='Remover'
  ButtonRemover.id='buttonRemover'

  const ButtonCadastrar=document.createElement('button')
  ButtonCadastrar.innerHTML='Salvar'
  

  newLi.appendChild(newInput)
  newLi.appendChild(timeText)
  newLi.appendChild(InputRadio1)
  newLi.appendChild(labelInputRadio1)
  newLi.appendChild(InputRadio2)
  newLi.appendChild(labelInputRadio2)
  newLi.appendChild(InputRadio3)
  newLi.appendChild(labelInputRadio3)
  newLi.appendChild(ButtonRemover)
  ul.appendChild(newLi) 
  ul.appendChild(ButtonCadastrar)
  
  

  })

  const usuarios=[]
  const SalvarInfo=document.getElementById('tecnologias')
  SalvarInfo.addEventListener("submit", function(ev){
    ev.preventDefault()
    const name=document.getElementById('name').value 
    const nameTecnologia=document.getElementById('tecnologia').value
    const tempoTecnologia=document.getElementsByName('radioElement').value
    let dadosUsuario={name,nameTecnologia,tempoTecnologia}
    usuarios.push(dadosUsuario)
    
    
    
  })
  console.log(usuarios)