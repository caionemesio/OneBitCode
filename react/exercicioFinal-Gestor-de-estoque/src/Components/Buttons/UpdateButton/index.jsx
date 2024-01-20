import { Link } from "react-router-dom"

export default function UpdateButton({productId}){

    return (
        <button style={{backgroundColor:"white"}}>
            <Link to={`/products/${productId}/update`} style={{ color:"black"}}>
                Atualizar    
            </Link>                  
        </button>
    )
}