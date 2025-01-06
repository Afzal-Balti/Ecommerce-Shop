import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import nocard from '../assets/Nocard.jpeg';
import { MdDelete } from "react-icons/md";
import Modal from './Modal';
import ChangeAddress from './ChangeAddress';

function Carts() {

    const itemselect = useSelector(state => state.carts);
    const [address , setaddress] = useState("main streat 0012");
    const [isModelopen , setisModelopen] = useState(false);



  return (
     
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16
        lg:px-24'>
        {itemselect.products.length > 0 ? ( 
         <div>
        <h1 className='text-2xl font-semibold mb-4'>Shopping Cards</h1>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className='md:w-2/3'>
                <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                    <p>PRODUCT</p>
                    <div className='flex space-x-8'>
                        <p>PRICE</p>
                        <p>QUALITY</p>
                        <p>SUBTOTAL</p>
                        <p>REMOVE</p>
                    </div>
                </div>
                   
                    {itemselect.products.map((items)=>(
                        <div key={items.id} className='flex items-center justify-between p-3 border-b'>
                            <div className='md:flex items-center space-x-4'>
                            <img src={items.image} className='w-16 h-16 object-contain rounded'></img>
                            <div className='flex-1 ml-4'>
                                <h3 className='text-lg font-semibold'>{items.name}</h3>
                            </div>
                            </div>
                            <div className='flex space-x-12 items-center'>
                                <p>${items.price}</p>
                                <div className='flex items-center justify-center border'>
                                <button className='text-xl font-bold px-1.5 border-r'>-</button>
                                 <p className='text-xl px-2 '>{items.qualtity}</p>
                                 <button className='text-xl px-1 border-1'>+</button>

                                </div>
                                <p>{(items.qualtity * items.price).toFixed(2)}</p>
                                <button className='text-red-500 hover:text-red-700'>
                                <MdDelete />
                                </button>
                            </div>
                        </div>

                    ))}
                   </div>


                   <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                    <h3 className='text-sm font-semibold mb-5 '>CART TOTAL</h3>
                    <div className='flex justify-between mb-5 border-b pb-1'>
                        <span className='text-sm'>TOTAL Items : </span>
                        <span>{itemselect.totalQuality }</span>
                    </div>
                <div className='mb-4 border-b pb-2'>
                   <p>Shipping</p>
                   <p>Shipping to</p>
                   <span className='text-xs font-bold'>{}</span>
                   <button className='text-blue-500 hover:underline mt-1 ml-2' onClick={()=> setisModelopen(true)}>Change Address</button>
            </div>
            <div className='flex-justify-between mb-4'>
                      <span>Total Price</span>
                      <span>${itemselect.totalPrice.toFixed(2)}</span>
            </div>
                <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800'>Procced To CheckOut</button>

                </div>
            </div>
              <Modal isModelopen={isModelopen}  setisModelopen={setisModelopen}>
                  <ChangeAddress  setaddress={setaddress} setisModelopen={setisModelopen} />
              </Modal>
            
        </div>
      )
             : 
             ( <div className='flex justify-center'>
                <img src={nocard} className='h-96 py-5 items-center ml-80'></img>
                </div>
                )}
         </div>
  );
};

export default Carts