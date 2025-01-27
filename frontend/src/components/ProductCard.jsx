import * as React from "react";

export function ProductCard({ imgUrl, name }) {
  return (
    <div className="h-[415 px] rounded-[53px] w-[352px] max-md:w-[300px] max-sm:w-[90%] flex flex-col items-center p-4">
      <img
        src={imgUrl}
        alt={name}
        className="h-[250px] w-[250px] object-contain max-md:h-[200px] max-md:w-[200px] max-sm:h-[150px] max-sm:w-[150px]"
      />
    </div>
  );
}
