import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";


const Forms = () => {
    return (
        <section className="contact-form py-12 px-4">
            <div className="container w-full mx-auto flex flex-col md:flex-row gap-8 items-center">
                
                
                <div className="w-full md:w-1/2 flex flex-col gap-6  ">
                        <div  className="flex gap-4 items-center">
                            <div className="icon ">
                                <IoLocationOutline className='!text-[200px]' size={45} />
                            </div>
                            <div className="icon-words w-full md:w-1/2">
                                <h2 className="font-bold">Store Address</h2>
                                <p>House: 110, Road: 02, Block: D, Pallabi 2nd Project, Rupnagar, Mirpur</p>
                            </div>
                        </div>
                        <div  className="flex gap-4 items-center">
                            <div className="icon">
                                <FiPhoneCall size={45} />
                            </div>
                            <div className="icon-words w-full md:w-1/2">
                                <h2 className="font-bold">Hotline</h2>
                                <p>+880 1724-188240</p>
                            </div>
                        </div>
                        <div  className="flex gap-4 items-center">
                            <div className="icon">
                                <MdOutlineEmail size={45} />
                            </div>
                            <div className="icon-words w-full md:w-1/2">
                                <h2 className="font-bold">Email Us</h2>
                                <p>superlightingbd1..gmail.com</p>
                            </div>
                        </div>
                        <div  className="flex gap-4 items-center">
                            <div className="icon">
                                <FaRegClock size={45} />
                            </div>
                            <div className="icon-words w-full md:w-1/2">
                                <h2 className="font-bold">Service Time</h2>
                                <p>24-hour (Monday - Sunday)</p>
                            </div>
                        </div>
                </div>

                
                <div className="w-full md:w-1/2 border-2 border-gray-200 py-6 px-6 md:px-10">
                    <form action="" method="post" className="w-full">
                        
                        <div className="p-4">
                            <p className="text-2xl text-center md:text-left">We are Here To Help You</p>
                        </div>

                        
                        <div className="flex flex-col md:flex-row p-4 gap-4">
                            <input required type="text" name="name" aria-label='name' placeholder="Name*" 
                                   className="border-2 border-gray-200 p-3 w-full" />
                            <input required type="phone" name="phone" aria-label='phone' placeholder="Phone Number*" 
                                   className="border-2 border-gray-200 p-3 w-full" />
                        </div>

                        
                        <div className="p-4 w-full">
                            <input required type="email" name="email" aria-label='email' placeholder="Email *" 
                                   className="border-2 border-gray-200 p-3 w-full" />
                        </div>

                        
                        <div className="p-4 w-full">
                            <textarea name="message" id="message" aria-label='message' placeholder="Message*" 
                                      className="border-2 border-gray-300 p-4 w-full h-32"></textarea>
                        </div>

                        
                        <div className="flex flex-col md:flex-row p-4 gap-4 items-center">
                            <div className="w-full flex items-center gap-2">
                                <input required type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className="text-sm text-gray-400">
                                    I have read and agree
                                </label>
                            </div>
                            <button className="bg-black text-white p-3 w-full md:w-auto" type='submit'>Submit</button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Forms;
