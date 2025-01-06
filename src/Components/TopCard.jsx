import React from 'react'
import { FaStar } from "react-icons/fa";
import { addProduct } from "../Redux/ProductSlice";
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from 'react';
import {MockData} from '../assets/MockData';
import { addToCard } from '../Redux/CartSlice';

function TopCard() {

  const dispatced = useDispatch();
    function handledaddbtn(e , product){
      e.preventDefault();

      dispatced(addToCard(product));
     

    }

    

    const dispatch = useDispatch();
    const Allproduct = useSelector(state => state.product);
  
     useEffect(()=>{
      dispatch(addProduct(MockData));
      console.log(MockData);
  
     },[]);

  return (
      <>
       <h1 className="font-bold text-center mt-10 text-3xl ">TOP PRODUCT</h1>

<div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10 ">
  {Allproduct.products.slice(0 , 5).map(((product)=>(
      <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <img src={product.image}></img>
        <div className="">
          <div className="font-serif">{product.name}</div>
          <div className="text-gray-400"> ${product.price}  </div>
      
     
        </div>

        <div className="flex items-center mt-2">
        <FaStar className="text-orange-600 " />
        <FaStar className="text-orange-600 " />
        <FaStar className="text-orange-600 "/>
        <FaStar className="text-orange-600 "/>
        <FaStar className="text-orange-600 " />

        </div>

        <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32  transition-all  " onClick={(e)=> handledaddbtn(e , product)}>

          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add To Cards</span>
        </div>

      
 
       
      </div>
  )))}
  
</div>
      
      </>
  )
}

export default TopCard