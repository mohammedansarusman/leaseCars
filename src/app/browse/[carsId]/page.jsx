import { carDetails } from "@/app/constant/details";
import { notFound } from "next/navigation";
import { ImageCarousel } from "@/components/productFeatures/ImageCarousel";
import { Specification } from "@/components/productFeatures/Specification";
import { LocationsDropDown } from "@/components/productFeatures/LocationsDropDown";
import { SubscriptionTerm } from "@/components/productFeatures/SubscriptionTerm";
import { Benefits } from "@/components/productFeatures/Benefits";
import { Features } from "@/components/productFeatures/Features";
import { SummaryPriceDuration } from "@/components/productFeatures/SummaryPriceDuration";

export default async function CarDetailsPage({ params }) {
  const { carsId } = await params;
  const carFeatures = carDetails.find(
    (car) => car.variant_id == Number(carsId)
  );
  console.log("carDETAILS=>", carFeatures);
  if (!carFeatures) {
    notFound();
  }
  const { brand, model, media, specifications, cities, pricing, features } =
    carFeatures;

  return (
    <div className="pt-25 flex flex-col gap-4 w-full items-center">
      {/* heading -  brand and model name */}
      <div className="block text-left w-full pl-5 lg:hidden">
        <h1 className="text-2xl font-bold opacity-80">{brand + " " + model}</h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full flex flex-col items-center lg:w-1/2">
          {/* Image Carousel */}
          <ImageCarousel brand={brand} model={model} media={media} />
          {/* specifications */}
          <Specification specifications={specifications} />
        </div>
        <div className="w-full mt-5 lg:mt-0 flex flex-col gap-5 lg:w-1/2">
          <div className="hidden text-left w-full pl-5 lg:block">
            <h1 className="text-2xl font-bold opacity-80">{brand + " " + model}</h1>
          </div>
          <LocationsDropDown cities={cities} />
          {/* Subscription Term */}
          <SubscriptionTerm pricing={pricing} />
          <div className="hidden w-full md:block px-2">
            <SummaryPriceDuration />
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <Benefits />
      {/* Additional Features */}
      <Features features={features} />
    </div>
  );
}
