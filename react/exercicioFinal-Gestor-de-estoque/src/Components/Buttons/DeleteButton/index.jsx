
import { useProducts  } from "../../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";


export default function DeleteButton({productId}){
    const {products,setProducts}= useProducts()
    const navigateTo = useNavigate();
    const deleteProduct=()=>{
        const indexToDelete=products.findIndex((product)=>product.id===productId)

        if (indexToDelete!==-1){
            const updatedProducts=[...products]

            updatedProducts.splice(indexToDelete,1)

            setProducts(updatedProducts)

            localStorage.setItem("obc-product-lib", JSON.stringify(updatedProducts))
            alert("Produto excluido com sucesso!")
            navigateTo("/products");
            
            
        }
        
    }
    return (
        <button  onClick={deleteProduct} style={{backgroundColor:"rgb(238, 26, 26)"}}>      
            Excluir
         </button>
    )
}