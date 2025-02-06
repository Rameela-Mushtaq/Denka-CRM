import React from 'react'

const Opener = ({children, isOpen, onClose}) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 left-0 bg-[#E8E8E8AD] backdrop-blur-sm  transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`fixed top-0 bottom-0 right-0 sm:p-5 p-3 custom-scrollbar overflow-auto bg-white shadow-lg lg:w-[40%] md:w-[50%] sm:w-1/2 w-[80%] z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Opener
