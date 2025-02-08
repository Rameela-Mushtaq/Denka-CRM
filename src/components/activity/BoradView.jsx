import React from 'react'
import { BoardData } from '../../data/data'

const BoradView = () => {
  return (
    <div className='px-6'>
      <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4'>
        {BoardData.map((task, index) => (
          <div key={index}
            className="border border-border rounded-lg shadow-sm p-3 bg-white flex flex-col lg:gap-8 gap-4 justify-between">
            <div className="flex gap-3 items-start">
              <div className="rounded-md border border-border flex flex-col items-center justify-center truncate text-sm text-center ">
                <div className='bg-btnBg px-3.5 py-0.5 border-b rounded-t-md md:text-base text-xs border-border text-white'>{task.day}</div>
                <div className="md:text-xs text-[10px] md:p-2 p-1 text-other ">{task.date}</div>
              </div>
              <div className='flex flex-col gap-3.5'>
                <div>
                <div className="font-semibold text-sm lg:text-xl">{task.title}</div>
                <div className="text-other font-medium text-xs lg:text-base">at {task.time}</div>
                </div>
                <div className="flex items-center">
                  {task.members.map((member, index) => (
                    <img
                      key={index}
                      src={member}
                      alt="member"
                      className="w-8 h-8 rounded-full border-2 border-white -ml-2.5 first:ml-0"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className='text-other pl-6 font-medium lg:text-sm text-xs'>
              Mark as completed
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoradView
