import React from 'react'
import filter from '../../assets/icons/filter.png'

const Filtering = ({ onFilterChange }) => {
  return (
    <button
      className="flex items-center whitespace-nowrap gap-3 border border-border px-4 py-3 rounded-lg font-medium text-other"
      onClick={onFilterChange}
    >
     <img src={filter} alt="filter" />  
      Filter
    </button>
  )
}

export default Filtering
