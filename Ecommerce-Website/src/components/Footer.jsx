import React from "react";
import FB from "../assets/icons/fb.png";
import Instagram from "../assets/icons/instagram.png";
import Tiktok from "../assets/icons/tiktok.png";
import Twitter from "../assets/icons/Twitter.png";

const Footer = () => {
  return (
    <div
      id="footer"
      className="max-[900px]:text-center px-10 py-10 dark:bg-[#0E1317] bg-gray-300 min-[1000px]:px-20 ">
      <div className="min-[900px]:flex min-[900px]:justify-between ">
        <div className="py-5 leading-7  min-[900px]:flex min-[900px]:flex-col min-[900px]:items-start min-[900px]:w-[40%] [&>p]:text-black dark:[&>p]:text-white">
          <h3 className="text-3xl font-bold dark:text-[#37ff00] ">cyber</h3>
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
          <div className="flex justify-center [&_img]:px-10 mt-10 cursor-pointer items-center ">
            <img src={FB} />
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Tiktok} />
          </div>
        </div>
        <div className="py-5 leading-8 min-[900px]:flex min-[900px]:flex-col min-[900px]:items-start [&>p]:text-black dark:[&>p]:text-white">
          <h5 className="text-2xl font-bold dark:text-[#37ff00]">Services</h5>
          <p>Bonus program</p>
          <p>Gift cards</p>
          <p>Credit and payment</p>
          <p>Service contracts</p>
          <p>Non-cash account</p>
          <p>Payment</p>
        </div>
        <div className="py-5 leading-8 min-[900px]:flex min-[900px]:flex-col min-[900px]:items-start [&>p]:text-black dark:[&>p]:text-white">
          <h5 className="text-2xl font-bold dark:text-[#37ff00]">
            Assistance to the buyer
          </h5>
          <p>Find an order</p>
          <p>Terms of delivery</p>
          <p>Exchange and return of goods</p>
          <p>Guarantee</p>
          <p>Frequently asked questions</p>
          <p>Terms of use of the site</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
