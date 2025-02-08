import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { AutomatedData } from '../../data/data';
import { FiMinus } from "react-icons/fi";
import { HiMiniCalendarDays } from "react-icons/hi2";

import CustomizedSelector from '../shared/CustomizedSelector';

const Customize = () => {

  return (
    <div className="py-2 font-manrope">
            <div className="border border-border rounded-lg">
                {/* top bar */}
                <div className="flex lg:gap-12 lg:flex-row flex-col gap-4  py-3.5 px-4 border-b border-border">
                    <div className="
                    text-other font-medium lg:text-base text-sm lg:w-[30%] w-full">
                    Create tailored reports by selecting specific    date ranges and criteria.
                    </div>

                    <div className='flex-1 flex gap-6'>
                    <div className='flex md:gap-4 gap-2 items-center text-other'>
                    <button
                        className="text-other flex gap-2 border border-border p-2 md:text-base text-xs  md:p-3 w-fit whitespace-nowrap font-medium rounded-lg items-center">
                            12 jan, 2025
                            <HiMiniCalendarDays className='text-xl'/>
                    </button>
                    <FiMinus />
                    <button
                        className="text-other flex gap-2 border border-border p-2 md:text-base text-xs  md:p-3 w-fit whitespace-nowrap font-medium rounded-lg items-center">
                            12 jan, 2025
                            <HiMiniCalendarDays className='text-xl'/>
                    </button>
                    </div>
                    <CustomizedSelector text='Select Criteria'/>
                    <CustomizedSelector text='PDF'/>
                    </div>
                    

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

            </div>
        </div>
  )
}

export default Customize
