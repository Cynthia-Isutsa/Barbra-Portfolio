import React from 'react'
import {AiFillFacebook, AiFillLinkedin, AiOutlineMedium, AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  return (
    <div>
    <div className='bg-[#1C1C1C] max-lg:h-[200px] h-[400px] mt-7'>
      <p className='text-lg italic font-mono text-center text-white/80 pt-16'>Want to learn how to...?</p>
      <h1 className='text-4xl max-md:text-3xl text-center py-4 font-bold' >Drive leads into Sales? Using the copywriting strategy?</h1>
      <p className='text-center text-xl pb-4'>Subscribe to my Newsletter, Join the 7,000+ subscribers who get free updates.</p>
      <div className='flex flex-col justify-center items-center'>
        <input type="text" placeholder='Enter Your Email Address' className='py-2 pl-2 lg:pr-[300px] md:pr-[200px] pr-[150px]' />
        <button className='bg-[#00c9c8] my-5 text-black py-2 px-5 text-xl font-bold'>Sign Me Up!</button>
      </div>
    </div>

      <div className='bg-gray-900 py-8'>
        <div className='lg:mx-52 mx-10'>
          <div className='flex justify-between items-center mb-8'>
            <div className='flex justify-between items-center'>
              <p className=' text-xl font-semibold mr-8 cursor-pointer hover:scale-110 transition duration-300 ease-out'><a href='/Contact'>QUESTIONS</a></p>
              <p className='text-xl font-semibold cursor-pointer hover:scale-110 transition duration-300 ease-out'><a href='/Contact'>CONTACT</a></p>
            </div>

            <div className='flex gap-5 pl-4'>
              <a href='/' target="_blank"><AiOutlineMedium size={27} className="fill-[#00c8c9] cursor-pointer hover:scale-110 transition duration-300 ease-out"/></a>
              <a href='https://www.facebook.com/wavombamusavi?mibextid=ZbWKwL' target="_blank"><AiFillFacebook size={27} className="fill-[#00c8c9] cursor-pointer hover:scale-110 transition duration-300 ease-out"/></a>
              <a href='https://www.linkedin.com/in/barbara-wavomba' target="_blank"><AiFillLinkedin size={27} className="fill-[#00c8c9] cursor-pointer hover:scale-110 transition duration-300 ease-out"/></a>
              <a href='https://wa.me/+254719499880' target="_blank"><AiOutlineWhatsApp size={27} className="fill-[#00c8c9] cursor-pointer hover:scale-110 transition duration-300 ease-out"/></a>
            </div>
            
          </div>
        <div className='border-b-[1px] border-gray-200 mt-5'></div>
        <p className='text-sm text-center mt-6'>© 2021 <span className='text-white'> Wavomba Rites</span>. Built by <span className='text-white'>Cynthia Isutsa</span></p>
      </div>
    </div>

   
    </div>
  )
}

export default Footer
