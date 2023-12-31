import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
        <div className='bg-[#1C1C1C] max-lg:h-[110px] h-[220px] rounded-sm'>
            <h1 className= 'flex justify-center items-center text-4xl font-bold lg:text-5xl pt-8 lg:pt-20'>
                Portfolio</h1>
            <p className='flex justify-center items-center text-lg font-semi-bold lg:text-xl pt-3 text-gray-500'>
            Copywriting, Email Marketing, Content Strategy and Sales Letters</p>
        </div>

        <div className='mx-10 my-8 flex flex-col md:flex-row gap-5'>
            <div className='w-full h-full'>
                <Image src='/portfolio1.jpg' width={600} height={600} alt="content"  />
                <h1 className= "text-2xl md:text-3xl my-4 text-center">Content Marketing</h1>
                <p className="text-gray-400 text-lg  text-center">A sampling of content I have created for various brands over the years. </p> 
                <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold px-4 py-1 mb-3'><a href='/Content'>Explore</a></button>
                </div> 
            </div>
      
            <div className='w-full h-full'>
                <Image src='/portfolio2.jpg' width={600} height={600} alt="email"  />
                <h1 className= "text-2xl md:text-3xl my-4 text-center">Email Marketing</h1>
                <p className="text-gray-400 text-lg text-center">Samples of single newsletters I have created in my past campaigns</p> 
                <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold px-4 py-1 mb-3'><a href='/Emails'>Explore</a></button>
                </div> 
            </div>
        </div>
      
    </div>
  )
}

export default Projects
