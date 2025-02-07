import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ActivityData } from '../../data/data';
import { FiSearch } from "react-icons/fi";
import AddTask from './AddTask';

const Task = () => {
  const [isTaskOpen, setIsTaskOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');

  // Step 2: Filter data based on search term
     const filteredData = ActivityData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) 
   );

  return (
    <div className="py-2 font-manrope">
            <div className="border border-border rounded-lg">
                {/* top bar */}
                <div className="flex justify-between flex-wrap  gap-4 items-center py-3.5 px-4 border-b border-border">
                    <div className="text-other font-medium flex gap-2 items-center md:pl-10">
                       <FiSearch className='text-2xl'/>
                        <input 
                        type="text" 
                        placeholder='Search Here' 
                        className='outline-none'
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
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
                                <th className="px-4 py-5">Task Name</th>
                                <th className="px-4 py-5">Assigned To</th>
                                <th className="px-4 py-5">Due Date</th>
                                <th className="px-4 py-5">Status</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className="border-t border-border">
                                    <td className="py-5 px-4 truncate">{item.task}</td>
                                    <td className="py-5 px-4 truncate">
                                        <div to='/profile' className="flex gap-3.5">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                            />
                                            {item.name}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 truncate">{item.date}</td>
                                    <td className="py-5 px-4">
                                        <span
                                            className={` py-3 rounded-lg font-medium 
                                            ${item.status === "Pending" ? "bg-[#E6E6E63B] px-8" : "bg-[#4BB8171C] px-5"}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    
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

                <AddTask 
                isOpen={isTaskOpen} 
                onClose={() => setIsTaskOpen(false)} 
                />
            </div>
        </div>
  )
}

export default Task
