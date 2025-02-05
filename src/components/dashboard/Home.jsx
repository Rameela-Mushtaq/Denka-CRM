import React from 'react'
import Card from './Card'
import TotalSales from '../charts/TotalSales'
import LeadSource from '../charts/LeadSource'
import Trend from '../charts/Trend'
import Distribution from '../charts/Distribution'

const Home = () => {
  return (
    <div className='px-4 py-6 z-20'>
      <Card />
      <div className='py-6 flex flex-col gap-4'>
        <div className='flex lg:flex-row flex-col gap-4'>
          <div className='lg:w-[70%]  border border-border p-4 rounded-lg'>
             <TotalSales />
          </div>
          <div className='flex-1 flex  border border-border p-4 rounded-lg'>
             <LeadSource />
          </div>
        </div>


        <div className='flex lg:flex-row flex-col gap-4'>
          <div className='lg:w-1/2 border border-border p-4 rounded-lg '>
              <Trend />
          </div>
          <div className='flex-1 border border-border p-4 rounded-lg '>
              <Distribution />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
