import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/app/constant/list";

const carsSlice = createSlice({
  name: "car",
  initialState: {
    carsData: data,
    carModel: "",
    priceRange: [1000, 20000],
    brands:[],
  },
  reducers: {
    setCarModel: (state, action) => {
      state.carModel = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setBrands:(state,action)=>{
      state.brands = action.payload;
    },
  },
});

export default carsSlice.reducer;
export const { setCarModel, setPriceRange, setBrands } = carsSlice.actions;
