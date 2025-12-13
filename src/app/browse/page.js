import { CarsList } from "@/components/browse/CarsList";
import { data } from "../constant/list";
import { DynamicHeading3 } from "@/components/home-page/DynamicHeading3";
import { SearchBar } from "@/components/browse/SearchBar";
import { FilterButton } from "@/components/browse/FilterButton";

export default function BrowseCars() {
  return (
    <div className="pt-25 flex flex-col gap-4">
      <aside className="flex justify-between items-center px-4">
        <SearchBar />
        <FilterButton/>
      </aside>
      <DynamicHeading3 />
      <CarsList />
    </div>
  );
}
