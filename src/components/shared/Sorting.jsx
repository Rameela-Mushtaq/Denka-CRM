import React from 'react'
import  sort from "../../assets/icons/sort.png"

const Sorting = ({ onSortChange }) => {
  return (
    <button
      className="flex items-center  whitespace-nowrap gap-3 border border-border px-5 py-3 rounded-lg font-medium text-other"
      onClick={onSortChange}
    >
      <img src={sort} alt="sort" />
      Sort By
    </button>
  )
}

export default Sorting
