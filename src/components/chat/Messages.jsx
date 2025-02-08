import React from 'react'

const Messages = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* received messages */}
            <div className='flex flex-col gap-2'>
                <div className="flex items-start gap-2 relative ">
                    <div className='bg-[#E7E7E7] p-2 rounded-full flex items-center justify-center bottom-4 left-0 absolute'></div>
                    <div className='px-4 flex flex-col gap-1'>
                        <p className="bg-[#E7E7E7] py-2 px-6 lg:text-2xl sm:text-base text-sm rounded-[25px]">Hey There!</p>
                        <p className="lg:text-lg text-xs text-other pl-5 font-[300] ">Today, 8:30pm</p>
                    </div>
                </div>
                <div className="flex items-start gap-2 relative ">
                    <div className='bg-[#E7E7E7] p-2 rounded-full flex items-center justify-center bottom-4 left-0 absolute'></div>
                    <div className='px-4 flex flex-col gap-1'>
                        <p className="bg-[#E7E7E7] py-2 px-6 lg:text-2xl sm:text-base text-sm rounded-[25px]">How are you?</p>
                        <p className="lg:text-lg text-xs text-other pl-5 font-[300] ">Today, 8:30pm</p>
                    </div>
                </div>
            </div>

            {/* sent messages */}
            <div className='flex flex-col  gap-2 text-white'>
                <div className="flex  justify-end gap-2 relative ">
                    <div className='bg-[#1E2329] p-2 rounded-full flex items-center justify-center bottom-4 right-0 absolute'></div>
                    <div className='px-4 flex flex-col gap-1'>
                        <p className="bg-[#1E2329] py-2 px-6 lg:text-2xl sm:text-base text-sm rounded-[25px]">Hello!</p>
                        <p className="lg:text-lg text-xs text-other pl-5 font-[300] ">Today, 8:34pm</p>
                    </div>
                </div>
                <div className="flex justify-end gap-2 relative ">
                    <div className='bg-[#1E2329] p-2 rounded-full flex items-center justify-center bottom-4 right-0 absolute'></div>
                    <div className='px-4 flex flex-col gap-1'>
                        <p className="bg-[#1E2329] py-2 px-6 lg:text-2xl sm:text-base text-sm rounded-[25px]">I am fine and how are you?</p>
                        <p className="lg:text-lg text-xs text-other pl-5 font-[300] ">Today, 8:35pm</p>
                    </div>
                </div>
            </div>

            {/* received messages */}
            <div className="flex items-start gap-2 relative ">
                <div className='bg-[#E7E7E7] p-2 rounded-full flex items-center justify-center bottom-4 left-0 absolute'></div>
                <div className='px-4 flex flex-col gap-1'>
                    <p className="bg-[#E7E7E7] py-2 px-6 lg:text-2xl sm:text-base text-sm rounded-[25px]">I am doing well, Can we meet tomorrow?</p>
                    <p className="lg:text-lg text-xs text-other pl-5 font-[300] ">Today, 8:30pm</p>
                </div>
            </div>

            {/* sent messages */}
            <div className="flex  justify-end gap-2 relative  text-white">
                <div className='bg-[#1E2329] p-2 rounded-full flex items-center justify-center bottom-4 right-0 absolute'></div>
                <div className='px-4 flex flex-col gap-1'>
                    <p className="bg-[#1E2329] py-2 px-6 lg:text-2xl sm:text-base text-sm rounded-[25px]">Yes Sure!</p>
                    <p className="lg:text-lg text-xs text-other pl-5 font-[300] ">Today, 8:34pm</p>
                </div>
            </div>
        </div>
    )
}

export default Messages
