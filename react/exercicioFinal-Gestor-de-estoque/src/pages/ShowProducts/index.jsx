
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
        <p>ID</p>
        <p>Nome</p>
        <p >Em Estoque</p>
        <p >Categoria</p>
        <p >Ações</p>
      </div>
      <div className={Styles.content}>
        {products.map((product)=>(
          <div key={product.id} className={Styles.items}>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.quantity}</p>
            <p>{product.category}</p>
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