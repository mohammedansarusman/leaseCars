import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/app/constant/list";

const carsSlice = createSlice({
  name: "car",
  initialState: {
    carsData: data,
    carModel:"",
    priceRange: [1000, 20000],
    brands:[],
    filterData:[],
    indexPriceDuration: {indexValue:0, price:0, duration:0},
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
    setFilterData:(state,action)=>{
      state.filterData = action.payload;
    },
    setIndexPriceDuration:(state,action)=>{
      state.indexPriceDuration = action.payload;
    },
  },
});

export default carsSlice.reducer;
export const { setCarModel, setPriceRange, setBrands, setFilterData, setIndexPriceDuration } = carsSlice.actions;
