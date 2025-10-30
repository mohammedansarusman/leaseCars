import Image from "next/image";
import { Heading } from "@/components/navigation-bar/Heading";
import { Heading1 } from "@/components/home-page/Heading1";
import { Heading2 } from "@/components/home-page/Heading2";
import { Heading3 } from "@/components/home-page/Heading3";
import { CarouselBrands } from "@/components/home-page/CarouselBrands";

export default function Home() {
  return (
    <div className="bg-white">
       <Heading1 /> 
       <Heading2 />
       <Heading3 />
       <CarouselBrands />
    </div>
  );
}
