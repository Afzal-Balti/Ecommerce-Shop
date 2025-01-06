import React, { useEffect } from "react";
import Boyshopping from "../assets/Boy.jpg";
import CardsInfo from "../Components/CardsInfo";
import Cardsthree from "../Components/Cardsthree";
import TopCard from "../Components/TopCard";
import Shop from "../Components/Shop";


function Home() {

  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12 ">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2 2.5">
              SHOP OF CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {["Electronic", "Mobiles", "Products", "Watch", "Dress"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm font-medium "
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={Boyshopping} alt="Shopping" className="h-full w-full" />
            <div className="absolute top-16 left-8 ">
              <p className="text-white mb-4 font-bold">janlian | Shop</p>
              <h2 className="text-3xl text-white font-bold">
                WELCOME TO E-SHOP
              </h2>
              <p className="text-xl mt-2.5  text-white font-bold">
                Million + Products
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 ">
                SHOW NOW
              </button>
            </div>
          </div>
        </div>
          <CardsInfo/>
          <Cardsthree/>
          <TopCard/>
          <Shop/>
        
        
         
            
      </div>

    
    </>
  );
}

export default Home;
