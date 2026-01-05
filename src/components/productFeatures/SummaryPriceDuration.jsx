'use client'
import { useSelector } from "react-redux"
import { Button } from "../ui/button"
export const SummaryPriceDuration = () => {
    const indexPriceDuration = useSelector(store=>store.car.indexPriceDuration)
    const {price, duration} = indexPriceDuration
  return (
    <div className="w-full h-full flex items-center justify-evenly">
      {/* price and duration */}
        <div className="w-1/2 flex flex-col px-5 text-sm font-semibold">
          <h1 className="text-gray-700">{`${duration} Month`}</h1>
          <h1 className="text-base">{`AED ${price}`}<span className="font-light">/Month</span></h1>
        </div>
        <div className="w-1/2 flex justify-end px-5">
          <Button className="bg-sky-700 text-white hover:bg-sky-800 md:w-4/4">Continue</Button>
        </div>
        
    </div>
  )
}
