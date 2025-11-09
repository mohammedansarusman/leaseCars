"use client";
import Image from "next/image";
// import { data } from "@/app/constant/list";
import { carDetails } from "@/app/constant/details";
import { useSelector } from "react-redux";

export const CarsList = () => {
  const carsData = useSelector((store) => store.car.carsData);
  const carModel = useSelector((store) => store.car.carModel);
  console.log(carsData);
  const filteredData = carsData.filter((item) => item.model.toLowerCase().includes(carModel.toLowerCase()));

  
  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-2">
      {filteredData.map((item) => (
        <div
          className="w-[220px] h-[300px] lg:w-[250px] xl:w-[270] rounded-lg flex flex-col items-center bg-white"
          key={item.id}
        >
          <div className="h-1/2 w-full flex justify-center items-center">
            <Image
              src={item.img}
              width={200}
              height={300}
              objectFit="contain"
              alt="car-pic"
              className="lg:w-[250px]"
            />
          </div>

          <div className="h-1/2 w-full  px-2 py-10 flex flex-col items-start gap-2 relative">
            {item.discount_value > 0 && (
              <div className="bg-orange-400 w-[100px] h-5 rounded-lg opacity-90 absolute left-0 top-2 ml-2 flex justify-center items-center ">
                <p className="text-xs">{`AED ${item.discount_value} OFF`}</p>
              </div>
            )}
            <div className="w-full">
              <p className="text-sm w-full truncate">{item.model}</p>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">
                  {(item.listing_price - item.discount_value).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "AED",
                      minimumFractionDigits: 0,
                    }
                  )}
                </p>
                <p className="hidden lg:block text-xs">Per month</p>
                {item.discount_value > 0 && (
                  <p className="text-xs line-through text-orange-400">
                    {item.listing_price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "AED",
                      minimumFractionDigits: 0,
                    })}
                  </p>
                )}
              </div>
              <p className="text-xs lg:hidden">per month</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
