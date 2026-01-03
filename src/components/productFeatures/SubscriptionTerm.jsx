"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndexPriceDuration } from "@/store/carsSlice";

export const SubscriptionTerm = ({ pricing }) => {
  const dispatch = useDispatch();
  const { indexValue } = useSelector((store) => store.car.indexPriceDuration);

  useEffect(() => {
    dispatch(
      setIndexPriceDuration({
        indexValue: 0,
        price: pricing[0].listing_price,
        duration: pricing[0].duration,
      })
    );
  }, []);

  const handleClick = (index, listingPrice, discountValue, duration) => {
    dispatch(
      setIndexPriceDuration({
        indexValue: index,
        price: listingPrice - discountValue,
        duration,
      })
    );
  };

  console.log("pricing=>", pricing);

  return (
    <div className="w-full px-5">
      <h1 className="text-base font-semibold opacity-80">Subscription Terms</h1>
      <aside className="w-full h-[100px] gap-1 flex justify-between items-center mt-1 p-1 ">
        {pricing?.map((items, index) => (
          <div
            onClick={() =>
              handleClick(
                index,
                items.listing_price,
                items.discount_value,
                items.duration
              )
            }
            className={`w-1/2 h-[95%] rounded-md 
            border border-gray-200 flex flex-col justify-center items-start gap-1 pl-2
          hover:border-sky-700 transition-colors duration-300
          ${
            index === indexValue
              ? "border border-sky-700 bg-gray-100"
              : "border-gray-200 bg-white"
          }`}
            key={items.duration}
          >
            {/* duration */}
            <h1 className="text-sm font-semibold">{`${items.duration} Months`}</h1>
            {items.discount_value > 0 && (
              <h1 className="line-through text-orange-400">{`${items.listing_price.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "AED",
                  maximumFractionDigits: 0,
                }
              )}`}</h1>
            )}

            {/* pricing */}
            <h1>{`${(items.listing_price - items.discount_value).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "AED",
                maximumFractionDigits: 0,
              }
            )}/Month`}</h1>
          </div>
        ))}
      </aside>
    </div>
  );
};
