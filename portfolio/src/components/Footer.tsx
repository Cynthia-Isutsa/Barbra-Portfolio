import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1C1C1C] max-lg:h-[150px] h-[300px] mt-7'>
      <p className='text-lg italic font-mono text-center text-white/90 pt-16'>Want to learn how to...?</p>
      <h1 className='text-4xl max-md:text-3xl text-center py-3 text-white/70 font-bold' >Drive leads into Sales? Using the copywriting strategy?</h1>
      <p className='text-center text-lg pb-3'>Enter your email below to join over 7,413 subscribers who are building the lives of their dreams.</p>
      <div className='flex flex-col justify-center items-center'>
        <input type="text" placeholder='Enter Your Email Address' className='py-2 pr-[250px]' />
        <button></button>
      </div>
    </div>
  )
}

export default Footer
