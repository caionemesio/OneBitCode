import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Products from "./Components/RootProduts";
import NewProduct from "./pages/newProduct";
import ShowProducts from "./pages/ShowProducts/index.jsx";

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
          // {
          //   path:"/products/:productId",
          //   element:<Product/>,
          //   children: {
          //     path:"/products/:updateProduct/edit",
          //     element:<updateProduct/>
          //   }         
          // }
        ]
      }
    ]
  }
])
export default router