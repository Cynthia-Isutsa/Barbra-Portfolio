import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
  <div className='flex flex-col'>
     <div className='bg-[#1C1C1C] max-lg:h-[110px] h-[220px] rounded-sm'>
      <h1 className= 'flex justify-center items-center text-4xl font-bold lg:text-5xl pt-8 lg:pt-20'>
        Key Services</h1>
    </div>

    <div className='mx-10 my-8 flex flex-col md:flex-row gap-5'>
        <div className='w-full h-full'>
          <Image src='/projects1.jpg' width={400} height={500} alt="hh"  />
        <h1 className= "text-2xl md:text-3xl my-4">Social Media Copy</h1>
        <p className="text-gray-400 text-lg">Social media is at the forefront of every brand. As a copywriter, Let's transform 
          your brand into a social media sensation! I will craft content that grabs attention, 
          sparks conversations, and drives results. </p> 
      </div>
      
        <div className='w-full h-full'>
          <Image src='/projects2.jpg' width={400} height={500} alt="hh"  />
        <h1 className= "text-2xl md:text-3xl my-4">Blog Copy</h1>
        <p className="text-gray-400 text-lg">Are you ready to take your blog to the next level? i will write stories that
           captivate your audience, boost your online presence, and drive results with engaging, 
           SEO-optimized content.
           </p> 
      </div>

      
        <div className='w-full h-full'>
          <Image src='/projects3.jpg' width={400} height={500} alt="hh"  />
        <h1 className= "text-2xl md:text-3xl my-4">Email Marketing</h1>
        <p className="text-gray-400 text-lg">Are your email campaigns leaving you longing for more opens, clicks, and conversions?
           Look no further! I specialize in crafting compelling, attention-grabbing email copy that
            gets results. </p> 
      </div>
    </div>
  </div>
  )
}

export default Services
