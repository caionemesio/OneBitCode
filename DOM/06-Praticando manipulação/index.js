function addContact(){
  const contactSection=document.getElementById('contacts-list')

  const h3=document.createElement('h3')
  h3.innerHTML="Contato"

  const ul=document.createElement('ul')
  const nameLi = document.createElement('li')
  nameLi.innerText="Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name='fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText="Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name='phone'

  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  const adressLi = document.createElement('li')
  adressLi.innerHTML='<label for="adress">Endereço: </label>'
  const adressInput= document.createElement('input')
  adressInput.type='text'
  adressInput.name='adress'
  adressInput.id='adress'
  adressLi.appendChild(adressInput)
  ul.appendChild(adressLi)
  ul.appendChild(document.createElement('br'))


  contactSection.append(h3, ul)


}

function removeContact(){
  const contactSection=document.getElementById('contacts-list')

  const titles = document.getElementsByTagName('h3')
  const contacts=document.getElementsByTagName('ul')

   contactSection.removeChild(titles[titles.length-1])
   contactSection.removeChild(contacts[contacts.length-1])
}