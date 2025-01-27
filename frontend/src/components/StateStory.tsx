import * as React from "react";
import { useNavigate } from "react-router-dom";

export function StateStory({ title, description, alignment }) {
  const navigate = useNavigate()
  const contentOrder = alignment === "left" ? "order-1" : "order-2";
  const buttonOrder = alignment === "left" ? "order-2" : "order-1";

  return (
    <div className="flex justify-between items-center px-16 py-16 mb-10 max-md:flex-col max-md:px-8 max-md:py-12 max-md:text-center max-sm:px-5 max-sm:py-8">
      <div className={`max-w-[700px] ${contentOrder}`}>
        <div className="mb-2.5 text-5xl font-extrabold max-md:text-4xl max-sm:text-3xl">
          {title}
        </div>
        <div className="text-xl mt-4 max-sm:text-base">
          <span>{description}</span>
          {/* <a href="#" className="text-black underline" tabIndex={0}>Read More</a> */}
        </div>
      </div>
      <button onClick={() => {
        navigate("/products")
      }} className={`px-16 py-5 mx-5 text-sm font-extrabold whitespace-nowrap bg-indigo-400 rounded-[29px] max-md:w-full max-md:text-center cursor-pointer ${buttonOrder}`}>
        SHOP NOW
      </button>
    </div>
  );
}