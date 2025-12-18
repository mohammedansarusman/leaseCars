'use client'
import { useState } from "react"
import { data } from "@/app/constant/list";
import { Checkbox } from "@/components/ui/checkbox"

export const CheckBoxMake = () => {
    const [brands, setBrands] = useState([]);
    // store brand values like ... Suzuki, Toyota, Audi
    const makes = data.map(item => item.brand_value)
    const uniqueBrands = [... new Set(makes)]
    console.log("brands=>",uniqueBrands)

  return (
    <div className="w-full bg-blue-200">
        {uniqueBrands.map((brand)=><div key={brand} className="flex gap-2">
            <Checkbox checked={brands.includes(brand)} onCheckedChange={(checked)=>console.log("x=>",checked)}/>
            <h1>{brand}</h1>
        </div>)}
    </div>
  )
}
