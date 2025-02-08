import React, { useState } from 'react';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { EcomData } from '../../data/data';
import { FiSearch } from "react-icons/fi";
import Filtering from '../shared/Filtering';

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = EcomData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
     );

  return (
    <div className="p-4 font-manrope">
      <div className="border border-border rounded-lg">
        {/* top bar */}
        <div className="flex justify-between flex-wrap gap-4 items-center py-6 px-4 border-b border-border">
          <div className='md:text-base text-sm font-medium text-other md:w-[45%]'>
            Automated system to send follow-up emails to customers who have abandoned their carts.
          </div>
          <div className="text-other font-medium flex gap-2 items-center ">
            <div className="flex gap-3">
            
              <Filtering />
            </div>
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
          <table className="min-w-full min-h-full bg-white ">
            <thead>
              <tr className="text-left text-other whitespace-nowrap">
                <th className="px-4 py-5">Order ID</th>
                <th className="px-4 py-5">Date</th>
                <th className="px-4 py-5">Amount</th>
                <th className="px-4 py-5">Customer</th>
                <th className="px-4 py-5">Email Sent</th>
                <th className="px-4 py-5">Status</th>
                <th className="px-4 py-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="py-5 px-4 truncate">{item.orderId}</td>
                  <td className="py-5 px-4 truncate">{item.date}</td>
                  <td className="py-5 px-4 truncate">{item.amount}</td>
                  <td className="py-5 px-4">{item.name}</td>
                  <td className="py-5 px-4">{item.emailSent}</td>
                  <td className="py-5 px-4">
                    <span className={`py-3 rounded-lg font-medium ${item.bgColor}`}>
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

      </div>
    </div>
  );
}

export default Table;
