import * as React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({productDetail}) {
  const { id, imgUrl, productName, price, isCustomizable, productDetails, stateOrigin } = productDetail  
  
  return (
    <Link to={`/product/${id}`}>
      <div className="flex flex-col gap-5 max-sm:mb-5">
        <div className="w-[240px] h-[300px] rounded-[53px]">
          <img src={imgUrl} alt={productName} className="h-full w-full" />
        </div>
        <div>
          <div className="text-xl font-medium leading-normal text-black">
            {productName}
          </div>
          <div className="text-md font-light text-black ">₹ {price} INR</div>
        </div>
      </div>
    </Link>
  );
}