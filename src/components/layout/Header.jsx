import Link from 'next/link';
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-[#bcef43] via-[#84cc16] to-[#77d330]'>
      <div className='container mx-auto'>
        <div className='flex justify-between py-2 text-black text-[8px] px-4 md:px-0 md:text-[13px]'>
          <div className='flex gap-2'>
            <div className='flex gap-1 items-center'>
              <FaPhoneAlt />
              <a href='callto:+8801724188240'>+880 1724-188240</a>
            </div>
          </div>
            <div className='flex gap-1 items-center'>
              <MdOutlineMail />
              <a href='mailto:superlightingbd..gmail.com'>superlightingbd1@gmail.com</a>
            </div>
          <div className='flex gap-2'>
            <p><Link href="#">EN</Link></p>
            <p>|</p>
            <p><Link href='#'>বাংলা</Link></p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header