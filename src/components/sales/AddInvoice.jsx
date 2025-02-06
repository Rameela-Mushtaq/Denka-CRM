import React from 'react'
import Opener from '../shared/Opener'
import { RxCross2 } from "react-icons/rx";
import CustomInput from '../shared/CustomInput';

const AddInvoice = ({isOpen, onClose}) => {
  return (
    <Opener isOpen={isOpen} onClose={onClose}>
        <div className='font-manrope flex flex-col md:gap-8 gap-4'>
            <div className='flex justify-between items-center'>
                <div className='md:text-2xl text-lg font-bold'>Add New Invoice</div>
                <RxCross2 className='text-other text-2xl cursor-pointer' onClick={onClose}/>
            </div>
            <form action="" className='flex flex-col gap-6'>
                {/* number */}
               <CustomInput 
                label='Invoice Number'
                type='text'
                placeholder='Write here'
               />

               {/* Due Date */}
               <CustomInput 
                label='Due Date'
                type='date'
                placeholder='Write here'
               />

               {/* Client name */}
               <CustomInput 
                label='Client Name'
                type='text'
                placeholder='Name'
               />

                {/* Contact Number */}
                <CustomInput 
                label='Contact Number'
                type='tel'
                placeholder='Write here'
               />

                {/* amount */}
                <CustomInput 
                label='Amount'
                type='number'
                placeholder='Write Here'
               />        

                {/* Description */}
                <CustomInput 
                label='Payment terms'
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

export default AddInvoice
