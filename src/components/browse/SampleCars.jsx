import { CarsCard } from "./CarsCard";

export const SampleCars = ({data}) => {
  
  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-1">
      {data.map((item) => (
        <CarsCard data = {item} key={item.id}/>
      ))}
    </section>
  );
};
