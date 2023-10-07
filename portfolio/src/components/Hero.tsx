import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex m-10 flex-col  md:flex-row justify-between items-center gap-16 '>
      <div className='md:hidden w-full h-full shadow-xl'>
        <Image src='/barbra.png' width={500} height={500} alt="hh"  />
      </div>
      <div>
        <h1 className='text-2xl lg:text-3xl mb-20'>I am an accomplished copywriter who focuses in accounting, sales and 
        customer service industries </h1>
        <div className='border-4 border-gray-500 '></div>
      </div>
      <div className='max-md:hidden w-full h-full'>
        <Image src='/barbra.png' width={500} height={500} alt="hh"  />
      </div>
      
    </div>
  )
}

export default Hero
