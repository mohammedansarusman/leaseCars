"use client";
import { Heading } from "./Heading";
import Link from "next/link";
import { ResponsiveNavBar } from "./ResponsiveNavBar";
import { HamburgerMenu } from "./HamburgerMenu";

export const NavigationBar = () => {
  return (
    <div
      className={`w-full bg-gray-50/98  flex flex-col items-center fixed z-50 md:px-12 lg:px-20`}
    >
      {/* car lease and menu icon */}
      <div className="w-full h-[10vh] flex items-center border-b-2 border-gray-200 ">
        {/* CAR LEASE -  Heading */}
        <div className="w-[40%] pl-4">
          <Heading />
        </div>

        <div className="w-[60%] flex items-center justify-end gap-4 pr-4">
          {/* if the screen size is greater than medium then normal navbar items will display  */}
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
          {/* Hamburger menu click  */}
          <HamburgerMenu />
        </div>
      </div>
      {/* <ResponsiveNavBar /> */}
    </div>
  );
};
