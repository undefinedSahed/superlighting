import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <section>
         <div className='container mx-auto my-6'>
            
            <div className='flex  flex-col items-cente w-[90%] px-5 py-5 rounded-2xl md:w-[30%] mx-auto shadow-[5px_5px_13px_rgba(0,0,0,0.5)] '>
            <h2 className='text-center text-3xl py-2'>SIGN IN</h2>
            <div>
                {
                    1>0? <h2 className='px-3 text-2xl text-green-400'>Congratulation Bro</h2>:  <p className='px-5 text-2xl text-green-400'>You Have Already Account</p>
                }
             
             
            </div>
                <form action="">
                   <div className='flex flex-col gap-2 py-4 '>
                   <div className='w-full'>
                        <input className=' outline-none border-2 border-gray-300 px-3 py-2 rounded-2xl w-full' type="text" placeholder='Enter Your First Name' required />
                    </div>
                   <div className='w-full'>
                        <input className=' outline-none border-2 border-gray-300 px-3 py-2 rounded-2xl w-full' type="email" placeholder='Enter Your Email Address' required />
                        <p className='text-red-500 pl-4 py-1 text-xs md:text-sm'>Enter your Right Email</p>
                    </div>
                    <div className='w-full'>
                        <input className='outline-none border-2 border-gray-300 px-3 py-2 rounded-2xl w-full' type="password" placeholder='Enter your Password' required />
                        <p className='text-red-500 pl-4 py-1 text-xs md:text-sm' >Enter you Right Password</p>
                    </div>
                    <div className='w-full'>
                        <input className=' outline-none border-2 border-gray-300 px-3 py-2 rounded-2xl w-full' type="text" placeholder='Enter Your City' required />
                    </div>
                    <div>
                    
                    <button className=' py-2  rounded-2xl bg-gradient-to-r w-full text-white from-[#bcef43] via-[#84cc16] to-[#77d330]' type='submit'>Create</button>
                    </div>
                   </div>
                </form>
                
            </div>

        </div>
    </section>
  )
}

export default SignUp
