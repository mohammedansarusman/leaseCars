"use client";
import { useSelector, useDispatch } from "react-redux";
import { CarsCard } from "./CarsCard";
import { useEffect } from "react";
import { setFilterData } from "@/store/carsSlice";
// import { Link } from "next/link";
import Link from "next/link";

export const CarsList = () => {
  const dispatch = useDispatch();

  // all cars records
  const enabled = useSelector((store) => store.theme.enabled);
  const carsData = useSelector((store) => store.car.carsData);
  const brands = useSelector((store) => store.car.brands);
  const filterData = useSelector((store) => store.car.filterData);
  const priceRange = useSelector((store) => store.car.priceRange);
  const makes = carsData.map((item) => item.brand_value);
  const uniqueBrands = [...new Set(makes)];
  let filterBrands = uniqueBrands;
  const offer = enabled ? 1 : 0;

  useEffect(() => {
    if (brands.length > 0) {
      filterBrands = brands;
    }
    const data = carsData.filter(
      (item) =>
        item?.listing_price > priceRange[0] &&
        item?.listing_price <= priceRange[1] &&
        item?.discount_value >= offer &&
        filterBrands.some(
          (brand) => brand.toLowerCase() === item.brand_value.toLowerCase()
        )
    );
    dispatch(setFilterData(data));
  }, [priceRange, brands, enabled]);

  return (
    <section className="w-full flex flex-wrap justify-center items-start gap-2 lg:w-[60%] xl:w-[70%]">
      {filterData.map((item) => (
        <Link href={`/browse/${item.id}`} key={item.id}>
          <CarsCard data={item}  />
        </Link>
      ))}
      {filterData.length === 0 && <h1>Item not found</h1>}
    </section>
  );
};
