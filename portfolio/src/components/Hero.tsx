import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col flex-1 md:flex-row justify-between items-center my-10 mx-20'>
      
      <div>
        <h1 className='text-2xl lg:text-3xl'> I am an accomplished copywriter who focuses on accounting, sales and 
        customer service industries and i will convert your cold leads into sales through the magic of word art. </h1>
      </div>
      <div className='w-full h-full'>
        <Image src='/barbra.png' width={400} height={400} alt="hh"  />
      </div>
    </div>
  )
}

export default Hero
