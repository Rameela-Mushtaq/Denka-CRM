import React from 'react'
import { Bar } from 'react-chartjs-2';

const Distribution = () => {

  const data = {
    labels: ["New", "Contacted", "Qualified"],
    datasets: [
      {
        label: "B2B",
        data: [20, 90, 100],
        backgroundColor: [
          'rgba(255, 186, 134, 1)',
          'rgba(246, 99, 92, 1)',
          'rgba(121, 21, 91, 1)'
        ],
        barPercentage: 0.6, // ✅ Reduce bar width for spacing
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // ❌ Remove vertical grid lines

        },
      },
      y: {
        grid: {
          drawBorder: false, // Removes Y-axis border
          color: "rgba(0, 0, 0, 0.2)", // Light gray grid lines
        },
        ticks: {
          stepSize: 20, // ✅ Increases space between Y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 font-manrope">
      <div className='flex flex-wrap items-center xl:gap-16 gap-4'>
        <div className="lg:text-xl md:text-base text-sm font-bold text-primary ">Leads Distribution by Status</div>
        <div className='flex font-medium gap-8 text-xs'>
          <div>B2B</div>
          <div>B2C</div>
        </div>
      </div>
      <div className='className="flex justify-center lg:h-[280px] h-[150px]'>
          <Bar data={data} options={options} />
        </div>
    </div>
  );
};


export default Distribution
