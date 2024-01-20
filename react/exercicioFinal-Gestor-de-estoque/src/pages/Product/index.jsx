import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import UpdateButton from "../../Components/Buttons/UpdateButton";
import DeleteButton from "../../Components/Buttons/DeleteButton";
import Styles from "./styles.module.css"

export default function Product(){
    const {productId}=useParams()   
    const {products}= useProducts()
    const product = products.find(p=>p.id===+productId)
    console.log(product.date)

    if (!product){
        return(
            <h2>Opss. Não encontramos esse produto :/</h2>
        )
    }

  return(
    <section>
       <div className={Styles.headContent}>
            <h2>{product.name}</h2>
            <UpdateButton productId={product.id}/>
            <DeleteButton productId={product.id}/>
       </div>
        <div className={Styles.infoProduct}>
            <p>Categoria:{product.category}</p>
            <p>Quantidade em estoque: {product.quantity}</p>
            <p>Preço: R$ {product.price}</p>
        </div>
        <p>{product.description}</p>
        <p>Cadastrado em: {product.date.toLocaleString()}</p>
        {product.updateDate && <p>Atualizado em: {product.updateDate.toLocaleString()}</p>}
    </section>
  )
}