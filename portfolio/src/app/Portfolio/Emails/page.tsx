import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import content2 from '../../../../public/content2.jpg'
import content5 from '../../../../public/content5.png'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='flex md:flex-row flex-col justify-between items-center gap-12 m-20'>
          <div className='max-md:hidden flex-1'>
            <h1 className='md:text-3xl text-3xl font-bold my-10 text-center '>The Leading Real Estate Company in Kenya. <br />
             Kamuthi Housing Cooperative Society <br/> <span className='text-2xl italic'>(Green development for wealth creation)</span></h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-bold px-5 rounded-sm py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1zu4xokQ38LIsGCpy1-wBleBiroNwK2pJgbRSRqTQMBo/edit#heading=h.xg7bzulkow90' target="_blank">
                    READ HERE</a></button>
            </div> 
          </div>
          <div className='flex-1 w-full h-full'>
            <Image src={content2} alt='page' width={500} height={500} />
          </div>
          <div className='md:hidden flex-1'>
          <h1 className='md:text-3xl text-3xl font-bold my-10 text-center '>The Leading Real Estate Company in Kenya. <br />
             Kamuthi Housing Cooperative Society <br/> <span className='text-2xl italic'>(Green development for wealth creation)</span></h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-bold px-5 rounded-sm py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1zu4xokQ38LIsGCpy1-wBleBiroNwK2pJgbRSRqTQMBo/edit#heading=h.xg7bzulkow90' target="_blank">
                    READ HERE</a></button>
            </div> 
          </div>
        </div>

        <div className='flex md:flex-row flex-col justify-between items-center m-20'>
          <div className='flex-1 w-full h-full'>
            <Image src={content5} alt='page' width={500} height={500} />
          </div>
          <div className='max-md:hidden flex-1'>
            <h1 className='md:text-4xl text-3xl font-bold my-10 '>5 Reasons why you are the next victim to ‘wash wash’ in 
            Real Estate Kenya, 2023</h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-bold rounded-sm px-5 py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/16B06EBKdNk8wzNNnS8ZHnkUOBOPQ9S6rvwpqGPrl_2s/edit#heading=h.7u18o4kazsy' target="_blank">
                    READ HERE</a></button>
            </div> 
          </div>
        </div>

    <Footer />
    </div>
  )
}

export default page
