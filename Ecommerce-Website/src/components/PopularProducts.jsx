import React from "react";

const PopularProducts = ({ img, title, des }) => {
  return (
    <div>
      <div className="h-[433px] w-[250px] bg-[var(--product-color)] rounded-xl flex flex-col shadow-[10px_10px_20px_#c5c5c5,-10px_-10px_20px_#ffffff] dark:text-[#37ff00] dark:bg-[#0E1317] dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e]">
        <div className="h-60 w-60">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="px-5">
          <h5 className="text-3xl font-light mb-3 line-clamp-1">{title}</h5>
          <p className="text-[#909090] text-[.8rem] mb-3 line-clamp-3">{des}</p>
          <div>
            <button className="border-2 border-black px-4 py-2 text-black rounded">
              <a href="#">Shop Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
