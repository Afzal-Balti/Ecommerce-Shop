import React from 'react'
import { FaShippingFast , FaLock  , FaTags } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";



function CardsInfo() {

    const CardsInformation =[
        {
            icon : <FaShippingFast className='text-3xl text-red-600' />,
            title : 'Free Shipping',
            description : 'Free shipping on all orders over $50.',
        },
        {
            icon : <MdHeadsetMic className='text-3xl text-red-600'/>,
            title : 'Head Mic',
            description : 'Head Mic on all orders over $20.',
        },
        {
            icon : <FaMoneyBills className='text-3xl text-red-600' />,
            title : 'Money Bills',
            description : 'Money Bills on all orders over $5.',
        },
        {
            icon : <FaTags className='text-3xl text-red-600' />,
            title : 'Tags',
            description : 'Tags on all orders over $10.',
        },
        {
            icon : <FaLock  className='text-3xl text-red-600' />,
            title : 'Lock',
            description : 'Lock on all orders over $30.',
        },
       
    ]

     
  return (

    <>
    <h2>THE CARDS SECTION </h2>

    <div className='bg-white pb-8 pt-12 '>
        <div className='container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-4 '>
        {CardsInformation.map((items , index)=>(
        <div key={index} className=' flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
              {items.icon}
              <h3 className='mt-4 text-xl font-semibold'>{items.title}</h3>
              <p className='mt-2 text-gray-600'>{items.description}</p>
        </div>
    ))}
        </div>
      
    </div>

    
    
    </>
  )
}

export default CardsInfo