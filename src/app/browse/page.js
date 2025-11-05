import { CarsList } from "@/components/browse/CarsList";
import { data } from "../constant/list";

export default function BrowseCars(){
    return <div>
        <h1>Browse cars</h1>
        <CarsList data = {data} />
    </div>
}