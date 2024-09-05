import { createSlice } from "@reduxjs/toolkit";





const itemSlice = createSlice({
    name: "item",
    initialState: [],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload
        }
    }
})



export const itemActions = itemSlice.actions
export default itemSlice;

