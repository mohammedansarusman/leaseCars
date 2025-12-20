"use client";
export const dynamic = "force-dynamic";
import { useEffect } from "react";
import { data } from "@/app/constant/list";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams} from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setBrands } from "@/store/carsSlice";


export const CheckBoxMake = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const brands = useSelector(store=>store.car.brands)
  console.log("brands",brands)

  // store brand values like ... Suzuki, Toyota, Audi
  const makes = data.map((item) => item.brand_value);
  const uniqueBrands = [...new Set(makes)];
  const handleChange = (checked, brand) => {

    !checked
      ? dispatch(setBrands(brands.filter((item) => item !== brand)))
      : dispatch(setBrands([...brands, brand])); /* click on any car brand then tick on and checked will be true */
  };
  useEffect(()=>{
    const params = new URLSearchParams(searchParams);
    brands.map((item)=>params.append("brand",item))
    router.push(`?${params}`)

  },[brands])

  return (
    <div className="w-full bg-blue-200">
      {uniqueBrands.map((brand) => (
        <div key={brand} className="flex gap-2">
          <Checkbox
            checked={brands.includes(brand)}
            onCheckedChange={(checked) => handleChange(checked, brand)}
          />
          <label>{brand}</label>
        </div>
      ))}
    </div>
  );
};
