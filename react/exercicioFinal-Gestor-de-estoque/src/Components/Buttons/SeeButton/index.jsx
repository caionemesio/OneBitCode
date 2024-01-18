import { Link } from "react-router-dom"

export default function SeeButton({color,productId}){
    return (
        <button style={{backgroundColor:color}}>
              <Link to={`/products/${productId}`}>
                  Ver
                </Link>
                </button>
    )
}