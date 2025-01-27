import { Header } from '../components/Header'
import { ProductCard } from '../components/ProductCard'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from "../components/PrimaryButton"

export const ShopBy = () => {
    const Navigate = useNavigate()
    const bestSellingProducts = [
        {
            imgUrl: "https://res.cloudinary.com/dshkviape/image/upload/v1737898122/lemuria/Terracotta_figurines-1_flitdd.jpg",
            name: "pottery"
        },
        {
            imgUrl: "https://res.cloudinary.com/dshkviape/image/upload/v1737898124/lemuria/Channapatna_Wooden_Toys-2_xcd8zz.jpg",
            name: "toy"
        },
        {
            imgUrl: "https://res.cloudinary.com/dshkviape/image/upload/v1737898124/lemuria/Kantha_Embroidered_Dupatta-1_ryimgo.jpg",
            name: "shawl"
        }                
    ]
    return <div>
        <Header />
        <div className='px-5'>
            <div className='lg:flex justify-center'>
                <div className='p-5 w-full lg:text-center  lg:max-w-[60%]'>
                    <h1 className="text-2xl lg:text-6xl font-bold ">Discover India’s Timeless Craftsmanship</h1>
                    <p className="mt-2 lg:text-lg">Each piece in our curated collection is lovingly handcrafted by skilled artisans who have honed their craft over generations. Our artisans are the soul of Lemuria, and we are here to amplify their voices, support their livelihoods, and share their stories with the world. When you shop with us, you’re not just buying a product – you’re supporting a living tradition.
                    </p>
                </div>
            </div>
            <h1 className='text-md lg: text-lg font-bold'>Our Best Sellers</h1>
            <div className='lg:flex justify-evenly'>
                {bestSellingProducts.map((eachProduct) => (
                    <ProductCard key={eachProduct.name} imgUrl={eachProduct.imgUrl} name={eachProduct.name} />
                ))}
            </div>
            {/* shop by state */}
            <div className='mt-5 lg:flex justify-center align-center content-center'>
                <p className='lg:w-[80%]'>
                we believe that every handcrafted item tells a story. Our platform is not just a marketplace – it’s a celebration of India’s rich artisanal heritage, where tradition meets modernity. We bring you the finest creations from artisans across the country, each piece imbued with cultural significance, artistry, and love. Every product is more than an item; it’s a connection to the past, a story passed down through generations, and a timeless expression of craftsmanship. Through storytelling and deep emotional connections, we aim to share the soul of India’s crafts with the world, one piece at a time.                
                </p>
                <div className='lg:ml-5'>
                    <PrimaryButton onClick={() => {
                        Navigate("/shop-by-states")
                    }} label={"Shop by State"} />
                </div>
                
            </div>
            {/* shop by crafts */}
            <div className='mt-5 lg:flex justify-center align-center content-center'>
                <p className='lg:w-[80%]'>
                we believe that every handcrafted item tells a story. Our platform is not just a marketplace – it’s a celebration of India’s rich artisanal heritage, where tradition meets modernity. We bring you the finest creations from artisans across the country, each piece imbued with cultural significance, artistry, and love. Every product is more than an item; it’s a connection to the past, a story passed down through generations, and a timeless expression of craftsmanship. Through storytelling and deep emotional connections, we aim to share the soul of India’s crafts with the world, one piece at a time.                
                </p>
                <div className='ml-5'>
                    <PrimaryButton onClick={() => {
                        Navigate("/shop-by-crafts")
                    }} label={"Shop by Crafts"} />
                </div>
                
            </div>
        </div>
    </div>
}