import { createSlice } from '@reduxjs/toolkit'
import React from 'react'



const initialState = {
    products: [],
}
 
const ProductSlice = createSlice({
    name : "Product",
    initialState,
    reducers :{
        addProduct(state, action){
              state.products = action.payload;
        }
    }
})

 export default ProductSlice.reducer;
 export const {addProduct} = ProductSlice.actions;