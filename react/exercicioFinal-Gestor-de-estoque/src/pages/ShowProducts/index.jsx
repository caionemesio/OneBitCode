import { useProducts } from "../../contexts/ProductsContext.jsx"
import Styles from "./styles.module.css"
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
              <button>Ver</button>
              <button>Atualizar</button>
              <button>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}