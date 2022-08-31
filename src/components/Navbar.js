import React from 'react'
import { useState } from 'react';
import logo from '../images/logo.svg'

// const btn = document.getElementById('menu-btn')
// const nav = document.getElementById('menu')

// btn.addEventListener('click', () => {
//   btn.classList.toggle('open')
//   nav.classList.toggle('flex')
//   nav.classList.toggle('hidden')
// })

const Navbar = () => {     
    const [open, setOpen] = useState(false);

    const btn = document.getElementById('menu-btn')
    const nav = document.getElementById('menu')

    const handleMenuClick = () => {
      setOpen((prev) => !prev);
      btn.classList.toggle('open')
      nav.classList.toggle('flex')
      nav.classList.toggle('hidden')
    };

  return (
    <div>
        <nav className='relative container mx-auto p-6'>
            {/* Flex Container */}
            <div className='flex items-center justify-between'>

                {/* Logo */}
                <div className='pt-2'>
                    <img src={logo} alt='logo.svg'></img>
                </div>

                {/* Menu Items */}
                <div className='hidden space-x-6 md:flex'>
                    <a href='/' className='hover:text-darkGrayishBlue'>Pricing</a>
                    <a href='/' className='hover:text-darkGrayishBlue'>Product</a>
                    <a href='/' className='hover:text-darkGrayishBlue'>About Us</a>
                    <a href='/' className='hover:text-darkGrayishBlue'>Careers</a>
                    <a href='/' className='hover:text-darkGrayishBlue'>Community</a>
                </div>

                {/* Button */}
                <div>
                    <a href='/' className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'>Get Started</a>
                </div>

                {/* Hambuger Icon */}
                <button
                    id='menu-btn'
                    className={`block hamburger md:hidden focus:outline-none ${open && 'open'}`}
                    onClick={() => handleMenuClick()}
                     >
                    <span className='hamburger-top'></span>
                    <span className='hamburger-middle'></span>
                    <span className='hamburger-bottom'></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden'>
                <div 
                    id='menu' 
                    className='absolute flex-col items-center hidden self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
                        <a href='/'>Pricing</a>
                        <a href='/'>Product</a>
                        <a href='/'>About</a>
                        <a href='/'>Careers</a>
                        <a href='/'>Community</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar