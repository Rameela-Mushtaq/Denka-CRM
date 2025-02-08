import React from 'react'
import { MeetingData } from '../../data/data'

const Board = () => {
  return (
    <div className='px-4 pb-4'>
      <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4'>
        {MeetingData.map((task, index) => (
          <div key={index}
            className="border border-border rounded-lg shadow-sm py-3 px-4 bg-white flex flex-col gap-5 justify-between">
            <div className="flex flex-col gap-3 items-start">
              <img src={task.icon} alt="icon" />
              <div className='flex flex-col gap-3.5'>
                <div className='flex flex-col gap-2'>
                  <div className="font-semibold text-sm md:text-xl">{task.title}</div>
                  <div className="text-other bg-[#8979FF14] font-medium rounded-3xl text-[10px] w-fit py-1 px-2">{task.time}</div>
                </div>
                <div className='text-xs'>{task.description}</div>
                <div className="flex items-center">
                  {task.members.map((member, index) => (
                    <img
                      key={index}
                      src={member}
                      alt="member"
                      className="w-8 h-8 rounded-full border-4 border-white -ml-3.5 first:ml-0"
                    />
                  ))}
                </div>
              </div>
            </div>
            <button className="text-white p-2 md:text-base text-sm bg-btnBg md:p-3 w-full whitespace-nowrap font-medium rounded-lg ">
              Join Meeting
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
