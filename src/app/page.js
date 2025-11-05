'use client'
import Image from "next/image";
import { Heading } from "@/components/navigation-bar/Heading";
import { Heading1 } from "@/components/home-page/Heading1";
import { Heading2 } from "@/components/home-page/Heading2";
import { Heading3 } from "@/components/home-page/Heading3";
import { CarouselBrands } from "@/components/home-page/CarouselBrands";
import { Heading4 } from "@/components/home-page/Heading4";
import { Footer } from "@/components/home-page/Footer";

export default function Home() {
  return (
    <div className="bg-white pt-10">
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
