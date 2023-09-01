import { createSlice,configureStore } from "@reduxjs/toolkit";

import { Data } from "../data/Products";

var productsSlice = createSlice({
    name: 'slice1',

    initialState : Data,

    reducers:{
        SELECTProduct : (state,action) => {
            state.selectedProduct = Data.productdata.find(p=>p.id == action.payload)
        },
        ADDToCart : (state,action) => {
            state.cartItems = [...state.cartItems, Data.productdata.find(p=>p.id == action.payload)]
        }

    }
})

export var {SELECTProduct, ADDToCart} = productsSlice.actions

export var prodStore = configureStore({
    reducer:productsSlice.reducer
})