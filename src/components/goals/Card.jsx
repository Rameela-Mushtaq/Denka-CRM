import React from 'react'
import { KpiData } from '../../data/data'
import CombinedChart from './Chart'
import Table from './Table'

const Card = () => {
  return (
    <div className='p-4 flex flex-col md:gap-6 gap-4 font-manrope'>
        {/* card */}
      <div className='border p-4 flex flex-col gap-5 border-border rounded-md'>
          <div className='text-xl font-bold'>KPI Dashboard Summary Cards</div>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {KpiData.map((item, index) => (
                <div key={index} className='border flex flex-col gap-3 border-border p-4 rounded-md'>
                 <div className="md:text-xl text-lg font-bold">{item.title}</div>
            <div className='md:text-base text-xs'>
            <div >Current Value: {item.value}</div>
            <div >Target: {item.target}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-[11px]">
                <span>Progress</span>
                <span>{item.progress}%</span>
              </div>
              <div className="w-full bg-[#D9D9D92B] rounded-sm h-4 ">
                <div
                  className={`${item.color} h-4 rounded-sm`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="md:text-sm text-xs">
              <span className="font-semibold">Description:</span> {item.description}
            </div>
                </div>
            ))}
          </div>
      </div>

       {/* chart */}
       <CombinedChart />

       {/* table */}
       <Table />
    </div>
  )
}

export default Card
