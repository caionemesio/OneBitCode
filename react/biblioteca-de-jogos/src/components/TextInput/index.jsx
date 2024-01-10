export default function TextInput({id,label,value,setValue}){

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
          name={id}
          id={id}
          value={value}
          onChange={(e)=> setValue(e.target.value)} 
      />
    </div>
  )
}