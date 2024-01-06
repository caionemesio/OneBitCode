import styles from "./styles.module.scss"
import Button from "../SocialMediaButton"
export default function Profile({avatar,name, bio, email, phone, githubUrl, linkedinUrl,twitterUrl}){
  return (
    <div className={styles.container}>
      <img src={avatar} className={styles.avatarImg} alt={`Imagem do ${name}`} />
      <div className={styles.content}>
        <h2>{name}</h2>
        <hr />
        <p>{bio}</p>
        <hr />
        <p>{phone}</p>
        <hr />
        <p>{email}</p>
        <hr />        
        <Button link={githubUrl} title="GitHub"/>
        <Button link={linkedinUrl} title="LinkedIn"/>
        <Button link={twitterUrl} title="Twitter"/>
      </div>
      
    </div>
  )
}