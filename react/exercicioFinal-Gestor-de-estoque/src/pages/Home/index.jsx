import Card from "../../Components/Card"
import { useProducts } from "../../contexts/ProductsContext"
import Styles from "./styles.module.css"
export default function Home(){

  const {products}=useProducts()

  const totalProducts= products.reduce((accumulator,currentValue)=>{
    return accumulator+ Number(currentValue.quantity)
  },0)


  return (
    <>
    <h2 className={Styles.title}>Dashboard</h2>
    <div className={Styles.cards}>
      <Card title="Diversidade de itens" quantity={products.length}/>
      <Card title="Inventário total" quantity={totalProducts}/>
      <Card title="Itens recentes" quantity="8"/>
      <Card title="Itens acabandos" quantity="5"/>
    </div>
    </>
  )
}