import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1C1C1C] max-lg:h-[200px] h-[400px] mt-7'>
      <p className='text-lg italic font-mono text-center text-white/80 pt-16'>Want to learn how to...?</p>
      <h1 className='text-4xl max-md:text-3xl text-center py-4 font-bold' >Drive leads into Sales? Using the copywriting strategy?</h1>
      <p className='text-center text-xl pb-4'>Subscribe to my Newsletter, Join the 7,000+ subscribers who get free updates.</p>
      <div className='flex flex-col justify-center items-center'>
        <input type="text" placeholder='Enter Your Email Address' className='py-2 pl-2 pr-[300px]' />
        <button className='bg-[#00c9c8] my-5 text-black py-2 px-5 text-xl font-bold'>Sign Me Up!</button>
      </div>
    </div>
  )
}

export default Footer
