import React from 'react'
import { FiMoreVertical, FiSearch } from 'react-icons/fi'
import Group from './Group'
import People from './People'
import user8 from '../../assets/icons/user8.png'
import { HiOutlineVideoCamera } from "react-icons/hi2";
import Messages from './Messages'
import { FiPaperclip } from "react-icons/fi";
import { BsEmojiGrin } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";





const ChatPage = () => {
    return (
        <div className='sm:p-4 p-2 font-manrope'>
            <div className='flex sm:gap-6 gap-2'>
                {/* sidebar */}
                <div className='md:w-[30%] w-[20%] flex flex-col gap-2 md:gap-6'>
                    <div className="text-other font-medium flex gap-2 items-center border border-border p-2 sm:p-4 rounded-2xl sm:text-base text-xs">
                        <FiSearch className='text-2xl md:flex hidden' />
                        <input
                            type="text"
                            placeholder='Search'
                            className='outline-none'
                        />
                    </div>

                    <Group />
                    <People />
                </div>

                {/* chat box */}
                <div className='flex-1 flex flex-col sm:gap-8 gap-2 border border-border rounded-2xl pb-4 md:px-6 sm:px-4 px-2'>
                    <div className="flex items-center justify-between md:pl-3 py-3  bg-white border-b border-border">
                        <div className="flex items-center md:gap-4 gap-2">
                            <img src={user8} alt="Profile" className="w-10 h-10 " />
                            <div>
                                <h2 className="lg:text-3xl md:text-lg text-base font-semibold">Anil</h2>
                                <p className="md:flex hidden text-other text-xs lg:text-xl">Online - Last seen, 2.02pm</p>
                            </div>
                        </div>
                        <div className='flex gap-4 '>
                            <HiOutlineVideoCamera className="md:text-2xl text-lg" />
                            <FiMoreVertical className="md:text-2xl text-lg" />
                        </div>
                    </div>

                    <div className='py-6'>
                        <Messages />
                    </div>

                    <div className='bg-[#EFF6FCDE] sm:pl-4 pl-2 rounded-[25px] w-full flex justify-between items-center gap-1 lg:gap-3'>
                        <div className='flex gap-1 md:gap-3 items-center'>
                        <FiPaperclip className='rotate-180 lg:text-2xl sm:text-base text-xs' />
                        <input type="text" placeholder='Type your message here...' className='bg-transparent font-[300] text-[10px] sm:text-xs lg:text-lg outline-none' />
                        </div>

                        <div className='flex items-center lg:gap-6 gap-1'>
                            <div className='flex lg:gap-5 gap-2'>
                                <BsEmojiGrin className='lg:text-2xl sm:text-base text-xs'/>
                                <FiCamera className='lg:text-2xl sm:text-base text-xs'/>
                            </div>
                            <div className='bg-[#1E2329] lg:p-6 sm:p-4 p-2 rounded-[25px]'>
                                  <FaMicrophone className='lg:text-2xl sm:text-base text-xs text-white'/>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
