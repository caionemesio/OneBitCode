
import styles from './styles.module.css'

export default function RenderComments({email,comment,date,time}){
  
    return(
      <div className={styles.container}>
        <h3>{email}</h3>
        <p>Em {date}, {time}</p>
        <p>{comment}</p>
      </div>
    )
}