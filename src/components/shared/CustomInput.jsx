import React from 'react'

const CustomInput = ({label, type, placeholder}) => {
    return (
        <div className='flex flex-col md:gap-3 gap-1'>
            <label >{label}</label>
            {type === 'textarea' ? (
                <textarea
                    placeholder={placeholder}
                    className='p-4 text-other md:text-base text-sm border border-border w-full rounded-lg outline-none h-40 resize-none'
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className='p-4 text-other md:text-base text-sm border border-border w-full rounded-lg outline-none'
                />
            )}
        </div>
    )
}

export default CustomInput
