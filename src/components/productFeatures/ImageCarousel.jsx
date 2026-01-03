import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export const ImageCarousel = ({media}) => {
  return (
    <div className="w-80/100 h-[425px] flex justify-center items-center">
        <Carousel className="w-full h-3/4 flex justify-center items-center">
          <CarouselContent>
            {media.map((images, index) => (
              <CarouselItem key={index}>
                <div className="h-[230px] flex">
                  <Image
                    width={1000}
                    height={1000}
                    objectFit="contain"
                    src={images.url}
                    key={index}
                    alt="features"
                    className=""
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="mr-5 hover:bg-sky-700 hover:text-white transition-colors duration-700 ease-in-out"/>
          <CarouselPrevious className="ml-5 hover:bg-sky-700 hover:text-white transition-colors duration-700 ease-in-out"/>
        </Carousel>
    </div>
  )
}
