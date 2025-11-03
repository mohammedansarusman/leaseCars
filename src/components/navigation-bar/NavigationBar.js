"use client";
import { MenuIcon } from "lucide-react";
import { Heading } from "./Heading";
import Link from "next/link";
import { useState } from "react";

export const NavigationBar = () => {
  const {long, setLong} = useState(false)
  
  const handleClick = () => {
    console.log("clicked")
  };

return (
  <div className={`w-full h-[10vh] bg-gray-100/98  flex items-center fixed md:px-12 lg:px-20`}>
    {/* car lease and menu icon */}
    <div className="w-full flex relative">
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
