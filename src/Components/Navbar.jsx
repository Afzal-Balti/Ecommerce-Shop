import React from "react";
import { Link } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";


function Navbar() {

      const select = useSelector(state => state.carts.products);


  return (
    <>
      <nav className="bg-white shadow-md w-full">
        <div className="maincontainer mx-auto px-4 md:px-16 lg:px-24  py-4 flex justify-between items-center">
          <div className="Link font-bold text-lg">
            <Link to="" className="font-semibold text-xl ">
              E-Shop
            </Link>
          </div>

          <div className="inputs relative flex-1 mx-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1 ">
            <form>
              <input 
                type="text"
                placeholder="Search Products"
                className="w-full border py-2 px-4 text-center sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1"
              />
              <FiSearch className="absolute top-3 right-4 text-red-500 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1" />
            </form>
          </div>

          <div className="mx-3 flex justify-between space-x-4 tracking-tighter">
            <Link to="/cart" className="relative">
              <FaCartShopping className="text-2xl" />
         
                {select.length > 0 && (<span className="absoulte top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center text-white ">{select.length}</span>)}

            </Link>

            <button className="font-bold ">Register|Login</button>
            <button>
              <FaUserCircle className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="NavbarName flex justify-center items-center space-x-5 font-semibold py-4">

              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/shop" className="hover:underline">Shop</Link>
              <Link to="/product" className="hover:underline">Product</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>



            {/* {["Home" , "Shop" , "Contact" , "About"].map((item , index)=>(
                <Link key={index} className="hover:underline">{item}
            
                </Link>
            ))} */}
        </div>




      </nav>
    </>
  );
}

export default Navbar;
