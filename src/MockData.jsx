import React from 'react'
import product0 from './assets/Product0.png';
import product1 from './assets/Product1.png';
import product2 from './assets/Product2.png';
import product3 from './assets/Product3.jpg';
import product4 from './assets/Product4.jpg';
import product5 from './assets/Product5.png';
import product7 from './assets/Product7.webp';
import product8 from './assets/Product8.png';
import product10 from './assets/Product10.png';




export const MockData = ()=> {


   const  ProductData = [
    {
        id: 1,
        image : product0,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product1,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product2,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product3,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product4,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product5,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product7,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product8,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product10,
        name: "Product 1",
        price: 1000,
    },
    {
        id: 1,
        image : product0,
        name: "Product 1",
        price: 1000,
    },
  ]






  return (
     <>
          <h1 className='text-center font-bold'>TOP PRODUCT</h1>
        <div>
            {ProductData.map((product , index)=>(
            <div key={index}>
              <img src={product.image}></img>
            </div>
            ))}
        </div>
      
     </>
  )
}

export default MockData 