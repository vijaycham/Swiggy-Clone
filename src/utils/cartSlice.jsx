import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        items: [ ]
    },
    reducers : {
        addItem: (state,action) => {
          state.items.push(action.payload)
        },
        removeItem : (state,action) => {
            state.items.pop()
        },
        clearcart: () => {
             
        }
    }
})

export const {addItem, removeItem, clearcart} = cartSlice.actions;

export default cartSlice.reducer;