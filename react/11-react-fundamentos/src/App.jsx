
import Title from "./components/Title"
import { Subtitile } from "./components/Subtitle"
import StatusText from "./components/StatusText"
import styles from "./styles/App.module.css"



export default function App(){
 
  
  return (
    <div className={styles.app}>
      <Title/>
      <Subtitile/>
      <StatusText/>
      {/* <p>{status && "teste"}</p> */}
    </div>
  )
}