import React from 'react'
import { Months } from '../../data/data'
import { IoChevronDownOutline } from "react-icons/io5";
import calendar from '../../assets/images/calendar.png'

const CustomSelector = ({value, onChange}) => {
  return (
    <div className="relative">
        <div className='absolute inset-y-0 left-0 flex items-center px-2'>
            <img src={calendar} alt="calendar" />
        </div>
    <select
      value={value}
      onChange={onChange}
      className="block w-full pl-8 pr-4 py-2 md:text-sm text-xs text-gray-700 bg-white border border-border rounded-md shadow-sm outline-none appearance-none"
    >
      <option value="Monthly">
        Monthly
      </option>
      {Months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    <IoChevronDownOutline />
    </div>
  </div>
  )
}

export default CustomSelector
