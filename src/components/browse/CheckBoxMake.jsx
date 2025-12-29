"use client";
export const dynamic = "force-dynamic";
import { data } from "@/app/constant/list";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector, useDispatch } from "react-redux";
import { setBrands } from "@/store/carsSlice";

export const CheckBoxMake = () => {
  const dispatch = useDispatch();

  const brands = useSelector((store) => store.car.brands);

  // store brand values like ... Suzuki, Toyota, Audi
  const makes = data.map((item) => item.brand_value);
  const uniqueBrands = [...new Set(makes)];

  const handleChange = (checked, brand) => {
    !checked
      ? dispatch(setBrands(brands.filter((item) => item !== brand)))
      : dispatch(
          setBrands([...brands, brand])
        ); /* click on any car brand then tick on and checked will be true */
  };

  return (
    <div className="w-full flex flex-col gap-2 bg-white">
      {uniqueBrands.map((brand) => (
        <div key={brand} className="flex gap-4">
          <Checkbox
            id={brand}
            checked={brands.includes(brand)}
            onCheckedChange={(checked) => handleChange(checked, brand)}
            className="rounded-sm w-5 h-5 
              data-[state=checked]:bg-sky-800
              data-[state=checked]:border-gray-300
              data-[state=checked]:text-white
              hover:border hover:border-sky-700
            "
          />
          <label htmlFor={brand} className="hover:text-sky-700">
            {brand}
          </label>
        </div>
      ))}
    </div>
  );
};
