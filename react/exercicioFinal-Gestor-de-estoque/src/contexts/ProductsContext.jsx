import { createContext, useState, useContext  } from "react";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const storedProduct = localStorage.getItem("obc-product-lib");
    if (!storedProduct) return [];
    return JSON.parse(storedProduct);
  });

  const addProduct = ({ name, quantity, price, category, description }) => {
    const id = Math.floor(Math.random() * 1000000)
    const date= new Date()
    const product = { id, name, quantity, price, category, description, date }
    setProducts(state => {
      const newState = [...state, product]
      localStorage.setItem("obc-product-lib", JSON.stringify(newState))
      alert(`Produto ${name} adicionado com sucesso`)
      return newState
      
    })
  }
  return (
    <ProductsContext.Provider value={{ products,setProducts, addProduct }}>
      {children}
    </ProductsContext.Provider>
  )

}

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};