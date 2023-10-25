import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import cynthia from '../../../../public/cynthia.jpg'
import content1 from '../../../../public/content1.jpg'
import content3 from '../../../../public/content3.png'
import content4 from '../../../../public/content4.jpg'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div>
        <Navbar />
        <div className='flex md:flex-row flex-col justify-between items-center gap-12 m-20'>
          <div className='max-md:hidden flex-1'>
            <h1 className='md:text-4xl text-3xl font-bold my-10 '>CYNTHIA’S WEBSITE ABOUT PAGE</h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold px-5 rounded-sm py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1s99WfJR8BHAVx3Gih4KXiqeQqZzWpVTn2_GAMiBbmeI/edit#heading=h.96ye42r8y1d' target="_blank">
                    Explore</a></button>
            </div> 
          </div>
          <div className='flex-1 w-full h-full'>
            <Image src={cynthia} alt='page' width={500} height={500} />
          </div>
          <div className='md:hidden flex-1'>
            <h1 className='md:text-4xl text-3xl font-bold my-10 '>CYNTHIA’S WEBSITE ABOUT PAGE</h1>
            <div className='flex mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold rounded-sm px-5 py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1s99WfJR8BHAVx3Gih4KXiqeQqZzWpVTn2_GAMiBbmeI/edit#heading=h.96ye42r8y1d' target="_blank">
                    Explore</a></button>
            </div> 
          </div>
        </div>

        <div className='flex md:flex-row flex-col justify-between items-center m-20'>
          <div className='flex-1 w-full h-full'>
            <Image src={content1} alt='page' width={500} height={500} />
          </div>
          <div className='max-md:hidden flex-1'>
            <h1 className='md:text-4xl text-3xl font-bold my-10 '>The story of how FIFTY Kenyans who respond TODAY 
            are going to win an invitation to experience a secret adventure of a lifetime!</h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold rounded-sm px-5 py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1Eth5LgXwT85iShDVu5mxvvGBWWHYGqwyTqz8pHG6vjI/edit#heading=h.pdg8jcfijupu' target="_blank">
                    Explore</a></button>
            </div> 
          </div>
        </div>

        <div className='flex md:flex-row flex-col justify-between items-center gap-12 m-20'>
          <div className='max-md:hidden flex-1'>
            <h1 className='md:text-3xl text-3xl font-bold my-10'>Find Your Perfect Property in Kenya today, with Kamuthi Housing Cooperative</h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold px-5 rounded-sm py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1mRz8ZHJbxlO97ielWpyONYBmbspQpeSw3jHE1Ba_ivE/edit#heading=h.5ptpgorkuy2r' target="_blank">
                    Explore</a></button>
            </div> 
          </div>
          <div className='flex-1 w-full h-full'>
            <Image src={content3} alt='page' width={500} height={500} />
          </div>
          <div className='md:hidden flex-1'>
          <h1 className='md:text-3xl text-3xl font-bold my-10 text-center '>Find Your Perfect Property in Kenya today, with Kamuthi Housing Cooperative</h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold px-5 rounded-sm py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1mRz8ZHJbxlO97ielWpyONYBmbspQpeSw3jHE1Ba_ivE/edit#heading=h.5ptpgorkuy2r' target="_blank">
                    Explore</a></button>
            </div> 
          </div>
        </div>

        <div className='flex md:flex-row flex-col justify-between items-center m-20'>
          <div className='flex-1 w-full h-full'>
            <Image src={content4} alt='page' width={500} height={500} />
          </div>
          <div className='max-md:hidden flex-1'>
            <h1 className='md:text-4xl text-3xl font-bold my-10 '>5 Reasons why you are the next victim to ‘wash wash’ in 
            Real Estate Kenya, 2023</h1>
            <div className='flex justify-center mt-5 mb-2'>
                <button className='bg-[#00c9c8] text-black text-xl font-semibold rounded-sm px-5 py-1 mb-3'>
                  <a href='https://docs.google.com/document/d/1nLDbB9jF_MdXWdTULchFaGxCiOG5-6ce8QUMElaWpc0/edit#heading=h.5twchecm9846' target="_blank">
                    Explore</a></button>
            </div> 
          </div>
        </div>

    <Footer />
    </div>
  )
}

export default page
