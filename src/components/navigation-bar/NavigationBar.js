"use client";
import { MenuIcon, X } from "lucide-react";
import { Heading } from "./Heading";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLongNavBar } from "@/store/themeSlice";
import { ResponsiveNavBar } from "./ResponsiveNavBar";

export const NavigationBar = () => {
  const longBar = useSelector(store=>store.theme.longBar)
  const dispatch = useDispatch();
    useEffect(() => {
    if (longBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [longBar]);
  
  const handleClick = () => {
    dispatch(setLongNavBar(!longBar));

  };

return (
  <div className={`w-full ${longBar ? "h-screen" : "h-[10vh]"} bg-gray-100/98  flex flex-col items-center fixed z-50 md:px-12 lg:px-20`}>
    {/* car lease and menu icon */}
    <div className="w-full h-[10vh] flex items-center absolute left-0 top-0">
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
        {!longBar ? (<MenuIcon
          className="cursor-pointer text-sky-800 hover:bg-gray-200 rounded-sm md:hidden"
          onClick={handleClick}
        />) : (<X onClick={handleClick}/>)
        }
      </div>
    </div>
    <ResponsiveNavBar />
  </div>
)}
