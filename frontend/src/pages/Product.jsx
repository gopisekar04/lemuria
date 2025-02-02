import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { productDetails } from "../utils/data"

export const Product = () => {
    const param = useParams()
    const { id } = param

    const product = productDetails.find((eachProduct) => eachProduct.id === parseInt(id));    
    

    return <div>
        <Header />
        <div className="m-5">
            
        </div>
        
    </div>
}