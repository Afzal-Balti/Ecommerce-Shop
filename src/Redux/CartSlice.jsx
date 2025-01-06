import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState = {
    products: [],
    totalQuality : 0,
    totalPrice : 0
}
 
const CardsSlice = createSlice({
    name : "Carts",
    initialState,
    reducers :{
        addToCard : (state , action)=>{
            const newitem = action.payload;
            const indexitem = state.products.find((item)=> item.id === newitem);
            if(indexitem){
                indexitem.qualtity++;
                indexitem.totalPrice += newitem.price;
            }
            else{
                state.products.push({
                    id : newitem.id ,
                    name : newitem.name ,
                    price : newitem.price ,
                    qualtity : 1 ,
                    totalPrice : newitem.price,
                    image : newitem.image


                })
            }
            state.totalPrice += newitem.price;
            state.totalQuality++;
        }
       
    }
})

 export default CardsSlice.reducer;
 export const {addToCard} = CardsSlice.actions;