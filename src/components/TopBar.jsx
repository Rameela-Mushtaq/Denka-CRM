import React, { useState } from 'react'
import bell from '../assets/images/bell.png'
import profile from '../assets/images/profile.png'
import { BsChevronDown } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import MobileBar from './MobileBar'

const TopBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State to control the mobile nav

  // Toggle the mobile nav visibility
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMenu = () => {
    setIsMobileNavOpen(false);
  };


  return (
    <div className='sticky z-50  top-0 font-manrope bg-white'>
      <div className='w-full flex justify-between items-center border-b border-border px-4 p-3.5'>
        <div className='text-primary font-bold md:text-2xl text-lg md:flex hidden'>
          Dashboard
        </div>

        <div className='md:flex hidden  gap-4 items-center'>
          <button className='text-white bg-btnBg p-3 w-fit whitespace-nowrap font-medium rounded-lg mr-2 lg:flex hidden'>
            + Add Blog
          </button>
          <div className='bg-[#F4F4F4] p-2 rounded-md'>
            <img src={bell} alt="" />
          </div>

          <div>
            <img src={profile} alt="" />
          </div>

          <div className='flex flex-col'>
            <div className='text-primary font-medium'>William John</div>
            <div className='text-other text-xs'>Businessmen</div>
          </div>

          <div className='text-secondary'>
            <BsChevronDown />
          </div>
        </div>

        <button className="md:hidden flex text-xl"
          onClick={toggleMobileNav}
        >
          <RiMenu3Fill />
        </button>

        <div className='md:hidden flex items-center gap-3'>
          <div>
            <img src={profile} alt="" />
          </div>

          <div className='flex flex-col'>
            <div className='text-primary font-medium'>William John</div>
            <div className='text-other text-xs'>Businessmen</div>
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        >
          <MobileBar />
        </div>
      )}
    </div>
  )
}

export default TopBar
