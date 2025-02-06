import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { LeadData } from '../../data/data';
import { FiSearch } from "react-icons/fi";
import AddLead from './AddLead';

const Lead = () => {
  const [isLeadOpen, setIsLeadOpen] = useState(false)

  return (
    <div className="py-2 font-manrope">
            <div className="border border-border rounded-lg">
                {/* top bar */}
                <div className="flex justify-between flex-wrap  gap-4 items-center py-3.5 px-4 border-b border-border">
                    <div className="text-other font-medium flex gap-2 items-center md:pl-10">
                       <FiSearch className='text-2xl'/>
                        <input type="text" placeholder='Search Here' className='outline-none'/>
                    </div>

                    <button 
                        onClick={() => setIsLeadOpen(true)}
                        className="text-white p-2 md:text-base text-sm bg-btnBg md:p-3 w-fit whitespace-nowrap font-medium rounded-lg ">
                            + Add Sales Record
                        </button>
                </div>

                {/* table */}
                <div className="overflow-x-auto font-manrope">
                    <table className="min-w-full min-h-full  bg-white ">
                        <thead>
                            <tr className="text-left text-other whitespace-nowrap">
                                <th className="px-4 py-5">Lead Name</th>
                                <th className="px-4 py-5">Company</th>
                                <th className="px-4 py-5">Contact Info</th>
                                <th className="px-4 py-5">Status</th>
                                <th className="px-4 py-5">Last Contacted</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {LeadData.map((item, index) => (
                                <tr key={index} className="border-t border-border">
                                    <td className="py-5 px-4 truncate">
                                        <div to='/profile' className="flex gap-3.5">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                            />
                                            {item.name}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4">
                                        <div className="flex gap-3.5 truncate">
                                            <img
                                                src={item.icon2}
                                                alt="icon2"
                                                className="object-contain"
                                            />
                                            {item.company}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 truncate">{item.phone}</td>
                                    <td className="py-5 px-4">
                                        <span
                                            className={` py-3 rounded-lg font-medium 
                                            ${item.status === "New" ? "bg-[#8979FF3D] px-11" : "bg-[#4BB81726] px-5"}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4 truncate">{item.date}</td>
                                    <td className="py-5 px-4 flex justify-center">
                                        <div className="p-2 w-fit rounded-lg border border-border flex justify-center items-center">
                                            <BiDotsVerticalRounded className="text-other" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <AddLead 
                isOpen={isLeadOpen} 
                onClose={() => setIsLeadOpen(false)} 
                />
            </div>
        </div>
  )
}

export default Lead
