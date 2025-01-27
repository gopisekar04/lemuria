import * as React from "react";
import { Header } from '../components/Header'
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/PrimaryButton";

export default function Home(){
  const navigate = useNavigate()
  return (
    <div className="bg-[#F6F6EE]">
    <Header />
    <div className="mt-5">
      <div className="lg:flex justify-evenly content-center w-full p-5 w-full ">
        <div className="lg:w-[50%]">
          <div >
            <h1 className="text-2xl lg:text-6xl font-bold ">Welcome to Lemuria – Where Craft Meets Heart</h1>
            <p className="mt-2 lg:text-lg">At Lemuria, we believe that every handcrafted piece tells a story, and every product is a celebration of India’s diverse artistic heritage. Our platform is more than a marketplace – it’s a journey through time, where the ancient and the modern meet to create something truly special. From the vibrant paintings of Tamil Nadu to the intricate woodwork of Karnataka, we bring you the finest handcrafted treasures from across India.
            </p>
          </div>
          <div>
            <PrimaryButton onClick={()=>{
              navigate("/shop-by")
            }} label={"Shop now"} />
          </div>
        </div>
        <div className="lg:w-[40%] flex justify-center content-center align-center" >
          <img src="https://res.cloudinary.com/dshkviape/image/upload/v1737898125/lemuria/Mysore_Sandalwood_Carvings-1_u8fkpg.jpg" className="mt-5 h-70" alt="suggestions" />
        </div>           
      </div>
      {/*  */}
      <div className="lg:flex justify-evenly content-center w-full p-5 w-full ">
        <div className="lg:w-[50%]">
          <div >
            <h1 className="text-2xl lg:text-6xl font-bold ">Start Your Journey with Lemuria Today</h1>
            <p className="mt-2 lg:text-lg">Step into a world of stories, craftsmanship, and culture. Explore our collection, connect with artisans, and find the perfect handcrafted piece that speaks to your heart. Welcome to Lemuria – where every craft has a story.
            </p>
          </div>
          <div>
            <button className="bg-[#6A64A2] text-white p-3 rounded mt-5 w-40 cursor-pointer">Learn now</button>
          </div>
        </div>
        <div className="lg:w-[40%] flex justify-center content-center align-center" >
          <img src="https://res.cloudinary.com/dshkviape/image/upload/v1737898723/lemuria/learn-crafting_dduyf8.jpg" className="mt-5 h-70" alt="suggestions" />
        </div>           
      </div>
    </div>
    </div>
  );
};
