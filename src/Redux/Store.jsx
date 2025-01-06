import  { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import CartSlice from './CartSlice';


 const Store = configureStore({
    reducer:{
        product : ProductSlice,
        carts :CartSlice
    }
 })


export default Store;