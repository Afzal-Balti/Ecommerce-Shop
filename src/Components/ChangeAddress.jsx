import React, { useState } from 'react'

function ChangeAddress({setaddress , setisModelopen}) {
    
      const [newaddress , setnewaddress] = useState("");

      function onClose(){
           
           setaddress(newaddress);
           setisModelopen(false)
      }

  return (
      <>
     
      <div>
        <input
         type='text'
         placeholder='Enter a new password'
         className='border p-2 w-full mb-4'
         onClick={(e)=> setnewaddress(e.target.value)}
        ></input>

        <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2' onClick={()=> setisModelopen(false)}>Cancel</button>
        <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={onClose}>Save Address</button>

        </div>
      </div>
      </>
  )
}

export default ChangeAddress