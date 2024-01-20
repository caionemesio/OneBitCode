import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import Styles from "./styles.module.css"
export default function Form({initialValues, onSubmit}){


  const [name,setName]=useState("")
  const [quantity,setQuantity]=useState(0)
  const [price, setPrice]= useState(0)
  const [category,setCategory]=useState("toys")
  const [description,setDescription]=useState("")


  useEffect(()=>{
    if (initialValues){
      setName(initialValues.name || "");
      setQuantity(initialValues.quantity || 0);
      setPrice(initialValues.price || 0);
      setCategory(initialValues.category || "toys");
      setDescription(initialValues.description || "");
    }
  },[initialValues])

  const handleSubmit= (ev)=>{
    ev.preventDefault()
    // addProduct({name,quantity,price,category,description})
    onSubmit({
      name,
      quantity,
      price,
      category,
      description
    })
    
    setName("")
    setQuantity(0)
    setPrice(0)
    setCategory("toys")
    setDescription("")
     
  }
    
  
    

  return (
    <form onSubmit={handleSubmit} className={Styles.formClass}>
      <div className={Styles.inputs}>
      <InputForm id="name" label="Nome" type="text" value={name} setValue={setName}/>
      <InputForm id="quantity" label="Quantidade" type="number" value={quantity} setValue={setQuantity}/>
      <InputForm id="price" label="Preço" type="number" value={price} setValue={setPrice}/>
        <div className={Styles.adjustLabel}>
          <label htmlFor="category">Categoria</label>
            <select name="category"
            id="category"
            value={category}
            onChange={(ev)=>setCategoty(ev.target.value)}
              >
              <option value="toys">Brinquedos</option>
              <option value="games">Jogos</option>
            </select>
        </div>
      </div>

      <div className={Styles.description}>
        <label htmlFor="description">Descrição</label>
        <textarea type="text"
         id="description" 
         value={description} 
         onChange={(ev)=>setDescription(ev.target.value)} 
         />
      </div>
      <button type="submit" className={Styles.buttonSubmit}>Salvar</button>
    </form>
  )
}