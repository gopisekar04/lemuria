import * as React from "react";

export default function ProductCard({ imageSrc, title, price }) {
  return (
    <div className="flex flex-col gap-5 max-sm:mb-5">
      <div className="w-full bg-zinc-300 h-[311px] rounded-[53px]" />
      <div className="text-xl font-light leading-normal text-black">
        {title}
      </div>
      <div className="text-xl font-light text-black">₹ {price} INR</div>
    </div>
  );
}