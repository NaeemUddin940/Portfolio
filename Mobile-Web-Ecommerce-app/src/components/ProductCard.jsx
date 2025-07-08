import React from "react";

const ProductCard = ({ icon, title, price }) => {
  return (
    <div className="h-[320px] w-[193px] rounded-xl shadow-[10px_10px_20px_#c5c5c5,-10px_-10px_20px_#ffffff] bg-[#F6F6F6] dark:bg-[#0E1317] dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e] flex flex-col items-end p-5 cursor-pointer">
      <svg
        className="p-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      <div className="flex flex-col justify-center items-center">
        <img src={icon} />
        <p className="line-clamp-2">{title}</p>
        <p className="text-xl font-bold mb-3">{price}</p>
        <button className="px-4 py-2 border dark:border-[#37ff00] dark:text-[#37ff00] text-white bg-black rounded-xl">
          <a href="#">Shop Now</a>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
