'use client';

import { Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/bw_logo.png'

export default function NavigBar() {
  return (
    <Navbar   
      className="bg-crimsonred h-38 flex justify-center items-center"
    >
      <div className='w-full'>
      <div className='flex justify-center items-center'>
      <Navbar.Brand href="/">
        <img
          alt="Kure Logistics Logo"
          className="mr-3 h-12 mb-8 mt-4"
          src={logo}
        />
        {/* <span className="self-center whitespace-nowrap text-white text-xl font-semibold dark:text-white">
        Kure Logistics
        </span> */}
      </Navbar.Brand>
      </div>

      <div className='flex justify-center items-center'>
      <div className="flex justify-center items-center text-white">
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-white py-2 hover:bg-gray-400'>
            Home
          </p>
        </Link>

        <Link to="/about" className='text-white hover:bg-gray-400 py-2 '>
          About
        </Link>

  {/*       <Link to="/why_choose_us" className='text-white  hover:bg-gray-400 py-2 '>
         Why Choose Us?
        </Link> */}

        <Link to="/gallery" className='text-white  hover:bg-gray-400 py-2 '>
          Gallery
        </Link>

        <Link to="/contact" className='text-white  hover:bg-gray-400 py-2 '>
          Contact
        </Link>
      </Navbar.Collapse>
      </div>
      </div>
    </Navbar>
    
  )
}