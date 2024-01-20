import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Styles from "./Styles.module.css"

export default function RootLayout(){
  return(
    <div className={Styles.container}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>

  )
}