import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPaperPlane } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Payment = () => {
  return (
    <section className="payment container w-full mx-auto py-12 px-4">
      <div className="container w-full mx-auto flex flex-col md:flex-row gap-8 items-center justify-center ">
        <div className="w-full md:w-1/2 flex flex-col gap-6  ">
          <form action="" method="post" className="w-full">
            <div className="bg-gray-100 border-2 border-gray-100 py-6 px-6 md:px-10">
              <div className="p-4 ">
                <p className="text-2xl text-center md:text-left">
                  Payment Method
                  <span className="">(Select a method)</span>
                </p>
              </div>

              <hr className="text-gray-300" />
              <div className="cash-on-delivery  gap-4 items-center justify-center md:justify-start my-4 ">
                <div className=" py-6 ">
                  <p className="text-xl">Pay After Delivary</p>
                </div>
                <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                  <input
                    type="radio"
                    name="payment"
                    id="cash-on-delivery"
                    value="cash-on-delivery"
                    className="w-5 h-5"
                  />
                  <GiTakeMyMoney className="text-3xl" />
                  <p>Cash On Delivary</p>
                </div>
              </div>

              <hr className="text-gray-300" />
              <div className="Mobile-wallet  gap-4 items-center justify-center md:justify-start my-4 ">
                <div className=" py-6 ">
                  <p className="text-xl">Mobile Wallet/Banking</p>
                </div>
                <div className=" flex flex-col sm:flex-col  sm:justify-start gap-4 md:flex-row  justify-center md:justify-start my-4 ">
                  <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                    <input
                      type="radio"
                      name="payment"
                      id="cash-on-delivery"
                      value="cash-on-delivery"
                      className="w-5 h-5"
                    />
                    <SiFreelancer className="text-3xl bg-" />
                    <p>bKash</p>
                  </div>
                  <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                    <input
                      type="radio"
                      name="payment"
                      id="cash-on-delivery"
                      value="cash-on-delivery"
                      className="w-5 h-5"
                    />
                    <GiTakeMyMoney className="text-3xl" />
                    <p>Nagad</p>
                  </div>
                  <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md">
                    <input
                      type="radio"
                      name="payment"
                      id="cash-on-delivery"
                      value="cash-on-delivery"
                      className="w-5 h-5"
                    />
                    <GiPaperPlane className="text-3xl" />
                    <p>Rocket</p>
                  </div>
                </div>

                <hr className="text-gray-300" />
                <div className="card-payment  gap-4 items-center justify-center md:justify-start my-4 ">
                  <div className=" py-6 ">
                    <p className="text-xl">Pay With Dabit/Credit Card</p>
                  </div>
                  <div className=" flex items-center gap-2 bg-white p-4 border-gray-300 border-2 rounded-md gap-4 md:flex-row">
                    <input
                      type="radio"
                      name="payment"
                      id="cash-on-delivery"
                      value="cash-on-delivery"
                      className="w-5 h-5"
                    />

                    <FaCcVisa className="text-4xl text-blue-500" />
                    <FaCcMastercard className="text-4xl text-blue-950" />
                    <SiAmericanexpress className="text-4xl text-blue-500" />
                  </div>
                </div>

                <hr className="text-gray-300" />
                <div className="flex flex-row md:flex-row p-4 gap-4 items-center">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-sm text-gray-900">
                      I have read and agree to the terms and conditions
                    </label>
                </div>
                
                <hr className="text-gray-300" />
                {/* <div className="flex flex-col md:flex-row p-4 gap-4 items-center ">
                  <button
                    className="bg-black text-white p-3 w-full md:w-auto"
                    type="submit"
                  >
                    Confirm Order
                  </button>
                </div> */}
                <div className="flex items-center justify-center p-4 w-full">
                    <button
                        className="bg-green-500 rounded text-white px-6 py-3"
                        type="submit"
                    >
                        Confirm Order
                    </button>   
                </div>


              </div>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6  ">
        
            <div className="w-full md:w-full bg-green-400 text-white border-2  py-6 px-6 md:px-10 ">
                <div className="p-4 ">
                    <p className="text-2xl text-center md:text-left">Order Summary</p>
                </div>

                <hr className="text-gray-300" />
                <div className="flex flex-col md:flex-row p-4 gap-4 items-center">
                    
                    <div className="icon-words flex justify-between gap-6 w-full md:w-1/2">
                       <div className="">
                         <h2 className="font-bold">SubTotal Amount</h2>
                       </div>
                       <div className="">
                            <p>৳ 5000</p>
                       </div>
                    </div>
                </div>

                <hr className="text-gray-300" />
                <div className="flex flex-col md:flex-row p-4 gap-4 items-center">
                    
                    <div className="icon-words flex justify-between gap-6 w-full md:w-1/2">
                        <div className="">
                            <h2 className="font-bold">Service Charge</h2>
                        </div>
                        <div className="">
                                <p>৳ 1000</p>
                        </div>
                        
                    </div>
                </div>

                <hr className="text-gray-300" />
                <div className="flex flex-col md:flex-row p-4 gap-4 items-center">
                    
                    <div className="icon-words flex justify-between gap-6 w-full md:w-1/2">
                        <div className="">
                            <h2 className="font-bold">Total Amount</h2>
                        </div>
                        <div className="">
                                <p>৳ 5000</p>
                        </div>
                        
                    </div>
                </div>

                <hr className="text-gray-300" />
                <div className="promo flex sm:flex-col">
                    <div className="flex flex-col md:flex-row p-4 gap-4 items-center">
                        <div className="icon-words w-full md:w-1/2">
                            <h2 className="font-bold">Promo Code</h2>
                            <p>Apply Promo Code</p>
                        </div>
                        <div className="">
                            <input className='bg-white rounded p-2 text-gray-800 ' type="text" />
                        </div>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className=" text-white p-6  md:px-10">
                        <button className='bg-white rounded text-green-500 px-6 py-3 w-full'>
                            Proceed To Checkout
                        </button>
                </div>

                
                

            </div>
            
            
        </div>
      </div>
    </section>
  );
}

export default Payment
