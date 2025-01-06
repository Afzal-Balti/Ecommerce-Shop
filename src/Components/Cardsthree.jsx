import React from 'react'
import manpic from '../assets/Boys.jpeg';
import girlpic from '../assets/GirlPic.jpg';
import Kidspic from '../assets/Kidsboy.jpg';

function Cardsthree() {

    const Cards = [
        {
              pic : manpic,
             title : 'Men',
             Parapraph : 'View All'
        },
        {
             pic : girlpic,
            title : 'Girls',
            Parapraph : 'View All'
       },
       {
         pic : Kidspic,
        title : 'Kid',
        Parapraph : 'View All'
   },
    ]



  return (
    <>

        <div className=' mx-auto grid grid-cols-1 sm:grid-cols-3  gap-6 '>
            {Cards.map((items , index)=>(
                  <div key={index} className=' transform transition-transform duration-300 hover:scale-105 cursor-pointer relative h-64'>
                     <img src={items.pic}className='w-full h-full object-cover rounded-lg shadow-md'></img>

                     <div className='absolute top-20 left-10'>
                     <h2 className='text-2xl text-black font-bold '>{items.title}</h2>
                     <p className='text-gray-500'>{items.Parapraph}</p>
                     </div>
                  
                  </div>
            ))}
        </div>
   
    
    </>
  )
}

export default Cardsthree