import Container from "./components/Container"

import UserContext from "./contexts/UserContext"


export default function App(){

  const user={
    name:"joao",
    email:"joao@email.com"
  }
  return(
    <UserContext.Provider value={user}>
      <h1>Usando Contexto</h1>
      <Container>
        
      </Container>
      
    </UserContext.Provider>
  )
}