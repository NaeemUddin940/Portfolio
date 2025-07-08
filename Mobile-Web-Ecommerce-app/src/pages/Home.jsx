import React, { useState } from "react";
import image from "../assets/images/Iphone Image.png";
import Phones from "../assets/images/Phones.png"
import SmartWatche from "../assets/images/Smart Watch.png";
import Cameras from "../assets/images/Cameras.png";
import Headphones from "../assets/images/Headphones.png";
import Computers from "../assets/images/Computer.png";
import Gaming from "../assets/images/Gaming.png";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import ProductCardSetup from "../components/ProductCardSetup";
import Sidebar from "../components/sidebar";
import PopularProducts from "../components/popularProducts";
import popularproducts from "../assets/images/product/Popular Products.png";
import IpadPro from "../assets/images/product/Ipad Pro.png";
import Iphone14Pro from "../assets/images/product/Iphone 14 pro 1 (1).png";
import Airpodmax from "../assets/images/product/Airpod Max.png";
import AppleWatch from "../assets/images/product/Apple Watch.png";
import Iphone14Pro2 from "../assets/images/product/Iphone 14 pro 1 (2).png";
import SamsungGalaxy from "../assets/images/product/Samsung galaxy.png";
import MackbookPro from "../assets/images/product/Mackbook Pro.png";
import ProductCard from "../components/ProductCard";



const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-[calc(100vh-60px)] overflow-hidden dark:bg-linear-to-t from-[#161B21] to-[#151A20] px-10 lg:grid lg:grid-cols-2 xl:px-[10rem]">
        <div className="flex flex-col items-center text-center pt-10 space-y-4 lg:flex lg:justify-center lg:pt-0 lg:items-start">
          <h3 className="text-[var(--small-text-color)] font-semibold text-2xl">
            Pro.Beyond
          </h3>
          <h1 className="text-6xl text-white font-extralight">
            <span className="block md:inline tracking-widest text-black dark:text-white">Iphone 14</span>
            <span className="font-bold text-neutral-700 dark:text-[#37ff00]"> Pro</span>
          </h1>

          <p className="text-[var(--small-text-color)]">
            Created to change everything for the better. For everyone
          </p>
          <button className="border-2 text-black border-black dark:border-[#37ff00] px-4 py-2 dark:text-[#37ff00] rounded-xl">
            <a href="#">Shop Now</a>
          </button>
        </div>
        <div className="flex justify-center">
          <img className=" w-[343px] md:w-[406px]" src={image} alt="" />
        </div>
      </div>

      {/* Products By Category */}
      <div className="dark:bg-[#0E1317] bg-white py-10 px-3 flex flex-col items-center">
        <h3 className="pb-10 text-4xl text-black font-bold dark:text-white">Browse By Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-6">
          <CategoryCard icon={Phones} title="Phone" />
          <CategoryCard icon={SmartWatche} title="Smart watches" />
          <CategoryCard icon={Cameras} title="Cameras" />
          <CategoryCard icon={Headphones} title="Headphones" />
          <CategoryCard icon={Computers} title="Computers" />
          <CategoryCard icon={Gaming} title="Gaming" />
        </div>
      </div>
      <ProductCardSetup />
      <Sidebar />
      <hr className="hidden lg:py-5 lg:block dark:text-[#37ff00] dark:bg-[#0E1317]" />
      <div className="lg:flex hidden dark:text-[#37ff00] dark:bg-[#0E1317] lg:gap-5 lg:p-5 lg:justify-center">
        <PopularProducts
          img={popularproducts}
          title="Popular Product"
          des="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        />
        <PopularProducts
          img={IpadPro}
          title="ipad Pro"
          des="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        />
        <PopularProducts
          img={SamsungGalaxy}
          title="Samsung Galaxy"
          des="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        />
        <PopularProducts
          img={MackbookPro}
          title="Macbook Pro"
          des="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
        />
      </div>
      <div className="flex flex-col items-center px-10 pb-15 dark:bg-[#0E1317]">
        <div className="flex justify-center flex-col">
          <h4 className="text-4xl my-10 dark:text-white">Discounts up to -50%</h4>
          <div className="grid grid-cols-2 gap-10 min-[900px]:grid-cols-4 dark:text-[#37ff00]">
            <ProductCard
              icon={Iphone14Pro}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
            <ProductCard
              icon={Airpodmax}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
            <ProductCard
              icon={AppleWatch}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
            <ProductCard
              icon={Iphone14Pro2}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          </div>
        </div>
      </div>
      {/* Big Summer Sale */}
      <div className="banner pt-15 flex flex-col dark:bg-[#0E1317] justify-center items-center px-10">
        <h3 className="text-5xl font-extralight text-white mb-5 text-center">
          <span className="block dark:text-[#37ff00]">Big Summer</span>
          <span className="font-bold dark:text-[#37ff00]">Sale</span>
        </h3>
        <p className="text-[#787878] mb-5 text-center dark:text-[#79e95a]">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="border-2 border-white dark:border-[#37ff00] px-10 py-3 text-white dark:text-[#37ff00] rounded-xl">
          <a href="#">Shop Now</a>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
