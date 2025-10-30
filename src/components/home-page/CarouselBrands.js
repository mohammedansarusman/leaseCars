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
    <div className="w-full bg-red-300 py-10 flex justify-center">
      <div
        className="w-[70%] overflow-hidden" // 👈 Embla manages scroll
        ref={emblaRef}
      >
        <div className="flex embla__container gap-3">
          {logo.map((item) => (
            <div
              className="embla__slide flex-[0_0_100px] h-[100px] relative bg-fuchsia-500"
              key={item}
            >
              <Image src={item} fill objectFit="contain" alt={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
