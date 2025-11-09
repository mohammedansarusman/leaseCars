import { createSlice } from "@reduxjs/toolkit";
import { data } from "@/app/constant/list";


const carsSlice = createSlice({
    name:"car",
    initialState:{
        carsData: data,
        carModel:"",
    },
    reducers:{
        setCarModel:(state,action)=>{
            state.carModel = action.payload
        },
    },
});

export default carsSlice.reducer;
export const {setCarModel} = carsSlice.actions;
