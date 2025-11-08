import { CarsList } from "@/components/browse/CarsList";
import { data } from "../constant/list";
import { DynamicHeading3 } from "@/components/home-page/DynamicHeading3";
import { SearchBar } from "@/components/browse/SearchBar";

export default function BrowseCars(){
    return <div className="py-20">
        <SearchBar />
        <DynamicHeading3 />
        <CarsList data = {data} />
    </div>
}