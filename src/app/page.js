import Image from "next/image";
import { Heading } from "@/components/navigation-bar/Heading";
import { Heading1 } from "@/components/home-page/Heading1";
import { Heading2 } from "@/components/home-page/Heading2";
import { Heading3 } from "@/components/home-page/Heading3";
import { CarouselBrands } from "@/components/home-page/CarouselBrands";
import { Heading4 } from "@/components/home-page/Heading4";

export default async function Home() {
 
  return (
    <div className="bg-white pt-10 relative">
      <div>
        <Heading1 /> 
        <Heading2 />
        <div id="how-it-works">
          <Heading3 />
        </div>
        <CarouselBrands />
        <Heading4 />
      </div>
    </div>
  );
}
