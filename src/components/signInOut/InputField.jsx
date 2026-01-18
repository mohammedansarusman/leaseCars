import { useDispatch, useSelector } from "react-redux";
import { setFields } from "@/store/carsSlice";

export const InputField = ({ label, type, placeholder, value, name }) => {
  const dispatch = useDispatch();
  const records = useSelector((store) => store.car.fields);
  const handleChange = (e) =>
    dispatch(setFields({ ...records, [name]: e.target.value }));

  return (
    <div className="grid grid-cols-1 text-base font-light gap-2">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="outline-1 outline-gray-300 pl-4 text-sm py-2 rounded-sm 
              focus:outline-1 focus:outline-sky-800"
        placeholder={placeholder}
      />
    </div>
  );
};
