import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";

export default function App(){
  
  return (
    <ProductsProvider >
      <RouterProvider router={router}/>
    </ProductsProvider>
    
  )
}