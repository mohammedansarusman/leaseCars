'use client'
import Image from "next/image";
import { Heading } from "@/components/navigation-bar/Heading";
import { Heading1 } from "@/components/home-page/Heading1";
import { Heading2 } from "@/components/home-page/Heading2";
import { Heading3 } from "@/components/home-page/Heading3";
import { CarouselBrands } from "@/components/home-page/CarouselBrands";
import { Heading4 } from "@/components/home-page/Heading4";
import { Footer } from "@/components/home-page/Footer";
import { useSelector } from "react-redux";

export default function Home() {
  const longBar = useSelector(store=>store.theme.longBar)
  return (
    <div className="bg-white pt-10 h-screen overflow-hidden relative">
      {longBar && <div className={`w-full h-screen bg-gray-700 absolute top-0 left-0`}></div>}
      <div>
        <Heading1 /> 
        <Heading2 />
        <Heading3 />
        <CarouselBrands />
        <Heading4 />
        <Footer />
      </div>
    </div>
  );
}
