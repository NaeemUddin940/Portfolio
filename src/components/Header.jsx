import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const showSidebar = () => {
    const side = document.getElementById("sidebar")
    side.style.display = "block";
    side.style.right = 0 

  };
  const hideSidebar = () => {
    document.getElementById("sidebar").style.display = "none";
  };
  return (
    <div>
      <header className="relative lg:flex lg:items-center lg: justify-center">
        <nav className="flex p-3 justify-between lg:w-[80%]">
          <div>
            <Link className="text-2xl font-bold" to="/">
              cyber
            </Link>
          </div>
          {/* Menu For Laptop/ Computer */}
          <div className="hidden md:flex [&_a]:px-2">
            <ul className="md:flex">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
            </ul>
          </div>
          {/* Menu for Mobile */}
          <div
            id="sidebar"
            className=" hidden top-0 -right-60 absolute transition-all duration-500 ease bg-[#FAFAFA] shadow-2xl p-4 h-screen">
            {/* Cancel Icon */}
            <svg
              className="float-right w-[40px]"
              onClick={() => hideSidebar()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#ff0000">
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <ul className="h-full w-50 p-5">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center">
            {/* Wish Icon */}
            <svg
              className=""
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
            {/* Cart Icon */}
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {/* User Icon */}
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {/* Menu Icon */}
            <svg
              onClick={() => showSidebar()}
              className="md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
