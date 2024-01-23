import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/index.jsx";
import Home from "./pages/Home/index.jsx";
import Products from "./Components/RootProduts";
import NewProduct from "./pages/newProduct";
import ShowProducts from "./pages/ShowProducts/index.jsx";
import Product from "./pages/Product/index.jsx"
import UpdateProduct from "./pages/UpdateProduct.jsx";

const router = createBrowserRouter([
  {
        path:"/",
        element:<RootLayout/>,
        children:[{
          index:true,
          element:<Home/>
        },{
            path:"/products",
            element:<Products/>,
            children:[{
              index:true,
              element:<ShowProducts/>
            },{
            path:"/products/newProduct",
            element: <NewProduct/>
          },
          {
            path:"/products/:productId",
            element:<Product/>
          },
          {
            path:"/products/:productId/update",
            element:<UpdateProduct/>
          }
        ]
      }
    ]
  }
])
export default router