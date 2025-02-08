import React from 'react'
import { PeopleData } from '../../data/data'

const People = () => {
    return (
        <div className='border border-border  flex flex-col gap-2 rounded-2xl p-2 sm:p-4'>
            <div className='font-bold md:text-xl sm:text-sm text-xs'>People</div>

            {PeopleData.map((item, index) => (
                <div key={index} className={`flex gap-2 py-1 sm:py-2.5 ${index !== PeopleData.length - 1 ? 'sm:border-b border-border' : ''}`}>
                    <img src={item.icon} alt="icon" className='object-contain' />
                    <div className='sm:flex hidden flex-col w-full'>
                        <div className='flex justify-between gap-2 items-center'>
                            <div className='font-semibold truncate lg:text-lg text-xs'>{item.name}</div>
                            <div className='font-[300px] lg:flex hidden text-other text-sm'>{item.time}</div>
                        </div>

                        <div className='xl:flex hidden justify-between item-center '>
                            <div className='font-[300px] text-other text-xs'>{item.message}</div>
                            {item.number && (
                                <div className='rounded-full bg-[#F24E1E] text-white px-1.5 py-0.5 text-xs'>
                                    {item.number}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default People
