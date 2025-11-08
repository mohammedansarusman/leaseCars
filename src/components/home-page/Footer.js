import {
  CopyrightIcon,
  Facebook,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  LinkedinIcon,
} from "lucide-react";
import React from "react";
import { FooterItems } from "./FooterItems";

export const Footer = () => {
  return (
    <div className="w-full py-10 px-10 flex flex-col bg-white text-gray-600 gap-4">
      <div className="flex flex-col gap-6 md:flex md:flex-row md:gap-30 md:py-10">
        <div className="space-y-2">
          <h1 className="font-semibold">Product</h1>
          <div className="font-thin space-y-2 text-sm">
            <FooterItems content = "Browse Cars" />
            <FooterItems content = "Car Lease for Business" />
            <FooterItems content = "EVs" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold">Company</h1>
          <div className="font-thin space-y-2 text-sm">
            <FooterItems content = "Blogs" />
            <FooterItems content = "FAQs" />
            <FooterItems content = "Contact Us" />
          </div>
        </div>
        <div className="space-y-2"> 
          <h1 className="font-semibold">Legal</h1>
          <div className="space-y-2 text-sm">
            <FooterItems content = "Privacy Policy" />
            <FooterItems content = "Terms & Conditions" />
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-300"></div>
      <div className="text-sky-700 flex items-center gap-4">
        <div className="w-10 h-10  bg-sky-700 text-white flex items-center justify-center">
          <FacebookIcon />
        </div>
        <div className="w-10 h-10  bg-sky-700 text-white flex items-center justify-center">
          <LinkedinIcon />
        </div>
        <div className="w-10 h-10  bg-sky-700 text-white flex items-center justify-center">
          <InstagramIcon />
        </div>
      </div>
      <div className="flex gap-1">
        <CopyrightIcon />
        <p>Car Lease Holding LTD</p>
      </div>
    </div>
  );
};
