import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import UpdateButton from "../../Components/Buttons/UpdateButton";
import DeleteButton from "../../Components/Buttons/DeleteButton";
import Styles from "./styles.module.css"
import { useRef } from "react";

export default function Product(){
    const {productId}=useParams()   
    const {products, updateDate,setUpdateDate  }= useProducts()
    
    const product = products.find(p=>p.id===+productId)

    const creationDateRef= useRef(product.date)

    const storedUpdateDate = localStorage.getItem(`obc-update-date-${productId}`);
    if (storedUpdateDate) {
      setUpdateDate(JSON.parse(storedUpdateDate));
    }


    if (!product){
        return(
            <h2>Opss. Não encontramos esse produto :/</h2>
        )
    }
    console.log(product.date)
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
        <p>Cadastrado em: {creationDateRef.current}</p>
    {updateDate && <p>Atualizado em: {updateDate}</p>} 
    </section>
  )
}