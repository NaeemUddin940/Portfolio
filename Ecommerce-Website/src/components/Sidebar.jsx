import React from "react";
import popularproducts from "../assets/images/product/Popular Products.png";
import IpadPro from "../assets/images/product/Ipad Pro.png";
import SamsungGalaxy from "../assets/images/product/Samsung galaxy.png";
import MackbookPro from "../assets/images/product/Mackbook Pro.png";

const Sidebar = () => {
  return (
    <>
      <div
        id="indicators-carousel"
        className="relative w-full h-150 py-10 lg:hidden dark:bg-[#0e1317] bg-[#F9F9F9]"
        data-carousel="static">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-150 overflow-hidden rounded-lg  md:h-150">
          {/* <!-- Item 1 --> */}
          <div
            className=" duration-700 ease-in-out"
            data-carousel-item="active">
            <img
              src={popularproducts}
              alt=""
              className="absolute block object-contain h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div className=" duration-700 ease-in-out" data-carousel-item>
            <img
              src={IpadPro}
              alt=""
              className="absolute object-contain h-full w-full block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={SamsungGalaxy}
              alt=""
              className="absolute block object-contain h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={MackbookPro}
              alt=""
              className="absolute block object-contain h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full "
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-white/50 group-hover:bg-white/50 dark:group-hover:bg-[#37ff00] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-white/50  group-hover:bg-white/50 dark:group-hover:bg-[#37ff00] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
