import { Link } from "react-router-dom";
import styles from "./styles.module.css"
export default function Header(){
  return (
    <header className={styles.header}>
      <h2>React Stock</h2>
      <nav className={styles.link}>
        <Link to="/">Início</Link>
        <Link to="/products">Itens</Link>
      </nav>
    </header>
  )
}