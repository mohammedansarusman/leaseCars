import Image from "next/image";

export const CarsCard = ({data}) => {
    console.log("item=>",data)  
    const {img,discount_value,model,listing_price} = data;
  return (
    <div
      className="w-[220px] h-[300px] lg:w-[250px] xl:w-[270] rounded-lg flex flex-col items-center border-2 border-blue-50"
    >
      <div className="h-1/2 w-full flex justify-center items-center">
        <Image
          src={img}
          width={200}
          height={300}
          objectFit="contain"
          alt="car-pic"
          className="lg:w-[250px]"
        />
      </div>

      <div className="h-1/2 w-full  px-2 py-10 flex flex-col items-start gap-2 relative">
        {discount_value > 0 && (
          <div className="bg-orange-400 w-[100px] h-5 rounded-lg opacity-90 absolute left-0 top-2 ml-2 flex justify-center items-center ">
            <p className="text-xs">{`AED ${discount_value} OFF`}</p>
          </div>
        )}
        <div className="w-full">
          <p className="text-sm w-full truncate">{model}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">
              {(listing_price - discount_value).toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "AED",
                  minimumFractionDigits: 0,
                }
              )}
            </p>
            <p className="hidden lg:block text-xs">Per month</p>
            {discount_value > 0 && (
              <p className="text-xs line-through text-orange-400">
                {listing_price.toLocaleString("en-US", {
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
  );
};
