import React from 'react'
import { ContactCards } from '../../data/data'

const Cards = () => {
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4 font-manrope'>
          {ContactCards.map((item, index) => (
            <div key={index} className='border flex flex-col gap-5 border-border px-3 pt-5 pb-6 rounded-lg'>
              <div className='flex justify-between items-center'>
                <div className='text-primary flex flex-col gap-2'>
                  <div className='font-medium'>{item.title}</div>
                  <div className='text-2xl font-bold'>{item.price}</div>
                </div>
                <div className='border border-border rounded-lg p-2 mr-2'>
                  <img src={item.icon} alt="" />
                </div>
              </div>
    
              <div className='flex justify-between items-center'>
                <div className='text-sm font-medium'>
                  {item.desc}
                </div>
                <div className={`flex justify-center items-center py-1 px-3 rounded-xl gap-2 mr-2  ${index === 0 ? 'bg-[#FAEBEB] text-[#E01212]' : 'bg-[#F3FAEB] text-[#4BB817]'
                  }`}>
                  <div >
                    <img src={item.icon2} alt="" />
                  </div>
                  <div className='text-[11px]'>
                    {item.per}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Cards
