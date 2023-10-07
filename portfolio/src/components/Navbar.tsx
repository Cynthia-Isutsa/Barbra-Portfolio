import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div  className='m-6 container'>
        <div className='flex justify-between items-center'>
            <div className='text-3xl font-medium text-[#0ABAB5] italic'>
                Barbara's Corner
            </div>
                <ul className= 'gap-10 lg:gap-20 hidden md:flex'>
                <li><a href='#home' className='menuLink'>Home</a></li>
                <li><a href='#work' className='menuLink'>Services</a></li>
                <li><a href='#porfolio'className='menuLink'>Portfolio</a></li>
                <li><a href='#blog' className='menuLink'>Blog</a></li>
                <li><a href='#contact' className='menuLink'>contact</a></li>
            </ul>

            <AiOutlineMenu className="md:hidden" size={30}/>
           
        </div>
      
    </div>
  )
}

export default Navbar
