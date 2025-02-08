import React, { useState } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AccountData } from '../../data/data';
import { FiSearch } from "react-icons/fi";
import Filtering from '../shared/Filtering';

const Account = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = AccountData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
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
                                <th className="px-4 py-5">Account ID</th>
                                <th className="px-4 py-5">Account Name</th>
                                <th className="px-4 py-5">Contact Name</th>
                                <th className="px-4 py-5">Contact Number</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className="border-t border-border">
                                    <td className="py-5 px-4 truncate">{item.accountId}</td>
                                    <td className="py-5 px-4 truncate">{item.name}</td>
                                    <td className="py-5 px-4 truncate">{item.contactName}</td>
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

export default Account;
