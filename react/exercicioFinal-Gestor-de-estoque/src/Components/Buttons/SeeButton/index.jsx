import { Link } from "react-router-dom"

export default function SeeButton({backgroundColor,color,productId}){
    return (
        <button style={{backgroundColor:backgroundColor }}>
              <Link  style={{color:color}} to={`/products/${productId}`}>
                  Ver
                </Link>
                </button>
    )
}