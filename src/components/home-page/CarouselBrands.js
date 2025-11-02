"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const logo = [
  "/carousel/alfa.webp",
  "/carousel/audi.webp",
  "/carousel/benz.webp",
  "/carousel/fiat.webp",
  "/carousel/ford.webp",
  "/carousel/geely.webp",
  "/carousel/gmc.webp",
  "/carousel/kia.webp",
  "/carousel/mg.webp",
  "/carousel/nissan.webp",
  "/carousel/suzuki.webp",
  "/carousel/tesla.webp",
];

export const CarouselBrands = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="w-full py-15 flex justify-center">
      <div
        className="w-[70%] overflow-hidden" // 👈 Embla manages scroll
        ref={emblaRef}
      >
        <div className="flex embla__container gap-3">
          {logo.map((item) => (
            <div
              className="embla__slide flex-[0_0_100px]"
              key={item}
            >
              <Image 
                src={item} width={50} height={25} alt={item}
                className="sm:h-[50px] sm:w-[50px] md:h-[75px] md:w-[75px] lg:w-[90px] lg:h-[90px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
