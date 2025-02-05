import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { SideBarLinks } from '../data/data';


const Sidebar = () => {
  const [active] = useState("Dashboard");

  return (
    <div className='w-full h-full flex-grow pb-1 md:z-40 z-50 flex justify-between items-center flex-col pt-4 bg-white font-manrope'>
      <div className='flex flex-col items-start gap-2 w-[90%]'>
        {/* logo */}
        <div className='flex justify-center w-full pb-2'>
          <img src={logo} alt="logo" />
        </div>

        {/* search */}
        <div className='border border-border rounded-lg flex  gap-2 w-full items-center text-other p-2.5'>
          <div className='text-2xl'><CiSearch /></div>
          <input type="text" placeholder='Search' className='text-xs outline-none' />
        </div>

        {/* sidebar items */}
        <div className='flex flex-col w-full'>
          {SideBarLinks.map((item, index) => (
            <div key={index} className='flex flex-col'>

              {/* Category Heading */}
              {item.category && (
                <div className='pt-2'>
                  {index !== 0 && <hr className="border-gray-300 my-3" />} {/* Divider */}
                  <div className="text-xs font-medium text-secondary">{item.category}</div>
                </div>
              )}

              <div className={`flex gap-2 px-2.5 items-center whitespace-nowrap my-2 text-secondary rounded-lg transition cursor-pointer ${active === item.name ? "bg-[#F0EDFF] border border-[#8A73E8] rounded-lg py-1" : ""
                }`} >
                <div>
                  <img src={item.icon} alt="icon" />
                </div>
                <div className='flex items-center py-2 w-full font-medium text-secondary'>
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
