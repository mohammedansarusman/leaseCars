import { carDetails } from "@/app/constant/details";
import { notFound } from "next/navigation";
import { ImageCarousel } from "@/components/productFeatures/ImageCarousel";
import { Specification } from "@/components/productFeatures/Specification";
import { LocationsDropDown } from "@/components/productFeatures/LocationsDropDown";
import { SubscriptionTerm } from "@/components/productFeatures/SubscriptionTerm";
import { Benefits } from "@/components/productFeatures/Benefits";
export default async function CarDetailsPage({ params }) {
  const {carsId} = await params;
  const carFeatures = carDetails.find(
    (car) => car.variant_id == Number(carsId)
  );
  console.log("carDETAILS=>", carFeatures);
  if (!carFeatures) {
    notFound();
  }
  const { brand, model, media, specifications, cities, pricing } = carFeatures;
  console.log("media=>", media);

  return (
    <div className="pt-25 flex flex-col gap-4 w-full items-center">
      {/* heading -  brand and model name */}
      <div className="text-left w-full pl-5">
        <h1 className="text-2xl font-bold opacity-80">{brand + " " + model}</h1>
      </div>
      {/* Image Carousel */}
      <ImageCarousel brand={brand} model={model} media={media}/>
      {/* specifications */}
      <Specification specifications = {specifications}/>
      {/* select location */}
      <LocationsDropDown cities = {cities}/>
      {/* Subscription Term */}
      <SubscriptionTerm pricing = {pricing} />
      {/* Benefits */}
      <Benefits />


    </div>
  );
}
