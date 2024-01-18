import { useProducts } from "../../../contexts/ProductsContext"

export default function DeleteButton({productId}){
    const {products,setProducts}= useProducts()
    const deleteProduct=()=>{
        const indexToDelete=products.findIndex((product)=>product.id===productId)

        if (indexToDelete!==-1){
            const updatedProducts=[...products]

            updatedProducts.splice(indexToDelete,1)

            setProducts(updatedProducts)

            localStorage.setItem("obc-product-lib", JSON.stringify(updatedProducts))

            alert("Produto excluido com sucesso!")
        }
        
    }
    return (
        <button  onClick={deleteProduct} style={{backgroundColor:"rgb(238, 26, 26)"}}>      
            Excluir
         </button>
    )
}