import React from 'react'
import Image from 'next/image'

const Samples = () => {
  return (
  <div className='flex flex-col'>
     <div className='bg-[#1C1C1C] max-lg:h-[110px] h-[220px] rounded-sm'>
      <h1 className= 'flex justify-center items-center text-4xl font-bold lg:text-5xl pt-8 lg:pt-20'>
        Key Services</h1>
    </div>

    <div className='mx-10 my-8 flex flex-col md:flex-row gap-20'>
      <div className=''>
          <Image src='/projects3.jpg' width={500} height={500} alt="hh"  />
        <h1 className= "text-2xl md:text-3xl my-4">Email Marketing</h1>
        <p className="text-gray-400 text-lg flex-justify-center lg:pr-12">Are your email campaigns leaving you longing for more opens, clicks, and conversions?
           Look no further! I specialize in crafting compelling, attention-grabbing email copy that
            gets results. </p> 
      </div>

      
        <div className=''>
          
            <Image src='/projects2.jpg' width={500} height={500} alt="hh" />
            <h1 className= "text-2xl md:text-3xl my-4">Sales Letters</h1>
            <p className="text-gray-400 text-lg lg:pr-12">Are you ready to take your business to the next level? 
            You can easily do this with sales letters. As your copywritter I will write letters that captivate your 
            intended clientele hence driving more sales.</p>   
      </div>

      
        
    </div>
  </div>
  )
}

export default Samples
