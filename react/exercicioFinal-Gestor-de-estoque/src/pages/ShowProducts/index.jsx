import Styles from "./styles.module.css"
export default function ShowProducts(){
  return(
    <div className={Styles.container}>
      <div className={Styles.header}>
        <p>ID</p>
        <p>Nome</p>
        <p>Em Estoque</p>
        <p>Categoria</p>
        <p>Ações</p>
      </div>
      <div className={Styles.content}>
        //Onde irei querer usar os dados de todos os produtos cadastrados
        <p>000</p>
        <p>oi</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
      </div>
    </div>
  )
}