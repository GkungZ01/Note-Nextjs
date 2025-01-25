"use client";

import { useCallback, useEffect, useState } from "react";

export default function Navbar() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const [isDarkTheme, setDarkTheme] = useState(false);
  // const [isFocusSearch, setIsFocusSearch] = useState(false);
  // const refinputSearch = useRef<HTMLInputElement>(null);
  // const [isOpen, setIsOpen] = useState(false);

  const onScroll = useCallback(() => {
    setIsScrollTop(window.scrollY === 0);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    window.addEventListener("DOMContentLoaded", ()=>{
      onScroll();
      console.log("DOMContentLoaded");
    });
  }, [onScroll]);

  return (
    <>
      <nav
        className={` w-full z-10 p-2 border-b duration-300 bg-transparent ${
          isScrollTop ? "border-b-slate-400" : "shadow-lg"
        }`}
      >
        <div className="flex justify-between">
          <div className="flex items-center flex-auto pr-[14px] min-[610px]:flex-[1_0_auto] min-[610px]:pr-7 min-[610px]:min-w-[232px]">
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-9 h-9 mx-2 rounded-full hover:bg-[#cbd5e1] duration-300 text-[#5f6368] `}
            >
              <div
                className={`duration-300 ${
                  isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                } flex items-center justify-center`}
              >
                {isOpen ? <i className="fa-regular fa-xmark text-xl"></i> : <i className="fa-regular fa-bars text-xl"></i>}
              </div>
            </button> */}
            <a className="text-2xl font-medium font-sans dark:text-stone-200 duration-300 text-[#5f6368]">Note</a>
          </div>
          <div className="flex flex-wrap-reverse items-center justify-start">
            <div className="w-12 h-12 flex items-center justify-center">
              <button
                onClick={() => setDarkTheme(!isDarkTheme)}
                className="flex items-center justify-center rounded-full w-9 h-9 duration-300 text-[#5f6368] p-1 hover:bg-[#cbd5e1] dark:text-stone-200 dark:hover:text-stone-800"
              >
                {isDarkTheme ? (
                  <i className="icon text-xl fa-regular fa-sun"></i>
                ) : (
                  <i className="icon text-xl fa-regular fa-moon"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}