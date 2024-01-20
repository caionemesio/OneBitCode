import Form from "../Components/Form";
import { useProducts } from "../contexts/ProductsContext";

export default function NewProduct(){
 const  {addProduct}= useProducts()
 
  return( 
    <Form onSubmit={addProduct}/>
  )
}