import { CarsList } from "@/components/browse/CarsList";
import { data } from "../constant/list";
import { DynamicHeading3 } from "@/components/home-page/DynamicHeading3";
import { SearchBar } from "@/components/browse/SearchBar";
import { FilterButton } from "@/components/browse/FilterButton";
import { FilterWiderScreen } from "@/components/browse/FilterWiderScreen";

export default async function BrowseCars() {
  
  return (
    <div className="pt-25 flex flex-col gap-4 px-3 bg-gray-50">
      <aside className="flex justify-between items-center px-4">
        <SearchBar />
        <FilterButton/>
      </aside>
      <DynamicHeading3 />
      <div className="w-full lg:flex lg:flex-row min-h-2/3">
        <FilterWiderScreen />
        <CarsList />
      </div>
    </div>
  );
}
