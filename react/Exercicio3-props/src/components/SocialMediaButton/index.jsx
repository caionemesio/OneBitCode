import styles from "./styles.module.scss"
export default function SocialMediaButton({title, link}){
  return <a href={link}><button className={styles.button}>{title}</button></a>
}