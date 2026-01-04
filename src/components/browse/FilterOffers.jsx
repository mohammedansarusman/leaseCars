import { Switch } from "../ui/switch";
import { useSelector, useDispatch } from "react-redux";
import { setEnabled } from "@/store/themeSlice";

export const FilterOffers = () => {
  const enabled = useSelector((store) => store.theme.enabled);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-15 hover:bg-gray-100 flex justify-between items-center border-y border-gray-200 transition-all duration-400">
      <h1 className="text-base font-semibold text-black opacity-80">Offers</h1>
      <Switch
        checked={enabled}
        onCheckedChange={(value) => dispatch(setEnabled(value))}
        className="data-[state=checked]:bg-sky-800"
      />
    </div>
  );
};
