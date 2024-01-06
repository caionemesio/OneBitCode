import Card from "./components/Card";
import style from "./styles/global.module.scss"
import primeiroPoster from "../public/movie-img.jpg"
import empireStrikes from "../public/empireStrikes-img.jpg"
import returnJedi from "../public/returnJedi-img.jpg"

export default function App(){
  return( 
    <div style={style}>
    <Card title="Pôster: Star Wars (1977)"posterImg={primeiroPoster}/>
    <Card title="Pôster: Empire Stikes Back (1980)"posterImg={empireStrikes}/>
    <Card title="Pôster: Return of the Jedi (1983)"posterImg={returnJedi}/> 
    </div>
  )
}