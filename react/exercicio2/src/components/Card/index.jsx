import Button from "../Button"
import styleCard from "./Card.module.scss"
export default function Card ({title,posterImg}){

  return (
    <div className={styleCard.container}>
        <img src={posterImg} className={styleCard.poster} alt="banner starwars" width="300px" height="400px"/>
        <div className={styleCard.content}>
          <h2 style={{fontSize:"1.75rem"}}
          >{title}</h2>
          <p style={{fontSize:"1rem"}}
          >
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3.
          Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará
          aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decididir pendurar.
          Não perca a chance de adicionar essa linda memória ao seu acervo!
          </p>
        <Button/>
        </div> 
    </div>
  )
}