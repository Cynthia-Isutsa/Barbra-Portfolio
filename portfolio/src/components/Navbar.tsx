'use client'
import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div  className='m-6 container'>
        <div className='flex justify-between items-center'>
            <div className='text-3xl font-medium text-[#00c9c8] italic'>
                Wavomba Rites
            </div>
              <ul className= 'gap-16 lg:gap-28 hidden md:flex'>
                <li><a href='/' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Home</a></li>
                <li><a href='/About' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Services</a></li>
                <li><a href='/Portfolio'className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Portfolio</a></li>
                <li><a href='/Contact' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>contact</a></li>
            </ul>
            <div className='md:hidden'>
                <AiOutlineMenu className="md:hidden" size={30} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                  <div className='fixed top-0 left-0 w-[100%] h-[100vh] bg-[#121212] transition ease-out duration-300 flex flex-row justify-center items-center z-50 slide-bottom'>
                    <AiOutlineClose size={30} onClick={() => setToggleMenu(false)} className='cursor-pointer absolute top-[20px] right-[20px]'/>
                    <ul className= ''>
                        <li><a href='/' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Home</a></li>
                        <li><a href='/About' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Services</a></li>
                        <li><a href='/Portfolio'className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Portfolio</a></li>
                        <li><a href='/Contact' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>contact</a></li>
                    </ul>
                  </div>
                )}
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
