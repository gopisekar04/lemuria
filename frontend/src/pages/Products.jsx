import { Header } from "../components/Header"
import { productDetails } from "../utils/data"
import  SearchBar  from '../components/SearchBar'
import ProductCard from "../components/ProductCard"
import { useParams } from "react-router-dom"
import { useState } from "react"



export const Products = () => {
    const [products, setProducts] = useState(productDetails)
    const params = useParams()
    const { statename } = params      
    
    const onSort = (e) => {                
        const sortedProductsList = products.slice().sort((a, b) => {
            switch(e.target.value) {
                case "high-low":
                    return b.price - a.price
                case "low-high":                    
                    return a.price - b.price
            }
        })
        setProducts(sortedProductsList)
    }
    
    return <div>
        <Header />
        <div className="m-5">
          <SearchBar onSort={onSort} />
          <h1 className="text-2xl lg:text-4xl font-bold mt-5">{statename.toUpperCase()}</h1>
          <div className="mt-5">
            <div className="flex justify-center lg: gap-5 flex-wrap">
            {products.map(eachproduct => (
                <div key={eachproduct.id} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <ProductCard                                    
                    productDetail={eachproduct}
                />
                </div>
            ))}
            </div>
            </div>
        </div>
    </div>
}