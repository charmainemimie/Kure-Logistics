'use client';

import { Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
export default function NavigBar() {
  return (
    <Navbar
      fluid
      
      className=" bg-alizarincrimsonred "
    >
      <Navbar.Brand href="/">
        <img
          alt="Kure Logistics Logo"
          className="mr-3 h-6 sm:h-9 "
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-white text-xl font-semibold dark:text-white">
        Kure Logistics
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          active
          to="/"
        >
          <p className='text-white py-2 hover:bg-bluetheme'>
            Home
          </p>
        </Link>

        <Link to="/about" className='text-white hover:bg-bluetheme py-2 '>
          About
        </Link>

        <Link to="/why_choose_us" className='text-white  hover:bg-bluetheme py-2 '>
         Why Choose Us?
        </Link>

        <Link to="/gallery" className='text-white  hover:bg-bluetheme py-2 '>
          Gallery
        </Link>

        <Link to="/contact" className='text-white  hover:bg-bluetheme py-2 '>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}