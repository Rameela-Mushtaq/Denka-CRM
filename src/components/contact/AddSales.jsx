import React from 'react'
import CustomInput from '../shared/CustomInput'
import Opener from '../shared/Opener'
import { RxCross2 } from "react-icons/rx";

const AddSales = ({isOpen, onClose}) => {
  return (
    <Opener isOpen={isOpen} onClose={onClose}>
        <div className='font-manrope flex flex-col gap-8'>
            <div className='flex justify-between items-center'>
                <div className='md:text-2xl text-lg font-bold'>Add Sales Record</div>
                <RxCross2 className='text-other text-2xl cursor-pointer' onClick={onClose}/>
            </div>
            <form action="" className='flex flex-col md:gap-6 gap-4'>
                {/* name */}
                <div className='flex flex-col gap-3'>
                <label >Contact Name </label>
                <select name="" className='p-4 text-other md:text-base text-sm border border-border w-full rounded-lg outline-none'>
                    <option value="all">Select name</option>
                </select>
                </div>

                 {/* Date */}
               <CustomInput 
                label='Date'
                type='date'
               />

                {/* selector */}
                <div className='flex flex-col gap-3'>
                <label >Amount</label>
                <select name="" className='p-4 text-other md:text-base text-sm border border-border w-full rounded-lg outline-none'>
                    <option value="all">Select amount</option>
                </select>
                </div>
                
                {/* selector */}
                <div className='flex flex-col gap-3'>
                <label >Product/Service</label>
                <select name="" className='p-4 text-other md:text-base text-sm border border-border w-full rounded-lg outline-none'>
                    <option value="all">Select Product/Services</option>
                </select>
                </div>

                {/* Description */}
                <CustomInput 
                label='Notes'
                type='textarea'
                placeholder='Add Note here'
               />

               <button className='w-full whitespace-nowrap py-3 px-5 bg-btnBg text-white rounded-lg'>
                  Save
               </button>

            </form>
        </div>
    </Opener>
  )
}

export default AddSales
