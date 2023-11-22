class User{

  constructor(fullname,email,password){
    this.fullname= fullname
    this.email=email
    this.password=password
  }
  login(Confirmemail, Confirmpassword){
      if(Confirmemail===this.email && Confirmpassword===this.password){
        console.log('Login confirmado')
      }else{
        console.log('Usuário ou senha incorretos')
      }
  }
}

const caioUser= new User('Caio Nemésio','caionemesio@gmail.com','12345')

console.log(caioUser)

caioUser.login('caionemesio@gmail.com','12345')
caioUser.login('caionemesio@gmail.com','123445')
