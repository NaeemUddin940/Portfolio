import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="max-[900px]:text-center px-10 py-10 mt-15 bg-black min-[1000px]:px-20">
      <div className="min-[900px]:flex min-[900px]:justify-between">
        <div className="py-5 leading-7 min-[900px]:flex min-[900px]:flex-col min-[900px]:items-start min-[900px]:w-[40%]">
          <h3 className="text-3xl font-bold text-white">cyber</h3>
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="py-5 leading-8 min-[900px]:flex min-[900px]:flex-col min-[900px]:items-start">
          <h5 className="text-2xl font-bold text-white">Services</h5>
          <p>Bonus program</p>
          <p>Gift cards</p>
          <p>Credit and payment</p>
          <p>Service contracts</p>
          <p>Non-cash account</p>
          <p>Payment</p>
        </div>
        <div className="py-5 leading-8 min-[900px]:flex min-[900px]:flex-col min-[900px]:items-start">
          <h5 className="text-2xl font-bold text-white">
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
