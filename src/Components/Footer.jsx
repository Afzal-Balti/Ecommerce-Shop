import React from 'react'
 import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
      <>
      <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 mt-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>

        <div>
           <h2 className='text-xl  font-semibold'>E-SHOP</h2>
           <p className='mt-4'>A shopping center is a group of retail stores and services in a suburban area, usually with a large parking lot. Shopping centers offer consumers immediate access to products, which is especially appealing for items like clothing and footwear where fit and style can be better assessed in person</p>
           </div>

          <div className='flex flex-col md:items-center'>
            <h2 className='text-lg font-semibold'>Quick Links</h2>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link to="/home" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">Shop</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About</Link>
              </li>
              
            </ul>
            </div>

            <div className='text-lg font-semibold'>
              <h2>Follow Us</h2>
              <div className='flex space-x-4 mt-4'>
              <a href=''className='hover:text-gray-400'><FaFacebook /></a>
              <a href=''className='hover:text-gray-400' ><FaGithub /></a>
              <a href=''className='hover:text-gray-400' ><FaXTwitter/></a>
              <a href=''className='hover:text-gray-400' ><FaYoutube  /></a>
              </div>
            
              <form className='flex items-center justify-center mt-8'>
                <input type='email' placeholder='Enter Email' className='w-full p-2 rounded-lg bg-gray-800 border border-gray-600'></input>
                <button className='bg-red-600 text-white px-4 py-2 rounded-r-md'>Subscribe</button>

              </form>

            </div>
            </div>
        
            <div className='mt-5 border-t border-gray-700 pt-4'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy; 2025 E-shop All right reversed</p>

            <div className='flex space-x-4 md:mt-0'>
             <a href=''className='hover:underline'>Privacy Policy</a>
             <a href=''className='hover:underline'>Terms & Conditions</a>
            </div>
 
            </div>

            </div>
        

      </footer>
      
      </>
  )
}

export default Footer