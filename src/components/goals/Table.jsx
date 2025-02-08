import React, { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GoalsData } from '../../data/data';
import { FiSearch } from "react-icons/fi";

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Step 2: Filter data based on search term
     const filteredData = GoalsData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) 
   );

  return (
    <div className="py-2 font-manrope">
            <div className="border border-border rounded-lg">
                {/* top bar */}
                <div className="flex justify-between flex-wrap  gap-4 items-center py-6 px-4 border-b border-border">
                    <div className='text-xl font-bold'>Goals Tracking</div>
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
                </div>

                {/* table */}
                <div className="overflow-x-auto font-manrope">
                    <table className="min-w-full min-h-full  bg-white ">
                        <thead>
                            <tr className="text-left text-other whitespace-nowrap">
                                <th className="px-4 py-5">Goal Type</th>
                                <th className="px-4 py-5">Goal Description</th>
                                <th className="px-4 py-5">Responsible Person</th>
                                <th className="px-4 py-5">Target</th>
                                <th className="px-4 py-5">Current Status</th>
                                <th className="px-4 py-5">Progress(%)</th>
                                <th className="px-4 py-5">Deadline</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className="border-t border-border">
                                    <td className="py-5 px-4 truncate">{item.type}</td>
                                    <td className="py-5 px-4 truncate">{item.description}</td>
                                    <td className="py-5 px-4 truncate">{item.name}</td>
                                    <td className="py-5 px-4"> {item.target} </td>
                                    <td className="py-5 px-4"> {item.status} </td>
                                    <td className="py-5 px-4"> {item.progress} </td>
                                    <td className="py-5 px-4"> {item.deadline} </td>
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

            </div>
        </div>
  )
}

export default Table
