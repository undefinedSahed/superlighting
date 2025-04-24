import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="pt-8 lg:pt-14">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-5">
          <div className="lg:mr-20">
            <p className="text-[#727272] text-[16px]">
              The smartest guide to decorating kitchen cabinets to help optimize
              the area of family kitchen space.
            </p>
            <div className="flex flex-col lg:flex-row gap-3 mt-5 justify-center lg:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9DCA42] transition-all  shadow-sm"
              />
              <button className="bg-[#9DCA42] text-white px-6 py-2 rounded-lg font-semibold">
                SUBMIT
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start py-6 gap-4 text-3xl border-b-2 border-[#9DCA42]">
              <Link href="https://www.facebook.com/profile.php?id=100090851693362" target="_blank">
                <FaSquareFacebook className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              </Link>
              <IoLogoInstagram className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              <FaPinterest className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              <AiFillTwitterCircle className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
              <FaTiktok className="text-[#727272] hover:scale-110 hover:text-[#9DCA42] transition-all duration-300 cursor-pointer" />
            </div>
          </div>

          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="text-[#9DCA42] font-semibold text-[16px] pb-2">About us</li>
              <li className="text-[#727272] text-[16px]"><Link href="/about-us">Our Story</Link></li>
              <li className="text-[#727272] text-[16px]"><Link href="/jobs">Job Opportunities</Link></li>
              <li className="text-[#727272] text-[16px]"><Link href="/about-us">Store Locator</Link></li>
              <li className="text-[#727272] text-[16px]"><Link href="/about-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="text-[#9DCA42] font-semibold text-[16px] pb-2">Customer Service</li>
              <li className="text-[#727272] text-[16px]"><Link href="/myaccount">My Account</Link></li>
              <li className="text-[#727272] text-[16px]"><Link href="/terms">Term of Use</Link></li>
              <li className="text-[#727272] text-[16px]"><Link href="/return-policy">Deliveries & Returns</Link></li>
              <li className="text-[#727272] text-[16px]"><Link href="/about-us">Contact</Link></li>
            </ul>
          </div>

          <div className="">
            <ul className="flex flex-col gap-2">
              <li className="text-[#9DCA42] font-semibold text-[16px] pb-2">Get In Touch</li>
              <li className="text-[#727272] flex items-center gap-2"><Link href="/about-us">House: 110, Road: 02, Block: D, Pallabi 2nd Project, Rupnagar, Mirpur</Link></li>
              <li className="text-[#727272] text-[16px] flex gap-2 items-center"><span><IoCallOutline/></span><a href="callto:+8801724188240">+880 1724-188240</a></li>
              <li className="text-[#727272] text-[16px] flex items-center gap-2"><span><IoMailOpenOutline/></span><a href="mailto:superlightingbd1..gmail.com">superlightingbd1@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-3 lg:gap-0 justify-between lg:items-center py-5 mt-10">
          <p>&copy; Super Lighting BD - All rights reserved</p>
          <p>Design and developed by <Link href="https://mernsahed.netlify.app" target="_blank" className="font-bold text-[#9DCA42] underline">Md. Sahed Rahman</Link> and his team.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;