import React from 'react'
import Opener from '../shared/Opener'
import { RxCross2 } from "react-icons/rx";
import CustomInput from '../shared/CustomInput';

const AddLead = ({isOpen, onClose}) => {
  return (
    <Opener isOpen={isOpen} onClose={onClose}>
        <div className='font-manrope flex flex-col md:gap-8 gap-4'>
            <div className='flex justify-between items-center'>
                <div className='md:text-2xl text-lg font-bold'>Add New Task</div>
                <RxCross2 className='text-other text-2xl cursor-pointer' onClick={onClose}/>
            </div>
            <form action="" className='flex flex-col gap-6'>
                {/* name */}
               <CustomInput 
                label='Task Title'
                type='text'
                placeholder='Write here'
               />

               {/* selector */}
               <div className='flex flex-col gap-3'>
                <label >Assign To</label>
                <select name="" className='p-4 md:text-base text-sm text-other border border-border w-full rounded-lg outline-none'>
                    <option value="all">Select</option>
                </select>
                </div>

               {/* Company name */}
               <CustomInput 
                label='Due Date'
                type='date'
                
               />

                {/* selector */}
                <div className='flex flex-col gap-3'>
                <label >Priority</label>
                <select name="" className='p-4 md:text-base text-sm text-other border border-border w-full rounded-lg outline-none'>
                    <option value="all">Select</option>
                </select>
                </div>

                {/* Status */}
                <CustomInput 
                label='Status'
                type='text'
                placeholder='Write here'
               />
                

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

export default AddLead
