import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const showSidebar = () => {
    const side = document.getElementById("sidebar");
    side.style.display = "block";
    side.style.right = 0;
  };
  const hideSidebar = () => {
    document.getElementById("sidebar").style.display = "none";
  };

  const [theme, setTheme] = useState("dark");

  // Change the html tag attribute when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    const lightEl = document.querySelector(".light");
    const darkEl = document.querySelector(".dark");

    if (theme === "dark") {
      lightEl.classList.remove("hidden");
      darkEl.classList.add("hidden");
    }

    if (theme === "light") {
      lightEl.classList.add("hidden");
      darkEl.classList.remove("hidden");
    }
  }, [theme]);

  const ToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <header className="relative shadow-2xl  dark:bg-[#0E1317] bg-white lg:flex lg:items-center lg: justify-center">
        <nav className="flex p-3  items-center text-black dark:text-[#37ff00] justify-between lg:w-[80%]">
          <div>
            <Link className="text-2xl font-bold" to="/">
              Cyber
            </Link>
          </div>
          <div className="flex items-center relative">
            <input
              className="rounded-4xl dark:bg-[#1e252e]"
              type="search"
              placeholder="Search Products"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 absolute right-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          {/* Menu For Laptop/ Computer */}
          <div className="hidden md:flex text-black dark:text-[#37ff00] [&_a]:px-2">
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
            className=" hidden top-0 -right-60 absolute transition-all duration-500 ease bg-white dark:bg-[#0E1317] shadow-2xl p-4 h-screen">
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
              className="hidden sm:block"
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
              className="hidden sm:block"
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
              className="hidden sm:block"
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
            {/* Light Mode Icon/ Sun Icon */}
            <svg
              onClick={() => ToggleTheme()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 light">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
            {/* Dark Mode Icon/ Moon Icon */}
            <svg
              onClick={() => ToggleTheme()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 dark">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
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
