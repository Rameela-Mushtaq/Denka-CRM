import React, { useState } from 'react'
import { ReminderTabData } from '../../data/data';

const Reminder = () => {
    const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='border border-border rounded-lg'>
      <div className='py-3 font-manrope flex flex-col lg:gap-6 gap-2'>
                 <div className=' flex flex-wrap border-b border-border items-center sm:justify-start justify-center gap-2'>
                 {ReminderTabData.map((tab, index) => (
                      <button
                          key={index}
                          onClick={() => setActiveTab(index)}
                          className={`px-4 py-2 text-other border-b-4 sm:ml-3 lg:text-base text-sm font-medium whitespace-nowrap ${activeTab === index
                              ? "border-btnBg"
                              : "border-transparent"
                              }`}
                      >
                        <div className='flex items-center gap-2'>
                            <img src={tab.icon} alt="icon" />
                            {tab.title}
                        </div>
                          
                      </button>
                  ))}
                 </div>
      
                  {/* Tab Content */}
                  <div className="">{ReminderTabData[activeTab].content}</div>
              </div>
    </div>
  )
}

export default Reminder
