import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div  className='m-6 container'>
        <div className='flex justify-between items-center'>
            <div className='text-3xl font-medium text-[#00c9c8] italic'>
                Wavomba Rites
            </div>
                <ul className= 'gap-16 lg:gap-28 hidden md:flex'>
                <li><a href='/' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Home</a></li>
                <li><a href='/About' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Services</a></li>
                <li><a href='#porfolio'className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>Portfolio</a></li>
                <li><a href='/Contact' className='cursor-pointer hover:text-[#47817F] hover:scale-110 transition-all duration-300 ease-in-out'>contact</a></li>
            </ul>

            <AiOutlineMenu className="md:hidden" size={30}/>
           
        </div>
      
    </div>
  )
}

export default Navbar
