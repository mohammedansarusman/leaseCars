'use client'
import Image from "next/image";
import { Heading } from "@/components/navigation-bar/Heading";
import { Heading1 } from "@/components/home-page/Heading1";
import { Heading2 } from "@/components/home-page/Heading2";
import { Heading3 } from "@/components/home-page/Heading3";
import { CarouselBrands } from "@/components/home-page/CarouselBrands";
import { Heading4 } from "@/components/home-page/Heading4";
import { navigationStore } from "@/store/navigation";

export default function Home() {
  const bar = navigationStore(state=>state.bar);
  const setBar = navigationStore(state=>state.setBar)
  return (
    <div className="bg-white pt-10">
      {bar && <div>
        <Heading1 /> 
        <Heading2 />
        <Heading3 />
        <CarouselBrands />
        <Heading4 />
      </div>}
       
    </div>
  );
}
