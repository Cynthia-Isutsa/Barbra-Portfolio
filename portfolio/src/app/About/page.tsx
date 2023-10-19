import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import about from '../../../public/about.jpg'
import about2 from '../../../public/about2.jpg'

const pages = () => {
  return (
    <div>
      <Navbar />
      
      <div className='flex flex-col lg:flex-row justify-center items-center my-20 md:mx-16 max-md:mx-8'>
        <div className='flex-1 max-lg:mb-6'>
          <Image src={about} alt='' width={500} height={500}/>
        </div>
        <div className='flex-1'>
        <h1 className='italic text-xl'>Hi!!!</h1>
          <p className='text-3xl my-2 font-semibold'>It’s <span className='text-[#00c9c8]'>Wavomba Rites</span>  here.</p>
          <p className='text-2xl my-2 italic'>I will introduce myself later but first let's talk about why you here!!!</p>
          <p className='text-2xl'>I am on the hunt for the “ideal” client. One with a vision, a thirst to achieve 
          remarkable <span className='italic text-[#00c9c8]'>business success. </span> 
          If you fit the bill, i will personally work with you, side by side, to bring your dream to life, for the next 
          <span className='text-[#00c9c8]'> six months </span>. </p>  
        </div> 
      </div>

    <div  className='bg-gray-900 py-6'>
      <div className='lg:mx-52 mx-10 mt-4'>
        <p className='text-2xl'>Brace yourself, because together, we are about to multiply your profits by double, triple
         or even quadruple, starting immediately. <span className='text-[#00c9c8] text-2xl my-2'>You want to know the best part?</span> </p> 
         <p className='text-2xl my-4'>Sit tight…this offer is available for….wait for it…(drumroll please?) </p>
         <h1 className='text-7xl font-bold text-center text-[#00c9c8]'>Free!</h1>
        </div>
    </div>

    <div className='lg:mx-52 mx-10 mt-10 mb-5'>
      <p className='text-2xl'>To begin with, I am a sucker for letters, fiction, romance and british accents.</p>
      <p className='italic'>(Does the Klaus Mikaelson comment deserve a mention? Why, yes please. I am obsessed with the TVD villain!)</p>
      <p className='text-2xl mt-4'>But, more than that, I am obsessed with establishing real connections with people, through the power of words. </p>
      <p className='text-2xl my-6'>Back to business, </p>
      <p className='text-2xl my-2'>The first thing that I am going to do for you is: to personally draft the <span className='text-[#00c9c8]'>strategic plan </span>
      that will bring you immediate money; through <span className='text-[#00c9c8]'>email marketing</span> and crafting of
      <span className='text-[#00c9c8]'> superior sales pages.</span> </p>
      <h1 className='text-4xl font-bold my-3 text-center text-[#00c9c8]'>AT NO CHARGE ABSOLUTELY</h1>
      <p className='text-2xl font-semibold'><span className='text-[#00c9c8] italic'>PS: </span>I have done this with the current company I work at-oh,
         i am an accountant by profession by the way-and we have been getting pretty good and fast results</p>
    </div>
    
    <div className='bg-gray-900 py-9'>
      <div className='lg:mx-52 mx-10'>
        <p className='text-2xl'>Moreover, you can leave the heavy lifting to me. I'll guide you step by step on crafting the perfect message, 
          positioning your offer just right, and ensuring the money flows in effortlessly.</p>
        
      </div>
    </div>

    <div className='lg:mx-52 mx-10 mt-10'>
      <p className='text-2xl mb-3'>After we are done with the initial phase, <span className='text-[#00c9c8]'>two things</span> will happen:</p>
        <p className='text-2xl mb-3'>1. You will fall in love with the strategy, but decide to go your way and implement it personally. 
        If this is you, its absolutely okay. No pressure. I will be sad to see you go <span className='italic'>(you see i get attached so easily)</span> but i wish you all the best of luck. 
          The best that can happen is that we will keep in touch and you will update me on your progres in the implementation
          of the set strategy. </p>
        <p className='text-2xl mb-3'>2. You're going to adore the strategy, and I have no doubt you'll want to join my roster of clients. Once you do,
           I'll be right by your side, assisting you in executing and maximizing your profits in no time.</p>
        <p className='text-2xl mb-3'>This will be the best case scenario. Like i said, we can work together and knock it straight out of the park.
          This is a promise. You desire results. I know that, like the back of my hand. And i respect that. So i give you 
          the assurance that you will get results. Every single one of my clients does. </p>
          <p className='text-3xl mb-3 text-[#00c9c8]'>Every. Single. One. </p>
    </div>

    <div className='bg-gray-900 py-8'>
      <div className='lg:mx-52 mx-10'>
        <p className='text-2xl mb-2'>It really is that simple. No catch. No booby traps. </p>
        <p className='text-2xl mb-2'>Think about it. Really. </p>
        <p className='text-2xl mb-2'>What is the worst that can happen?</p>
        <p className='text-2xl mb-2'>You will go home, with an absolutely free strategy that will be your weapon to making you millions!</p>
        <p className='text-2xl'>The best that can happen is that i will get work alongside the incredible business owner that you are, and one on one, 
          take your industry by a storm, making profits over and over again. </p>
      </div>
    </div>

    <div className='lg:mx-52 mx-10 mt-6'>
      <h1 className='text-3xl text-[#00c9c8]'>This is how it will work:</h1>
      <p className='text-2xl my-2'>1.	We will hop onto a discovery call (after setting an appointment in advance) and 
        one on one review your business. I will understand what you have, where you are at, what you do, some details 
        about your industry and your desires and goals for your business going forward. </p>
        <p className='text-2xl'>2.	I will help create for you the multi million blueprint for your email and sales marketing, which will be unique to
         you and your business. It will increase your profits drastically, and like i said…at completely no charge at all. </p>
      <p className='text-3xl text-[#00c9c8] my-2 italic'>Eazzy peazzy, right?</p>
    </div>

    <div className='flex flex-col lg:flex-row justify-center items-center my-20 md:mx-16 max-md:mx-8'>
        <div className='flex-1 max-lg:mb-6'>
          <Image src={about2} alt='' width={500} height={500}/>
        </div>
        <div className='flex-1'>
          <h1 className='text-xl italic'>I know what you are thinking right now-why is she offering this?</h1>
          <p className='text-2xl my-2 font-semibold '>Two reasons:</p>
          <p className='text-2xl my-2 text-[#00c9c8]'>1. I enjoy it! </p>
          <p className='text-2xl'>I love writing and selling.</p> 
          <p className='text-2xl my-2'>It is what I do best and it makes me very happy to see people and businesses
           profit from my skills set.</p>
          <p className='text-2xl mb-2 text-[#00c9c8]'>2. This is how I attract my top tier clients. </p>
          <p className='text-2xl'>I love making my clients happy.</p>
        </div> 
      </div>

      <div className='bg-gray-900 py-8'>
        <div className='lg:mx-52 mx-10'>
        <p className='text-2xl mb-2'>I invite you to become my consulting clients and you are very much welcome to create massive
         profits for the long haul. </p>
        <p className='text-2xl'>My fee is <span className='font-bold text-[#00c9c8]'>$800</span> a month, but if you 
        really think about it, it doesn’t cost you anything. </p>   
      </div>
    </div>

    <div className='lg:mx-52 mx-10 mt-6'>
      <h1 className='text-3xl text-[#00c9c8] italic text-center'>Why!!!</h1>
      <p className='text-2xl my-2'>Here's my unwavering commitment to you:  </p>
        <p className='text-2xl'>•	I guarantee to double, triple, or even quadruple your profits from the get-go.</p>
        <p className='text-2xl my-2'>•	And when we continue our collaboration over the next six months, I'm more than confident that we can double your profits. </p>
        <p className='text-2xl'>•	I aim to do so with minimal investment on your part.  </p>
        <p className='text-2xl my-2'>Actually, i can give you a plan to make more than $800 during our first conversation-   </p>  
      <p className='text-3xl text-[#00c9c8] mb-5 italic'>For Free!!!</p>
    </div>
    
    <div className='bg-gray-900 py-8'>
        <div className='lg:mx-52 mx-10'>
        <p className=' text-2xl md:text-4xl mb-2 text-center'>Wanna learn more </p>
        <p className='text-2xl text-center'>Subscribe to my Newsletter, 
        Join the 7,000+ subscribers who get free updates. </p>
          <div className='flex justify-center items-center mt-3' >
          <button className='bg-[#00c9c8] text-xl text-black font-semibold px-4 py-1'><a href='/'>Yes! Sign Me Up!!</a></button>  
          </div>
        <div className='border-2 border-gray-200 mt-5'></div>
        <p className='text-sm text-center mt-6'>© 2021 <span className='text-white'> Wavomba Rites</span>. Built by <span className='text-white'>Cynthia Isutsa</span></p>
      </div>
    </div>

    </div>
  )
}

export default pages
