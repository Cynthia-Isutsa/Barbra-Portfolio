import Navbar from '@/components/Navbar'
import React from 'react'
import {BiLogoTelegram} from 'react-icons/bi'
import {AiOutlineInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineWhatsApp} from 'react-icons/ai'
import Link from 'next/link'

const pages = () => {
  return (
    <div>
      <Navbar />
      
      <div className='flex flex-col lg:flex-row justify-center items-center mt-20 lg:mx-72 max-lg:mx-8'>
        <div className='flex-1'>
        <h1 className='md:text-4xl text-3xl font-semibold text-center'>Would you like me to personally hand you YOUR million dollar blueprint, which is the key to double, triple or even quadruple your profits, for FREE?</h1>
          <p className='text-xl mt-10'>Hello Frieeeeeend,</p>
          <p className='text-xl my-2 italic'>(I totally pronounced that in a british accent,with the famous Klaus Mikaelson undertone)</p>
          <p className='text-2xl my-3 font-semibold'>It’s <span className='text-[#00c9c8]'>Wavomba Rites</span>  here.</p> 
          <p className='text-xl'>I am on the hunt for the “ideal” client. One with a vision, a thirst to achieve 
          remarkable <span className='italic text-[#00c9c8]'>business success. </span> 
          If you fit the bill, i will personally work with you, side by side, to bring your dream to life, for the next 
          <span className='text-[#00c9c8]'> six months </span>. Brace yourself, because together, we are about to
           multiply your profits by double, triple or even quadruple, starting <span className='text-[#00c9c8]'>immediately.</span></p>  
          <p className='text-xl my-3'>You want to know the best part? </p> 
          <p className='text-xl my-3'>Sit tight…this offer is available for….wait for it…(drumrolls please?)</p>
          <h1 className='text-7xl font-bold text-center text-[#00c9c8]'>Free!</h1>      
        </div> 
      </div>

    <div  className='bg-gray-900 py-6 mt-10 '>
      <div className='lg:mx-72 max-lg:mx-8'>
        <p className='text-xl'>To begin with, I am a sucker for letters, fiction, romance and british accents. </p> 
         <p className='text-xl my-3 italic'>(Does the Klaus Mikaelson comment deserve a mention? 
          Why, yes please. I am obsessed with the TVD villain!)</p>
        <p className='text-xl'>But, more than that, I am obsessed with establishing real connections with people, through the power of words.</p>
         <p className='text-xl my-3'>Back to business, </p>
         <p className='text-xl my-2'>The first thing that I am going to do for you is: to personally draft the <span className='text-[#00c9c8]'>strategic plan </span>
      that will bring you immediate money; through <span className='text-[#00c9c8]'>email marketing</span> and crafting of
      <span className='text-[#00c9c8]'> superior sales pages.</span> </p>
      <h1 className='text-3xl font-bold my-6 text-center text-[#00c9c8]'>AT NO CHARGE ABSOLUTELY</h1>
      <p className='text-xl font-semibold italic'>(I have done this with the current company
       I work at-oh, I am an accountant by profession by the way-and we have been getting pretty good and fast results)</p>
       </div>
    </div>

    <div className='lg:mx-72 max-lg:mx-8 mt-10'>
      <p className='text-xl'>Moreover, you can leave the heavy lifting to me. I'll guide you step by step on crafting the perfect message, 
      positioning your offer just right, and ensuring the money flows in effortlessly.</p>
      <p className='text-xl my-3 text-[#00c9c8]'>After we are done with the initial phase, two things will happen:</p>
      <p className='text-xl mt-4'><span className='font-bold'>Number one </span>, you will fall in love with the strategy, but decide to go your way and 
     implement it personally. If this is you, its absolutely okay. No pressure. I will be sad to see you go 
      <span className='italic'>(you see i get attached so easily)</span> but i wish you all the best of luck. 
          The best that can happen is that we will keep in touch and you will update me on your progres in the 
          implementation of the set strategy. </p>
      <p className='text-xl my-3'><span className='font-bold'>Number two,</span> you're going to adore the strategy, and I have no doubt you'll want to join my roster of clients. Once you do, 
      I'll be right by your side, assisting you in executing and maximizing your profits in no time. </p>
      <p className='text-xl mb-3'>This will be the best case scenario. Like I said, we can work together and knock it straight out of the park.</p>
    </div>
    
    <div className='bg-gray-900 mt-10 py-6'>
      <div className='lg:mx-72 max-lg:mx-8 '>
        <p className='text-xl'>This is a promise. You desire results. I know that, like the back of my hand. 
        And i respect that. So i give you the assurance that you will get results. Every single one of my clients does.</p>
        <p className='text-xl my-3 text-[#00c9c8]'>Every. Single. One. </p>
        <p className='text-xl italic'>(I pinky swear) </p>
        <p className='text-xl my-3'>It really is that simple. No catch. No booby traps.  </p>
        <p className='text-xl'>Think about it. Really. </p>
        <p className='text-xl my-3'>What is the worst that can happen? </p>
        <p className='text-xl'>You will go home, with an absolutely <span className='text-[#00c9c8] font-semibold'>free</span> strategy that will be your weapon to making you millions!</p>
        <p className='text-xl my-3'>The best that can happen is that i will get work alongside the incredible business owner that you are, and one on one, 
          take your industry by a storm, making profits over and over again. </p>
          <h1 className='text-3xl font-bold my-6 text-center text-[#00c9c8]'>That is why, this is the closest thing to Free money you will ever come across</h1>
      </div>
    </div>

    <div className='lg:mx-72 max-lg:mx-8 mt-10'>
      <h1 className='text-2xl font-semibold'>And here is how it will work:</h1>
      <p className='text-xl my-3'>1.	We will hop onto a discovery call (after setting an appointment in advance) and 
        one on one review your business. I will understand what you have, where you are at, what you do, some details 
        about your industry and your desires and goals for your business going forward. </p>
        <p className='text-xl'>2.	I will help create for you the multi million blueprint for your email and sales marketing, which will be unique to
         you and your business. It will increase your profits drastically, and like i said…at completely no charge at all. </p>
      <p className='text-2xl text-[#00c9c8] my-3 italic'>Eazzy peazzy, right?</p>
    </div>

    <div className='bg-gray-900 mt-10 py-6'>
      <div className='lg:mx-72 max-lg:mx-8 '>
        <p className='text-xl my-3'>I know what you are thinking right now-why is she offering this? </p>
        <p className='text-xl text-[#00c9c8]'>Two reasons: </p>
        <p className='text-xl my-3 text-center'><span className='font-bold'>ONE-</span> I enjoy it!I love writing and selling. It is what i do best 
        and it makes me very happy to see people and businesses profit from my skills set.</p>
        <p className='text-xl text-center'><span className='font-bold'>TWO-</span>This is how i attract my top tier clients. 
        If your result is that you will be happy and want to keep going, i will happily help implement all the strategies
         we come up with.</p>
        <p className='text-xl my-3'>I invite you to become my consulting clients and you are very much welcome to create massive profits for the long haul. </p>
        <p className='text-xl'>My fee is <span className='font-bold text-[#00c9c8]'>$800</span> a month, but if you 
        really think about it, it doesn’t cost you anything. </p> 
      </div>
    </div>

    <div className='lg:mx-72 max-lg:mx-8 mt-10'>
      <h1 className='text-2xl text-[#00c9c8] italic text-center'>Why!!!</h1>
      <p className='text-xl my-3'>Here's my unwavering commitment to you:  </p>
        <p className='text-xl'>•	I guarantee to double, triple, or even quadruple your profits from the get-go.</p>
        <p className='text-xl my-3'>•	And when we continue our collaboration over the next six months, I'm more than confident that we can double your profits. </p>
        <p className='text-xl'>•	I aim to do so with minimal investment on your part.  </p>
        <p className='text-xl my-3'>Actually, i can give you a plan to make more than $800 during our first 
        conversation-  <span className='text-2xl text-[#00c9c8] italic'>For Free!!!</span> </p>  
        <p className='text-xl'>Rest assured, you'll be reaping the benefits from the moment we start, and it won't 
        cost you a single penny.  </p>
        <p className='text-xl'>And look, if you don’t wanna be my client…no pressure at all. 
        I will not be sending you any sales pitch or something.</p>
    </div>

    <div className='bg-gray-900 mt-10 py-6'>
      <div className='lg:mx-72 max-lg:mx-8 '>
        <p className='text-xl my-3'>I respect your boundaries. <Link href='/' className='font-semibold underline'>You can however subscribe
         to my newsletter to keep getting doses of valuable information, again for FREE!</Link> </p>
        <p className='text-xl'>Obviously, this sounds like an amazing offer, which you probably will never see from any other writing or marketing “gurus”. </p>
        <p className='text-xl my-3'>Think…</p>
        <p className='text-xl'>I am personally generating you a free million dollar plan, up front, and letting you pay me later 
        <span className='italic'>(only if you find value in my work),</span> when we start working together.</p>
        <p className='text-xl my-3'>Plus, I have taken the <span className='font-bold text-[#00c9c8]'>BOLD </span>step 
        to guarantee you that this plan will be immensely valuable to you and your business. </p> 
        <p className='text-xl my-3'>Just say the word, and its yours. NO. QUESTIONS. ASKED. </p>
      </div>
    </div>
  
    <div className='lg:mx-72 max-lg:mx-8 mt-10'>   
          < h1 className='text-2xl text-[#00c9c8] text-center font-semibold'>Who else does this, you ask?  </h1>
          <h1 className='text-xl my-3'>The answer, just like the rest, is simple!</h1>
          <p className='text-xl font-semibold '>No ONE.</p>
          <p className='text-xl my-3'>I promise you, I checked. </p>
          <p className='text-xl'>Everyone in advertising and marketing position themselves as gurus, but I have the results to prove. </p> 
          <p className='text-xl my-3'>PERIOD. </p>
          <p className='text-xl'>After all, i spent four years in customer service, 
          ONE full year majoring in copywriting for a reason.</p>
          <p className='text-xl my-3'>What do you get when you combine a sales and marketing enthusiast who has killer writing skills? </p>
          <p className='text-xl'>You get <span className='font-bold text-[#00c9c8]'>Wavomba Rites </span>(Me). </p>
          <p className='text-xl my-3'>My stuff works and I know that if we work together, you will be making money in no time. </p> 
          <p className='text-xl'>Over the last four years, I consistently delivered annual revenue exceeding Ksh 20 million for my company, all while 
            operating in a remote area of Kenya. After I joined an investment company, I achieved an exceptional feat within just 
            three months – I successfully onboarded more than fifty prospects every month, maintaining
             an impressive 20% conversion rate week after week. This is a record that remains unmatched to this day.</p>
      </div>

    <div className='bg-gray-900 mt-10 py-6'>
      <div className='lg:mx-72 max-lg:mx-8 '>
      <p className='text-xl font-semibold'>As you can imagine, a lot of interest will be generated from this letter. </p>
      <p className='text-xl font-semibold my-3'>Which is why the next part is very important;</p>
      <p className='text-xl font-semibold'>Read it carefully</p>
      <h1 className='md:text-2xl text-xl my-3 font-semibold text-[#00c9c8] text-center'>THIS OFFER IS NOT FOR EVERYONE:</h1>
      <h1 className='md:text-2xl text-xl font-semibold  text-[#00c9c8] text-center'>HERE IS WHOM I CAN HELP</h1>
      <p className='text-xl my-3 font-semibold'>1.	You have a business. </p>
        <p className='text-xl'>Whether a start up, or solid already, you are set up in your industry. You are up and running and your need is to build on your foundation. </p>
        <p className='text-xl my-3 font-semibold'><span className='text-[#00c9c8]'>N/B: </span>I am not working with get rich quick people; so I expect no shenanigans, no clowning. </p>
        <p className='text-xl font-semibold'>2.	You already own a steady flow of customers. i.e you are already making stuff, and selling. You are very present and recognizable in your industry.   </p>
        <p className='text-xl my-3 font-semibold'>3.	Have a list.  </p>  
        <p className='text-xl'>I didn’t say long…. I said list. It doesn’t matter the size. Just have a solid number of people who have engaged you in your business.  </p>
        <p className='text-xl my-3 font-semibold'>4.	A good product- you’re product exists, is solid and reputable. We can only get your act together if you are trustworthy and own a legit business.   </p>  
        <p className='text-xl font-semibold'>5.	Must follow directions.  </p>  
        <p className='text-xl my-3'>In this, i mean during implementation. For us to work together, you have to trust me. Therefore you have to follow the set strategy to the latter
           to get immediate results.</p>
      <p className='text-xl mb-5 italic'>(don’t worry, i won’t be asking you to do anything weird)</p>
      <p className='text-xl my-3'>That’s it.</p>  
    </div>
    </div>

    <div className='lg:mx-72 max-lg:mx-8 mt-10'>   
          < h1 className='text-3xl text-[#00c9c8] text-center font-semibold'>Okay, now what next? </h1>
          <h1 className='text-xl my-3'>If you meet the above, and you want to get results as much as I want you to,
           I will happily set aside some time, out of my busy schedule for you. </h1>
          <p className='text-xl'>We can start talking about getting amazing results, only if you are all 
          for it. You know what, i will go ahead and let you know that you are going to look fierce fabulous while doing 
          it. </p>
          <p className='text-xl my-3'>On the onset, you will fill out an application form. </p>
          <p className='text-xl'>Again, not to worry dear friend. It is nothing complicated.  </p> 
          <p className='text-xl my-3'>It is just something special to help me understand you better, on the basis of your business.  </p>
          <p className='text-xl'>I will ask for a “real person” pledge of <span className='text-bold text-[#00c9c8]'>$50.</span></p>
          <p className='text-xl my-3'> Don’t worry, I could not give a tinker’s damn about it.</p>
          <p className='text-xl'>It is just a means to separate the chaff from the grain.  </p> 
          <p className='text-xl my-3'>I will refund it, send it back to you as soon as we hang up on the discovery call. </p>
          <p className='text-xl'>UNLESS, YOU DECIDE TO JOIN THE WAVOMBA RITES COMMUNITY. </p>
          <p className='text-xl my-3'>Then it will be applied to your balance. </p>
      </div>

      <div className='bg-gray-900 mt-10 py-6'>
      <div className='lg:mx-72 max-lg:mx-8 '>
      <p className='text-3xl text-center text-[#00c9c8] font-semibold'>After that, here is the final stage of what will happen.  </p>
      <p className='text-xl my-3'>After confirmation of the deposit, you will receive a call or email, FROM ME, <span className='italic font-bold'>(I ain’t got an assistant. Yet) </span> 
      and we will set up a time for us to talk soonest, in 48 hours or less. </p>
      <p className='text-xl'>Our initial call should last up to about 20-45 minutes, depending on your 
      overall picture and how we can paint it. </p>
      <p className='text-xl my-3'>I will take another 48 hours to painstakingly review, update and come up with an email and sales page multi-million dollar 
      winning strategy to start bringing in money immediately. </p>
        <p className='text-xl'> If you see value, and want to become a part of the RITERS community, like I said, 
        we will take this opportunity to talk about it. </p>
        <p className='text-xl my-3'>If you don’t want it, it’s okay too! I will refund you and we will hang 
        up. NO BIGGIE.</p>
        <p className='text-xl'>So, it is literally impossible to lose.  </p>
        <p className='text-xl font-semibold my-3'>WARNING!!!: This is a limited time offer. </p>
        <div className='flex flex-row justify-between items-center'>
          <p className='text-[20px] my-3 font-semibold text-[#00c8c9]'>IF THIS SOUNDS LIKE SOMETHING YOU DESIRE? LEAVE AN APPLICATION HERE </p>
          <a href='/Contact' ><BiLogoTelegram size={33} className='fill-white/80' /> </a>
        </div>
    </div>
    </div>

    <div className='lg:mx-72 max-lg:mx-8 my-10 text-center'> 
    <h1 className='text-4xl max-md:text-3xl text-center py-4 font-bold' >You aim to drive leads into Sales using the copywriting strategy?</h1>
          <p className='text-center text-xl pb-4'>Get a hand-picked series of WAVOMBA'S best tips to get your business on track</p>
          <p className='text-center text-xl pb-4'>Subscribe to my Newsletter, Join the 7,000+ subscribers who get free updates.</p>
          <div className='flex flex-col justify-center items-center'>
              <input type="text" placeholder='Enter Your Email Address' className='py-2 pl-2 lg:pr-[300px] md:pr-[200px] pr-[150px] bg-gray-300' />
            <button className='bg-[#00c9c8] my-3 text-black py-2 px-5 text-xl font-bold'>Sign Me Up!</button>
            <p className='text-xl'>No spam. Easily unsubscribe anytime.</p>
          </div>
      </div>

    
    <div className='bg-gray-900 py-8'>
        <div className='lg:mx-52 mx-10'>
          <div className='flex justify-between items-center mb-8'>
            <div className='flex justify-between items-center'>
              <p className=' text-xl font-semibold mr-8'> QUESTIONS</p>
              <p className='text-xl font-semibold'>CONTACT</p>
            </div>
            <div className='flex gap-5 pl-4'>
              <a href='/'><AiFillTwitterSquare size={27} className="fill-[#00c8c9]"/></a>
              <a href='/'><AiOutlineInstagram size={27} className="fill-[#00c8c9]"/></a>
              <a href='/'><AiFillLinkedin size={27} className="fill-[#00c8c9]"/></a>
              <a href='/'><AiOutlineWhatsApp size={27} className="fill-[#00c8c9]"/></a>
            </div>
            
          </div>
        <div className='border-b-[1px] border-gray-200 mt-5'></div>
        <p className='text-sm text-center mt-6'>© 2021 <span className='text-white'> Wavomba Rites</span>. Built by <span className='text-white'>Cynthia Isutsa</span></p>
      </div>
    </div>

    

    </div>
  )
}

export default pages
