import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-[#1C1C1C] max-lg:h-[110px] h-[220px] rounded-sm'>
            <h1 className= 'flex justify-center items-center text-4xl font-bold lg:text-5xl pt-8 lg:pt-20'>
                Portfolio</h1>
            <p className='flex justify-center items-center text-lg font-semi-bold lg:text-xl pt-3 text-gray-500'>
            Copywriting, Email Marketing, Content Strategy and Sales Letters</p>
            
        </div>
    </div>
  )
}

export default page
