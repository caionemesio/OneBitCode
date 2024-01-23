import Styles from "./styles.module.css"
export default function Card({title,quantity}){
  return(
    <div className={Styles.cardContent}>
      <p>{title}</p>
      <h2 className={Styles.quantity}>{quantity}</h2>
    </div>
  )
}