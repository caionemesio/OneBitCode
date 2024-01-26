import Styles from "../styles.module.css"
export default function InputForm({id,label,type,value,setValue}){
  return(
    <div className={ Styles.adjustLabel}>
      <label htmlFor={id}>{label}</label>
      <input
       type={type} 
       value={value}
       onChange={(ev)=>setValue(ev.target.value)}
       required
       />
    </div>
  )
}