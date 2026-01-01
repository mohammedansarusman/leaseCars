import { carDetails } from "@/app/constant/details";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function CarDetailsPage({ params }) {
  const carsId = (await params).carsId;
  const carFeatures = carDetails.find(
    (car) => car.variant_id == Number(carsId)
  );
  console.log("carDETAILS=>", carFeatures);
  if (!carFeatures) {
    notFound();
  }
  const { brand, model, media } = carFeatures;
  console.log("media=>", media);

  return (
    <div className="pt-25 flex flex-col gap-4 w-full items-center">
      <h1>{brand + " " + model}</h1>
      <div className="w-80/100 h-[450px] bg-yellow-300 flex justify-center items-center">
        <Carousel className="w-full h-3/4 bg-blue-500 flex justify-center">
          <CarouselContent>
            {media.map((images, index) => (
              <CarouselItem key={index}>
                <div className="h-[300px] bg-green-400 flex">
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

          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </div>
  );
}
