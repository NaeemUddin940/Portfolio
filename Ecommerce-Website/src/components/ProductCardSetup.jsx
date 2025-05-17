import React, {useState} from "react";
import ProductCard from "./ProductCard";
import ip14 from "../assets/images/product/Iphone 14 pro 1.png";
import bmpcc from "../assets/images/product/bmpcc.png";
import AppleWatch from "../assets/images/product/Apple Watch.png";
import Airpodmax from "../assets/images/product/Airpod Max.png";
import SamsungGalaxy from "../assets/images/product/Samsung galaxy Watch.png";
import SamsungGalaxyZFold from "../assets/images/product/Samsung z Fold.png";
import SamsungGalaxyBuds from "../assets/images/product/Galaxy Buds FE.png";
import Appleipad from "../assets/images/product/Apple ipad 8.png";

const ProductCardSetup = () => {
     const [activeTab, setActiveTab] = useState("New");
  return (
    <>
      {/* Product Cards Tab */}
      <div className="py-10 flex gap-10 text-black dark:text-white dark:bg-[#0E1317] justify-center">
        <button
          onClick={() => setActiveTab("New")}
          className={`pb-2 cursor-pointer ${
            activeTab === "New" ? "border-b-2 border-black dark:border-[#37ff00]" : ""
          }`}>
          New Arrival
        </button>
        <button
          id="bestseller"
          onClick={() => setActiveTab("Bestseller")}
          className={`pb-2 cursor-pointer ${
            activeTab === "Bestseller" ? "border-b-2 border-black dark:border-[#37ff00]" : ""
          }`}>
          Bestseller
        </button>
        <button
          onClick={() => setActiveTab("Featured")}
          className={`pb-2 cursor-pointer ${
            activeTab === "Featured" ? "border-b-2 border-black dark:border-[#37ff00]" : ""
          }`}>
          Featured Product
        </button>
      </div>

      <div className="flex justify-center items-center dark:bg-[#0E1317] dark:text-[#37ff00] w-full">
        <div className="grid grid-cols-2 gap-10 min-[900px]:grid-cols-4 lg:px-10 mb-10">
          {activeTab === "New" && (
            <ProductCard
              icon={ip14}
              title="Apple iPhone 14 Pro Max 128GB Deep Purple"
              price="$900"
            />
          )}
          {activeTab === "New" && (
            <ProductCard
              icon={bmpcc}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          )}
          {activeTab === "New" && (
            <ProductCard
              icon={AppleWatch}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          )}
          {activeTab === "New" && (
            <ProductCard
              icon={Airpodmax}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          )}
          {activeTab === "New" && (
            <ProductCard
              icon={SamsungGalaxy}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          )}
          {activeTab === "New" && (
            <ProductCard
              icon={SamsungGalaxyZFold}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          )}
          {activeTab === "New" && (
            <ProductCard
              icon={SamsungGalaxyBuds}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          )}
          {activeTab === "New" && (
            <ProductCard
              icon={Appleipad}
              title="Blackmagic Pocket Cinema Camera 6k"
              price="$2535"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCardSetup