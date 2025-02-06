import React, { useState } from 'react'
import { OppertunityData, Statuses } from '../../data/data';

const Oppertunity = () => {
  const [statusFilter, setStatusFilter] = useState('New');

  const filteredCards =  OppertunityData.filter(card => card.status === statusFilter);

  return (
    <div className='py-4 md:py-0 font-manrope flex flex-col md:gap-6 gap-4'>
      <div className='grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-4 gap-2'>
        {Statuses.map((status) => (
          <button 
          key={status}
          onClick={() => setStatusFilter(status.label)}
          className={`text-start whitespace-nowrap py-2 md:py-3 md:px-6 px-3 lg:text-xl text-sm font-medium rounded-lg ${status.bgColor} ${status.textColor} ${statusFilter === status.label ? 'ring-1 ring-blue-500' : ''} `}>{status.label}</button> 
        ))}
      </div>

      <div className='grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2'>
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className='border border-border rounded-lg truncate px-4 pt-3 md:pb-8 pb-4 flex flex-col gap-3'
          >
            <div className="flex items-center gap-1.5">
              <div className={`w-8 h-8 flex items-center justify-center rounded-md text-white font-medium ${card.avatarColor}`}>J</div>
              <div>
                <div className="font-medium text-sm">{card.name}</div>
                <div className="text-[8px] text-gray-500">{card.email}</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className='text-other text-[10px] font-medium'>Opportunity Name: <span className='text-primary'>{card.opportunityName}</span></div>
              <div className='text-other text-[10px] font-medium'>Company: <span className='text-primary'>{card.company}</span></div>
              </div>
              <div className='font-medium'>Value: {card.value}</div>
              <div className='text-other text-[10px]'>Expected Close Date: {card.date}</div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Oppertunity
