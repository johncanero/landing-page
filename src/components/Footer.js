import React from 'react'
import LogoWhite from '../images/logo-white.png'
import Facebook from '../images/icon-facebook.svg'
import Youtube from '../images/icon-youtube.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'

const Footer = () => {
  return (
    <div>
        <footer id='footer' className='bg-veryDarkBlue'>
            {/* Flex Container */}
            <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                {/* Logo and Social Links Container */}
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>

                    <div className='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy; 2022, ALl Rights Reserved
                    </div>

                    {/* Logo */}
                    <div>
                        <img src={LogoWhite} alt='logo.svg' className='h-8'></img>
                    </div>

                    {/* Social Links Container*/}
                    <div className='flex justify-center space-x-4'>
                        {/* Link 1 */}
                        <a href='#'>
                            <img src={Facebook} alt='icon-facebook.svg' className='h-8'></img>
                        </a>

                         {/* Link 2 */}
                         <a href='#'>
                            <img src={Youtube} alt='icon-facebook.svg' className='h-8'></img>
                        </a>

                         {/* Link 3 */}
                         <a href='#'>
                            <img src={Twitter} alt='icon-facebook.svg' className='h-8'></img>
                        </a>

                         {/* Link 4 */}
                         <a href='#'>
                            <img src={Pinterest} alt='icon-facebook.svg' className='h-8'></img>
                        </a>

                         {/* Link 5 */}
                         <a href='#'>
                            <img src={Instagram} alt='icon-facebook.svg' className='h-8'></img>
                        </a>
                    </div>
                </div>

                {/* List */}
                <div className='flex justify-around space-x-32 md:space-x-4 lg:space-x-32'>
                    <div className='flex flex-col space-y-3 text-white'>
                        <a href='#' className='hover:text-brightRed'>Home</a>
                        <a href='#' className='hover:text-brightRed'>Pricing</a>
                        <a href='#' className='hover:text-brightRed'>Products</a>
                        <a href='#' className='hover:text-brightRed'>About</a>
                    </div>

                    <div className='flex flex-col space-y-3 text-white'>
                        <a href='#' className='hover:text-brightRed'>Careers</a>
                        <a href='#' className='hover:text-brightRed'>Community</a>
                        <a href='#' className='hover:text-brightRed'>Privacy Policy</a>
                    </div>
                </div>

                {/* Input Container */}
                <div className='flex flex-col justify-between'>
                    <form>
                        <div className='flex space-x-3'>
                            <input 
                                type='text'
                                className='flex-1 px-4 rounded-full focus:outline-none'
                                placeholder='Updated your inbox'>
                            </input>
                            <button className='px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none'>
                                Go
                            </button>
                        </div>
                    </form>

                    <div className='hidden text-white md:block'>
                        Copyright &copy; 2022, ALl Rights Reserved
                    </div>
                </div>

                
            </div>
        </footer>
    </div>
  )
}

export default Footer