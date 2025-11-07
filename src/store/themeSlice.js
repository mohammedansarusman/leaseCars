import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",
    initialState:{
        longBar:false,
    },
    reducers:{
        setLongNavBar:(state,action)=>{
            state.longBar = action.payload;
        }
    }
})

export default themeSlice.reducer;
export const {setLongNavBar} = themeSlice.actions;