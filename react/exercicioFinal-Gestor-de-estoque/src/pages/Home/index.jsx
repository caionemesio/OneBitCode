import SeeButton from "../../Components/Buttons/SeeButton"
import Card from "../../Components/Card"
import { useProducts } from "../../contexts/ProductsContext"
import Styles from "./styles.module.css"
export default function Home(){

  const {products}=useProducts()



  const recentProducts= products.filter((product)=>{
    const currentDate= new Date();
    const productDate= new Date(product.date)
    const differenceInDays = (currentDate-productDate) /(1000 * 3600 * 24)
    return differenceInDays<=10
  })

  const finishProducts = products.filter(product => product.quantity<=10)
    

  const totalProducts= products.reduce((accumulator,currentValue)=>{
    return accumulator+ Number(currentValue.quantity)
  },0)


  return (
    <>
    <h2 className={Styles.title}>Dashboard</h2>
    <div className={Styles.cards}>
      <Card title="Diversidade de itens" quantity={products.length}/>
      <Card title="Inventário total" quantity={totalProducts}/>
      <Card title="Itens recentes" quantity={recentProducts.length}/>
      <Card title="Itens acabandos" quantity={finishProducts.length}/>
    </div>

    <section className={Styles.contents}>
      <div className={Styles.RecentsProductsHeader}>
        <p>Item Recentes</p>
        <p>Ações</p>
      </div>
      <div className={Styles.FinishingProductsHeader}>
        <p>Itens acabando</p>
        <p>Qtd.</p>
        <p>Ações</p>
      </div>
    </section>
    <section className={Styles.contents}>
    <div className={Styles.ProductsContent}>
        {recentProducts.map((product)=>(
          <div key={product.id} className={Styles.items}>
            <p>{product.name}</p>
            <SeeButton productId={product.id} backgroundColor="#ffff" color="#000000"/>
          </div>
        ))}
      </div>

      <div className={Styles.ProductsContent}>
        {finishProducts.map((product)=>(
          <div key={product.id} className={Styles.items}>
            <p style={{width:"116.28px"}}>{product.name}</p>
            <p  style={{width:"32.25px", paddingLeft:"2rem"}}>{product.quantity}</p>
            <SeeButton productId={product.id} backgroundColor="#ffff" color="#000000"/>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}