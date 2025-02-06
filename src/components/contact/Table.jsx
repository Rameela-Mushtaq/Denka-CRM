import React, { useEffect, useState } from "react";
import Filtering from "../shared/Filtering";
import Sorting from "../shared/Sorting";
import { TableData } from "../../data/data";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import AddSales from "./AddSales";

const Table = () => {
    const [data, setData] = useState(TableData);
    const [filterStatus, setFilterStatus] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const [isSalesOpen, setIsSalesOpen] = useState(false)

    // Filter Handler
    const handleFilterChange = (status) => {
        setFilterStatus(status);
    };

    // Sort Handler
    const handleSortChange = () => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);
    };

    // Effect to apply filter and sort
    useEffect(() => {
        let filteredData = [...TableData];

        if (filterStatus) {
            filteredData = filteredData.filter(item => item.status === filterStatus);
        }

        if (sortOrder) {
            filteredData.sort((a, b) => {
                if (sortOrder === "asc") {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
        }

        setData(filteredData);
    }, [filterStatus, sortOrder]);

    // Clear Filters and Sorting
    const handleClearFilters = () => {
        setFilterStatus(null);
        setSortOrder(null);
        setData(TableData);
    };

    return (
        <div className="py-6 font-manrope">
            <div className="border border-border rounded-lg">
                {/* top bar */}
                <div className="flex justify-between flex-wrap  gap-4 items-center py-3.5 px-4 border-b border-border">
                    <div className="flex gap-10 md:pl-16">
                        <button
                            onClick={() => handleFilterChange("B2B")}
                            className={`font-medium ${filterStatus === "B2B" ? "text-btnBg" : ""
                                }`}
                        >
                            B2B
                        </button>
                        <button
                            onClick={() => handleFilterChange("B2C")}
                            className={`font-medium  ${filterStatus === "B2C" ? "text-btnBg" : ""
                                }`}
                        >
                            B2C
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-3">
                        {(filterStatus || sortOrder) && (
                            <button
                                onClick={handleClearFilters}
                                className="flex items-center whitespace-nowrap gap-3 border border-border px-4 py-3 rounded-lg font-medium text-other"
                            >
                                Clear
                            </button>
                        )}
                            <Filtering
                                onFilterChange={() =>
                                    handleFilterChange(filterStatus === "B2B" ? "B2C" : "B2B")
                                }
                            />
                            <Sorting onSortChange={handleSortChange} />
                        </div>

                        <button 
                        onClick={() => setIsSalesOpen(true)}
                        className="text-white p-2 md:text-base text-sm bg-btnBg md:p-3 w-fit whitespace-nowrap font-medium rounded-lg">
                            + Add Sales Record
                        </button>
                    </div>
                </div>

                {/* table */}
                <div className="overflow-x-auto font-manrope">
                    <table className="min-w-full min-h-full  bg-white ">
                        <thead>
                            <tr className="text-left text-other whitespace-nowrap">
                                <th className="px-4 py-5">Contact Name</th>
                                <th className="px-4 py-5">Email Address</th>
                                <th className="px-4 py-5">Company</th>
                                <th className="px-4 py-5">Phone Number</th>
                                <th className="px-4 py-5">Address</th>
                                <th className="px-4 py-5">Status</th>
                                <th className="px-4 py-5 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="border-t border-border">
                                    <td className="py-5 px-4 truncate">
                                        <Link to='/profile' className="flex gap-3.5">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                                className="object-contain"
                                            />
                                            {item.name}
                                        </Link>
                                    </td>

                                    <td className="py-5 px-4 truncate">{item.email}</td>
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
                                    <td className="py-5 px-4 truncate">{item.address}</td>
                                    <td className="py-5 px-4">
                                        <span
                                            className={`px-5 py-3 rounded-lg font-medium 
                                            ${item.status === "B2B" ? "bg-[#8979FF24]" : "bg-[#D5CBC621]"}`}
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

                <AddSales 
                isOpen={isSalesOpen} 
                onClose={() => setIsSalesOpen(false)} 
                />
            </div>
        </div>
    );
};

export default Table;
