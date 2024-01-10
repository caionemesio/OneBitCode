import { useState } from "react"
import Styles from "./styles.module.css"

export default function Form({addComments}){
  const [emailInput,setEmailInput]= useState("")
  const [commentInput,setCommentInput]=useState("")

  function handleSubmit(ev){
    ev.preventDefault()
    addComments({email:emailInput, comment:commentInput})
    setEmailInput("")
    setCommentInput("")
  }
  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email"
        value={emailInput}
        onChange={(ev)=>setEmailInput(ev.target.value)}
        required
      />

      <label htmlFor="comment">Comentário</label>
      <textarea 
      type="text"
       id="comment"
       value={commentInput}
       onChange={(ev)=>setCommentInput(ev.target.value)}
       required
        />

      <button type="submit">Enviar Comentário</button>

      <hr />
    </form>

    
  )
} 