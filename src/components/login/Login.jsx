import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section>
          <div className='container mx-auto'>
            
              <div className='flex  flex-col items-cente w-[90%] px-5 py-5 rounded-2xl md:w-[30%] mx-auto shadow-[5px_5px_13px_rgba(0,0,0,0.5)] '>
              <h2 className='text-center'>SIGN IN</h2>
              <div>
                <h2 className='px-5 text-2xl text-green-400'>Loding Bro...</h2>
                
              </div>
                  <form action="">
                     <div className='flex flex-col gap-5 py-4 '>
                     <div className='w-full'>
                          <input className=' outline-none border-2 border-gray-300 px-3 py-2 rounded-2xl w-full' type="email" placeholder='Enter Your Email Address' required />
                          <p className='text-red-500 pl-4 py-1 text-xs md:text-sm'>Enter your Right Email</p>
                      </div>
                      <div className='w-full'>
                          <input className='outline-none border-2 border-gray-300 px-3 py-2 rounded-2xl w-full' type="password" placeholder='Enter your Password' required />
                          <p className='text-red-500 pl-4 py-1 text-xs md:text-sm' >Enter you Right Password</p>
                      </div>
                      <div>
                      <button className='py-2 px-5 text-sm'><Link href="# ">Forgot Your Password ?</Link></button>
                      <button className=' py-2  rounded-2xl bg-gradient-to-r w-full text-white from-[#bcef43] via-[#84cc16] to-[#77d330]' type='submit'>Login</button>
                      </div>
                     </div>
                  </form>
                  <div className=' flex justify-between items-center'>
                      <p className='text-[12px]'>Don't Have an Account ? Create Account</p>
                      <Link href="/signup"><button className='px-3 py-2 rounded-xl bg-gradient-to-r  from-[#bcef43] via-[#87c923] to-[#83e759] text-white hover:text-black'> Sign Up </button></Link>
                  </div>
              </div>

          </div>
    </section>
  )
}

export default Login
