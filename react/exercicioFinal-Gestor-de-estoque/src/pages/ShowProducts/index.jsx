
import { useProducts } from "../../contexts/ProductsContext.jsx"
import Styles from "./styles.module.css"
import SeeButton from "../../Components/Buttons/SeeButton/index.jsx"
import DeleteButton from "../../Components/Buttons/DeleteButton/index.jsx"
import UpdateButton from "../../Components/Buttons/UpdateButton/index.jsx"
export default function ShowProducts(){
  const {products}= useProducts()
  return(
    <div className={Styles.container}>
      <div className={Styles.header}>
        <p style={{width:"70px"}}>ID</p>
        <p style={{width:"70px"}}>Nome</p>
        <p >Em Estoque</p>
        <p >Categoria</p>
        <p style={{width:"281.11px"}}>Ações</p>
      </div>
      <div className={Styles.content}>
        {products.map((product)=>(
          <div key={product.id} className={Styles.items}>
            <p style={{width:"70px"}}>{product.id}</p>
            <p style={{width:"70px"}}>{product.name}</p>
            <p style={{width:"89.55px"}}>{product.quantity}</p>
            <p style={{width:"73.78px"}}>{product.category}</p>
            <div className={Styles.buttons}>
              <SeeButton color='#000000' backgroundColor="rgb(5, 89, 245)" productId={product.id}/>
              <UpdateButton productId={product.id}/>
              <DeleteButton productId={product.id}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}