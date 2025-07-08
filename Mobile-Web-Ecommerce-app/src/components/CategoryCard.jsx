import React from "react";

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="dark:text-[#37ff00] text-black rounded-2xl">
      <div className="dark:bg-[#0E1317] bg-neutral-100 w-[163px] h-[128px] flex flex-col justify-center items-center rounded-xl shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] cursor-pointer dark:shadow-[10px_10px_20px_#313c4a,-10px_-10px_20px_#1e252e]">
        <img className="size-10 mb-2" src={icon} alt="" />
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;
