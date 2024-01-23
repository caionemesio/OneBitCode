import { useNavigate, useParams } from "react-router-dom";
import Form from "../Components/Form";
import { useProducts } from "../contexts/ProductsContext";
import { useState } from "react";

export default function UpdateProduct(){
    const {products, setProducts,setUpdateDate}=useProducts()
    const {productId}=useParams()
    const initialValues = products.find(p=>p.id===+productId)
    const navigateTo = useNavigate()

    if(!initialValues){
        return <p>Produto não encontrado :/</p>
    }


    const handleUpdate = (updatedProductData) => {
        const newUpdateDate = new Date().toLocaleString()
        setUpdateDate(newUpdateDate)
        localStorage.setItem(`obc-update-date-${productId}`,JSON.stringify(newUpdateDate))
        updatedProductData.updateDate = newUpdateDate;
        
        setProducts((prevProducts) => {
          const updatedProducts = prevProducts.map((product) =>
            product.id === +productId ? { ...product, ...updatedProductData } : product
          );
     
          alert(`Produto ${updatedProductData.name} atualizado com sucesso`);      
          
          navigateTo("/products")
          return updatedProducts;
        });
      };
    return(
        <Form initialValues={initialValues} onSubmit={handleUpdate}/>
    )
}