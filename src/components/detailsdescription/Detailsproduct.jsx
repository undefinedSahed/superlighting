"use client";
import { React, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from 'next/image';
import light1 from "../../../public/assets/LIght 10363.png";


const Detailsproduct = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <section className=" container mx-auto py-8">
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <section>
            <TabList>
              <div className="  flex gap-10 lg:p-0 px-5  cursor-pointer text-[20px]">
                <Tab>
                  <p
                    className={`  flex items-baseline font-semibold gap-2 ${
                      activeTab == 0
                        ? "underline underline-offset-3 text-[#2E2E2E]"
                        : "text-[#898989] font-semibold"
                    }`}
                  >
                    Description
                  </p>
                </Tab>

                <Tab>
                  <p
                    className={`  flex items-baseline font-semibold gap-2 ${
                      activeTab == 1
                        ? "underline underline-offset-3 text-[#2E2E2E]"
                        : "text-[#898989] font-semibold"
                    }`}
                  >
                    Reviews (45)
                  </p>
                </Tab>
              </div>
            </TabList>
          </section>

          <TabPanel>

            <div className='flex flex-col lg:flex-row justify-between'>

            <div className='lg:w-[45%] w-full lg:p-0 p-5'>

            <div>
              <div className="pt-8 ">
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat
              </div>

              <div className="py-6">
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna.
              </div>
            </div>

            <div>
              <h1 className="pb-6">Additional Information:</h1>

              <div className="flex gap-6">
                <div>
                  <h5 className="pb-8">Weight</h5>
                  <h5 className="pb-8">Quantity</h5>
                  <h5 className="pb-8">Color</h5>
                  <h5 className="pb-8">Dimensions</h5>
                  <h5 className="pb-8">Material</h5>
                </div>

                <div className="h-[248px] w-[2px] bg-[#727272]"></div>

                <div className=''>
                  <h5 className="pb-8  text-[#727272]   font-[16px] ">15 kg</h5>
                  <h5 className="pb-8  text-[#727272]   font-[16px] ">24</h5>
                  <h5 className="pb-8  text-[#727272]   font-[16px] ">
                    Yellow, Green
                  </h5>
                  <h5 className="pb-8 text-[#727272]   font-[16px] ">
                    Length 46cm x Width 75cm x Height 82cm
                  </h5>
                  <h5 className="pb-8 text-[#727272]   font-[16px] ">wood</h5>
                </div>
              </div>
            </div>
            </div>
            
            <div className="flex gap-6 px-5 lg:px-0 w-full lg:w-[50%] pt-8">

            <div >
              <span >
                 <Image
              key={light1}
              src={light1}
              alt="bulb-large"
              width={400}
              height={400}
              className="object-contain"
            />
              </span>

              <span className= 'py-6'>
                 <Image 
              key={light1}
              src={light1}
              alt="bulb-large"
              width={400}
              height={400}
              className="object-contain py-6"
            />
              </span>
            </div>

            <div >
              <span >
                 <Image
              key={light1}
              src={light1}
              alt="bulb-large"
              width={400}
              height={400}
              className="object-contain"
            />
              </span>

              <span className= 'py-6'>
                 <Image 
              key={light1}
              src={light1}
              alt="bulb-large"
              width={400}
              height={400}
              className="object-contain py-6"
            />
              </span>
            </div>

            </div>

            </div>



          </TabPanel>

          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    </>
  );
};

export default Detailsproduct;
