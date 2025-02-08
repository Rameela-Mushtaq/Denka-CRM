import React, { useState } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PermissionData } from '../../data/data';
import { FiSearch } from "react-icons/fi";
import Filtering from '../shared/Filtering';

const Permission = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = PermissionData.filter((item) =>
        item.role.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return (
        <div className="font-manrope">
            <div className="border border-border rounded-lg">
                {/* top bar */}
                <div className="flex justify-between flex-wrap gap-4 items-center py-6 px-4 border-b border-border">
                    <Filtering />
                    <div className="text-other font-medium flex gap-2 items-center ">
                        <FiSearch className='text-2xl' />
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
                    <table className="min-w-full min-h-full bg-white ">
                        <thead>
                            <tr className="text-left text-other whitespace-nowrap">
                                <th className="px-4 py-5">Role</th>
                                <th className="px-4 py-5">View Account</th>
                                <th className="px-4 py-5">View Contact</th>
                                <th className="px-4 py-5">Contact Number</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className="border-t border-border">
                                    <td className="py-5 px-4 truncate">{item.role}</td>
                                    <td className="py-5 px-4 truncate">{item.account}</td>
                                    <td className="py-5 px-4 truncate">{item.contact}</td>
                                    <td className="py-5 px-4">{item.number}</td>
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
    );
}

export default Permission;
