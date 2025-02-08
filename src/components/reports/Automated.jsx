import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import AddReport from './AddReport';
import { AutomatedData } from '../../data/data';

const Automated = () => {
  const [isTaskOpen, setIsTaskOpen] = useState(false)

  return (
    <div className="py-2 font-manrope">
            <div className="border border-border rounded-lg">
                {/* top bar */}
                <div className="flex justify-between flex-wrap  gap-4 items-center py-3.5 px-4 border-b border-border">
                    <div className="text-other font-medium lg:text-base text-sm lg:w-[60%]">
                    Automatically generate comprehensive reports on   | | KPIs, sales performance, and forecasts.
                    </div>

                    <button 
                        onClick={() => setIsTaskOpen(true)}
                        className="text-white p-2 md:text-base text-sm bg-btnBg md:p-3 w-fit whitespace-nowrap font-medium rounded-lg ">
                            + Add New Task
                        </button>
                </div>

                {/* table */}
                <div className="overflow-x-auto font-manrope">
                    <table className="min-w-full min-h-full  bg-white ">
                        <thead>
                            <tr className="text-left text-other whitespace-nowrap">
                                <th className="px-4 py-5">Report Name</th>
                                <th className="px-4 py-5">Description</th>
                                <th className="px-4 py-5">Last Generated</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {AutomatedData.map((item, index) => (
                                <tr key={index} className="border-t border-border md:text-base text-sm">
                                    <td className="py-5 px-4 truncate">{item.name}</td>
                                    <td className="py-5 px-4 truncate">{item.description}</td>
                                    <td className="py-5 px-4 truncate">{item.date}</td>            
                                    <td className="py-5 px-4 flex justify-center gap-2 text-other">
                                        <div className="p-2.5 w-fit rounded-lg border border-border flex justify-center items-center">
                                            <IoEyeOutline className="text-xl" />
                                        </div>
                                        <div className="p-2.5 w-fit rounded-lg border border-border flex gap-2 justify-center items-center">
                                            Download
                                            <LuDownload  className='text-xl'/>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <AddReport 
                isOpen={isTaskOpen} 
                onClose={() => setIsTaskOpen(false)} 
                />
            </div>
        </div>
  )
}

export default Automated
