"use client";
import { MenuIcon } from "lucide-react";
import { Heading } from "./Heading";
import Link from "next/link";
import { navigationStore } from "@/store/navigation";

export const NavigationBar = () => {
  const bar = navigationStore((state) => state.bar);
  const setBar = navigationStore((state) => state.setBar);
  const handleClick = () => {
    if (bar === false) {
      setBar(true);
    } else {
      setBar(false);
    }
  };

return (
  <div className={`w-full h-[10vh]  bg-gray-100/98  flex items-center fixed md:px-12 lg:px-20`}>
    <div className="w-full flex relative">
      {/* <div className="absolute w-full h-[80vh] top-12 right-0 bg-yellow-500">Hello</div> */}
      <div className="w-[40%] pl-4">
        <Heading />
      </div>
      <div className="w-[60%] flex items-center justify-end gap-4 pr-4">
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            <Link href="/browse">
              <li>Browse Cars</li>
            </Link>
            <li>How it works</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </div>
        <MenuIcon
          className="cursor-pointer text-sky-800 hover:bg-gray-200 rounded-sm md:hidden"
          onClick={handleClick}
        />
      </div>
    </div>
  </div>
)}
