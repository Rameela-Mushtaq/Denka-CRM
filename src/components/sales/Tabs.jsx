import React, { useState } from 'react'
import { TabsData } from '../../data/data';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className='p-4 font-manrope flex flex-col lg:gap-6 gap-2'>
           <div className='border border-border rounded-lg p-4 flex flex-wrap sm:justify-start justify-center md:gap-4 gap-2'>
           {TabsData.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`md:px-7 px-4 md:py-4 py-2 rounded-md md:text-base text-sm font-medium whitespace-nowrap ${activeTab === index
                        ? "bg-btnBg text-white"
                        : "bg-transparent "
                        }`}
                >
                    {tab.title}
                </button>
            ))}
           </div>

            {/* Tab Content */}
            <div className="">{TabsData[activeTab].content}</div>
        </div>
    )
}

export default Tabs
