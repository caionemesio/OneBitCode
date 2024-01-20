import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form";
import { useProducts } from "../contexts/ProductsContext";

export default function UpdateProduct(){
    const {products, setProducts}=useProducts()
    const {productId}=useParams()
    const initialValues = products.find(p=>p.id===+productId)
    const navigateTo = useNavigate()
    const updateDate = new Date()
    if(!initialValues){
        return <p>Produto não encontrado :/</p>
    }
    const handleUpdate = (updatedProductData) => {

        updatedProductData.updateDate = updateDate;
        setProducts((prevProducts) => {
          const updatedProducts = prevProducts.map((product) =>
            product.id === +productId ? { ...product, ...updatedProductData } : product
          );

          alert(`Produto ${updatedProductData.name} foi atualizado!`);
          navigateTo("/products")
          return updatedProducts;
        });
      };
    return(
        <Form initialValues={initialValues} onSubmit={handleUpdate}/>
    )
}