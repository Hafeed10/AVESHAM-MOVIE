import React, { useState } from 'react';
import Logo from '../asetss/logo/images.png';
import { RiMenuFold3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { GoSignIn } from "react-icons/go";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between  items-center w-full space-x-6  py-10 px-12 border border-b-1 border-t-none">
      <div className='flex items-center  '>
      <img src={Logo} alt="" className="w-10 h-auto" />
      <h1 className='font-bold ml-3 md:text-2xl text-3xl '>AVESHAM</h1>
      </div> 
      <ul className="flex justify-center cursor-pointer hidden xl:flex">
        <li className="mr-6">Home</li>
        <li className="mr-6">About</li>
        <li className="mr-6">Services</li>
        <li>Blog</li>
      </ul>
      <div className="flex justify-end items-center">
        <div className="font-bold py-2 px-4 rounded">
          <CiLogin color='black' size={30} />
        </div>
        <div  className=" text-white font-bold py-2 px-4 rounded ml-2">
        <GoSignIn size={30} color='black'/>
        </div>
        <div className=" font-bold py-2 px-4 rounded ml-2">
          <IoIosContact size={30} color='black' />
        </div>
        <div className='xl:hidden md:block' onClick={toggleMenu}>
          <RiMenuFold3Fill size={30} color='black' />
        </div>
        {/* // ! Responsive Navbar setting start  */}
        {isOpen && (
          <div className="absolute top-0 w-1/2 bg-white shadow-md py-4 flex flex-col items-center">
            <IoMdClose size={30} className="mb-4 cursor-pointer  ml-20" onClick={toggleMenu} />
            <ul className='cursor-pointer '>
              <li className="px-4 py-2">Home</li>
              <li className="px-4 py-2">About</li>
              <li className="px-4 py-2">Services</li>
              <li className="px-4 py-2">Blog</li>
            </ul>
          </div>
        )}
          {/* // ! Responsive Navbar setting end  */}
      </div>
    </div>
  );
}

export default Navbar;
