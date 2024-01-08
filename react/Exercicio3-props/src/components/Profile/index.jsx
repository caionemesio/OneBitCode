import styles from "./styles.module.scss"
import Button from "../SocialMediaButton"
import { useState } from "react"



export default function Profile({avatar,name, bio, email, phone, githubUrl, linkedinUrl,twitterUrl}){
  //[valor, funcaoModificadora]
  const [followText, setFollowText] = useState("Follow")

  function handleClick(ev){
    alert('Você está seguindo agora')
    setFollowText("Following")

  }
  return (
    <div className={styles.container}>
      <img src={avatar} className={styles.avatarImg} alt={`Imagem do ${name}`} />
      <div className={styles.content}>
        
        <h2>{name}
         <button onClick={handleClick} className={styles.followButton} >{followText}</button></h2>
        <hr />
        <p>{bio}</p>
        <hr />
        <p>{phone}</p>
        <hr />
        <p>{email}</p>
        <hr />        
        <Button link={githubUrl}>GitHub</Button>
        <Button link={linkedinUrl}>LinkedIn</Button>
        <Button link={twitterUrl}>Twitter</Button>
      </div>
     
    </div>
  )
}