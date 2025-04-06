import React from "react";
import image from "../assets/images/Iphone Image.png";
import Phones from "../assets/images/Phones.png";
import SmartWatches from "../assets/images/Smart Watches.png";
import Cameras from "../assets/images/Cameras.png";
import Headphones from "../assets/images/Headphones.png";
import Computers from "../assets/images/Computers.png";
import Gaming from "../assets/images/Gaming.png";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  return (
    <>
      <div className="h-[calc(100vh-60px)] overflow-hidden bg-linear-to-t from-[#211C24] to-[#211C24] px-10 lg:grid lg:grid-cols-2 xl:px-[10rem]">
        <div className="flex flex-col items-center text-center pt-10 space-y-4 lg:flex lg:justify-center lg:pt-0 lg:items-start">
          <h3 className="text-[var(--small-text-color)] font-semibold text-2xl">
            Pro.Beyond
          </h3>
          <h1 className="text-6xl text-white font-thin">
            <span className="block md:inline tracking-widest">Iphone 14</span>
            <span className="font-bold"> Pro</span>
          </h1>

          <p className="text-[var(--small-text-color)]">
            Created to change everything for the better. For everyone
          </p>
          <button className="border-2 border-white px-4 py-2 text-white rounded-xl">
            <a href="#">Shop Now</a>
          </button>
        </div>
        <div className="flex justify-center">
          <img className=" w-[343px] md:w-[406px]" src={image} alt="" />
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-10 px-3 flex flex-col items-center">
        <h3 className="pb-10 text-3xl">Browse By Category</h3>
        <div className="grid grid-cols-2 gap-5">
          <CategoryCard icon={Phones} title="Phone" />
          <CategoryCard icon={SmartWatches} title="Smart watches" />
          <CategoryCard icon={Cameras} title="Cameras" />
          <CategoryCard icon={Headphones} title="Headphones" />
          <CategoryCard icon={Computers} title="Computers" />
          <CategoryCard icon={Gaming} title="Gaming" />
        </div>
      </div>
      
    </>
  );
};

export default Home;
