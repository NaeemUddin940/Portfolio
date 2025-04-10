import React from "react";

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="bg-[var(--category-color)] w-[163px] h-[128px] flex flex-col justify-center items-center rounded-xl cursor-pointer shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]">
        <img className="w-15" src={icon} alt="" />
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;
