import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice"
import carsSlice from "./carsSlice"

const appStore = configureStore({
    reducer:{
        theme: themeSlice,
        car: carsSlice,
    }
})
export default appStore;

