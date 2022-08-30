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
            </div>
        </footer>
    </div>
  )
}

export default Footer