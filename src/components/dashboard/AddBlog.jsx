import React from 'react'
import Opener from '../shared/Opener'
import { RxCross2 } from "react-icons/rx";
import CustomInput from '../shared/CustomInput';

const AddBlog = ({isOpen, onClose}) => {
  return (
    <Opener isOpen={isOpen} onClose={onClose}>
        <div className='font-manrope flex flex-col md:gap-8 gap-4'>
            <div className='flex justify-between items-center'>
                <div className='md:text-2xl text-lg font-bold'>Add Blog</div>
                <RxCross2 className='text-other text-2xl cursor-pointer' onClick={onClose}/>
            </div>
            <form action="" className='flex flex-col gap-6'>
                {/* name */}
               <CustomInput 
                label='Name'
                type='text'
                placeholder='Name'
               />

                {/* selector */}
                <div className='flex flex-col gap-3'>
                <label >Select category </label>
                <select name="" className='p-4 md:text-base text-sm text-other border border-border w-full rounded-lg outline-none'>
                    <option value="all">Select</option>
                </select>
                </div>
                
                 {/* Date */}
               <CustomInput 
                label='Date'
                type='date'
               />

                {/* Description */}
                <CustomInput 
                label='Description'
                type='textarea'
                placeholder='Add Note here'
               />

               <button className='w-full whitespace-nowrap py-3 px-5 bg-btnBg text-white rounded-lg'>
                  Submit
               </button>

            </form>
        </div>
    </Opener>
  )
}

export default AddBlog
