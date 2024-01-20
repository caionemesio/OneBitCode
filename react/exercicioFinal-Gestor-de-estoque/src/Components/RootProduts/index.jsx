import { Link, Outlet, useLocation } from "react-router-dom";
import Styles from './styles.module.css'
export default function RootProducts(){
  const location= useLocation()
  return(
    <section className={Styles.contentPage}>
      <h2 className={Styles.Title}>Stock Items</h2>
      <div className={Styles.links}>
      <Link to="/products"  className={location.pathname ==="/products" ? Styles.inPage: ""}>Todos os itens</Link>
      <Link to="/products/newProduct" className={location.pathname ==="/products/newProduct" ? Styles.inPage: ""}>Novo Item</Link>
      </div>
      <hr />
      <div>
        <Outlet/>
      </div>
    </section>
  )
}