import { NavigationBar } from "./NavigationBar"
import { useState } from "react"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return <>
        <div className="flex justify-between items-center content-center px-5 py-0 w-full max-w-[1354px] max-md:flex-wrap max-md:gap-5 mt-5 ">        
            <img
                src="https://res.cloudinary.com/dshkviape/image/upload/v1737872874/lemuria/logo-2_1_oons2p.png"
                alt="logo"
                className="h-[50px] w-[100px] sm:h-[60px] sm:w-[120px] md:h-[80px] md:w-[160px] lg:h-[95px] lg:w-[200px]"
            />
            <div className="hidden lg:flex lg:w-full justify-center">
                <NavigationBar />   
            </div>
            
            <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
                {menuOpen ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                    </svg>
                )}
                </button>
            </div>        
        </div>
        {menuOpen ? <NavigationBar /> : null}
    </>
}