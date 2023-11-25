const userName= document.getElementById('name')


const button=document.getElementById('button')


function checkEmail(userEmail){

  //poderia escrever assim: (/\w{2,0}@[a-zA-z]{2,}\.[a-zA-Z]{2,/)
  this.textEmailBefore= userEmail.match(/\w{2,}(?=\@)/)
  this.textEmailAfter=userEmail.match(/(?<=\@)[a-zA-Z]{2,}(?=\.)/)
  this.textEmailDominer= userEmail.match(/(?<=\.)[a-zA-Z]+$/)

  if(!this.textEmailAfter || !this.textEmailBefore || !this.textEmailDominer){
    throw new Error('O email não atende aos critérios desejados')
  }
}

function checkPassword(userPassword){
   this.textPassword = userPassword.match(/.{8,}/)
   this.upperLettler = userPassword.match(/[A-Z]/)
   this.lowerLetter = userPassword.match(/[a-z]/)
   this.number= userPassword.match(/\d/)
   this.caracterSpecial = userPassword.match(/[^a-zA-Z\s0-9]/)

   if(!this.textPassword || !this.upperLettler || !this.lowerLetter || !this.number || !this.caracterSpecial){
    throw new Error('A senha não atende aos critérios desejados')
  }
}

button.addEventListener('click',(ev)=>{
  ev.preventDefault()
  const userEmail= document.getElementById('email').value
  const userPassword= document.getElementById('password').value

  try{
    checkEmail(userEmail)
    checkPassword(userPassword)
  }catch(error){
    alert(error.message)
  }
})
