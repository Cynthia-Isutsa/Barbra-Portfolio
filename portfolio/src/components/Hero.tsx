import React from 'react'
import Image from 'next/image'
import Barbra from '../../public/Barbra.png'

const Hero = () => {
  return (
    <div className='flex mx-10 my-20 flex-col  lg:flex-row justify-between items-center gap-20 '>
      <div className='lg:hidden w-full h-full shadow-xl'>
        <Image src='/barbra.png' width={500} height={500} alt="hh" className='w-full h-full'  />
      </div>
      <div>
        <h1 className='text-2xl  my-6'>Would you like me to personally hand you 
          YOUR million dollar <span className='text-[#00c9c8]'>blueprint,</span>
         which is the key to double, triple or even quadruple your <span className='text-[#00c9c8]'>profits, </span>
          for FREE?</h1>
         <p className='text-2xl my-8'>Hello Friend, <span className='text-[#00c9c8] text-3xl'>It’s Wavomba Rites here.</span></p>
         <p className= 'text-xl'></p> 
         <p className='text-2xl my-5'>I am on the hunt for the “ideal” client. One with a vision, a thirst to achieve remarkable business success. 
         Are you that client?</p>
         <div className='flex justify-center mt-2 mb-5'>
          <button className='bg-[#00c9c8] text-black text-xl font-semibold px-4 py-1 mb-3'><a href='/About'>Start Here</a></button>
        </div>
        <div className='border-b-[1px] border-gray-500 '></div>
      </div>
      <div className='max-lg:hidden w-full h-full'>
        <Image src={Barbra} width={500} height={500} alt="hh" priority={true}  />
      </div>
      
    </div>
  )
}

export default Hero
