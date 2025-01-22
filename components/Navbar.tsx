"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isScrollTop, setIsScrollTop] = useState(window.scrollY === 0);
  const [isFocusSearch, setIsFocusSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const refinputSearch = useRef<HTMLInputElement>(null);

  const onScroll = useCallback(() => {
    setIsScrollTop(window.scrollY === 0);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <nav
      className={`fixed w-full z-10 p-2 border duration-300 ${
        isScrollTop ? "bg-transparent border-b-slate-400" : "shadow-lg"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex items-center flex-auto pr-[14px]  min-[610px]:flex-[1_0_auto] min-[610px]:pr-7 min-[610px]:min-w-[232px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-9 h-9 mx-2 rounded-full hover:bg-[#cbd5e1] duration-300 text-[#5f6368]`}
          >
            <div className={`duration-300 ${isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"}`}>
              {isOpen ? <i className="bi bi-x text-2xl"></i> : <i className="bi bi-list text-2xl"></i>}
            </div>
          </button>
          <a className="text-2xl font-medium font-sans text-[#5f6368]">Note</a>
        </div>
        <div className="flex flex-[1_1_100%] justify-start">
          <div className="flex flex-auto">
            <form
              className={`flex relative items-center rounded-lg px-2 duration-300 mx-0 max-w-[720px] ${
                isFocusSearch ? "bg-[#fff] shadow-search" : "bg-[#f2f3f4]"
              }`}
            >
              <div className="mx-1 mr-2">
                <button className="rounded-full duration-300 hover:bg-[#cbd5e1] text-[#5f6368]">
                  <i className="icon w-9 h-9 text-base bi bi-search"></i>
                </button>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="h-[46px] py-[11px] bg-transparent outline-none text-[16px]"
                  placeholder="ค้นหา"
                  onFocus={() => setIsFocusSearch(true)}
                  onBlur={() => setIsFocusSearch(false)}
                  ref={refinputSearch}
                />
              </div>
            </form>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
