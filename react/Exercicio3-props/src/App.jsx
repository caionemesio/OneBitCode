import Profile from "./components/Profile"
import caioPhoto from "./assets/MinhaFoto.jpg"
export default function App(){
  return (
    <>
    <Profile avatar={caioPhoto} bio="Desenvolvedor Fron-end com especialidade em React" email="caionemesio2@gmail.com" name="Caio Nemésio" githubUrl="https://github.com/caionemesio"
    linkedinUrl="https://www.linkedin.com/in/caio-nem%C3%A9sio-294702250/" phone="81991921706" twitterUrl="https://twitter.com/"/>
    </>
  )
}