import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectGroup,
  SelectContent
} from "../ui/select";
export const LocationsDropDown = ({cities}) => {
  return (
    <div className="w-full px-5 flex flex-col gap-4">
      <h1 className="text-base font-semibold opacity-80">Select Location</h1>
      <Select className="">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select pick-up location"></SelectValue>
        </SelectTrigger>
        <SelectContent className="">
            {cities.map(city=>
                <SelectItem key={city.id} value={city.value}>{city.value}</SelectItem>

            )}
        </SelectContent>
      </Select>
    </div>
  );
};
