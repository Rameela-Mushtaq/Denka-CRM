import React, { useState } from 'react'
import { InvoiceData } from '../../data/data'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import AddInvoice from './AddInvoice';

const Invoice = () => {
   const [isInvoiceOpen, setIsInvoiceOpen] = useState(false)
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
                        onClick={() => setIsInvoiceOpen(true)}
                        className="text-white bg-btnBg p-3 w-fit whitespace-nowrap font-medium rounded-lg ">
                            + Add new Invoice
                        </button>
                </div>

                {/* table */}
                <div className="overflow-x-auto font-manrope">
                    <table className="min-w-full min-h-full  bg-white ">
                        <thead>
                            <tr className="text-left text-other whitespace-nowrap">
                                <th className="px-4 py-5">Qoute/Invoice</th>
                                <th className="px-4 py-5">Client Name</th>
                                <th className="px-4 py-5">Amount</th>
                                <th className="px-4 py-5">Status</th>
                                <th className="px-4 py-5">Date Issued</th>
                                <th className="px-4 py-5">Due Date</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {InvoiceData.map((item, index) => (
                                <tr key={index} className="border-t border-border">
                                    <td className="py-5 px-4 truncate">{item.invoice}</td>
                                    <td className="py-5 px-4 truncate">
                                        <div to='/profile' className="flex gap-3.5">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                            />
                                            {item.name}
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 truncate">{item.amount}</td>
                                    <td className="py-5 px-4">
                                        <span
                                            className={` py-3 rounded-lg font-medium 
                                            ${item.status === "Send" ? "bg-[#FFC1073B] px-7" : "bg-[#4BB8171C] px-8"}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="py-5 px-4 truncate">{item.date}</td>
                                    <td className="py-5 px-4 truncate">{item.dueDate}</td>
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

                <AddInvoice 
                isOpen={isInvoiceOpen} 
                onClose={() => setIsInvoiceOpen(false)} 
                />
            </div>
        </div>
  )
}

export default Invoice
