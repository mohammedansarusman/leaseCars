import { create } from "zustand";

export const navigationStore = create((set)=>({
    bar:true,
    setBar:(value)=>set({bar:value})
}))