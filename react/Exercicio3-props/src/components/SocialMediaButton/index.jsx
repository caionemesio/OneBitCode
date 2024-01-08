import styles from "./styles.module.scss"
export default function SocialMediaButton({link,children}){
  return (
    <a 
      href={link} 
      target="_blank">
        <button 
            className={styles.button}>
              {children}
        </button>
    </a>
  )
}