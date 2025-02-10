import React, { useState } from 'react'
import AddMeeting from './AddMeeting'
import { FiSearch } from 'react-icons/fi'
import { MeetingTabData } from '../../data/data'

const Tab = () => {
    const [isMeetingOpen, setIsMeetingOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='p-4'>
            <div className='border border-border rounded-lg  flex flex-col gap-4'>
                <div className='flex flex-wrap p-4 justify-between gap-2'>
                    <div className="text-other font-medium flex gap-2 items-center md:pl-3">
                        <FiSearch className='md:text-2xl text-lg' />
                        <input
                            type="text"
                            placeholder='Search Here'
                            className='outline-none text-sm md:text-base'
                        />
                    </div>

                    <div className='flex  flex-wrap gap-6'>
                        <button
                            onClick={() => setIsMeetingOpen(true)}
                            className="text-white p-2 md:text-base text-sm bg-btnBg md:p-3 w-fit whitespace-nowrap font-medium rounded-lg ">
                            + Add New Meeting
                        </button>

                        <div className='flex gap-3'>
                        {MeetingTabData.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-3 py-2 rounded-md  whitespace-nowrap ${activeTab === index
                                    ? "btn-shadow"
                                    : "bg-transparent "
                                    }`}
                            >
                                <div className='w-6 h-6'>
                                <img src={tab.icon} alt="" />
                                </div>
                            </button>
                        ))}
                        </div>

                    </div>
                </div>
                 {/* Tab Content */}
                 <div className="">{MeetingTabData[activeTab].content}</div>
            </div>

            <AddMeeting
                isOpen={isMeetingOpen}
                onClose={() => setIsMeetingOpen(false)}
            />
        </div>
    )
}

export default Tab
