import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import "chart.js/auto";
import CustomSelector from "../shared/CustomSelector";

const Trend = () => {
  const [selectedMonth, setSelectedMonth] = useState("Monthly");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  // Chart Data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [12000, 14000, 13500, 16500, 14500, 16000, 1000], 
        backgroundColor: "rgba(137, 121, 255, 1)",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide legend
    },
    scales: {
      x: {
        grid: { display: false }, // No vertical lines
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Light grid lines
        },
        ticks: {
          callback: (value) => `$${value / 1000}k`, // Format labels
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 font-manrope">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="lg:text-xl md:text-base text-sm font-bold text-primary">Sales trends over time</div>
        <div>
          <CustomSelector value={selectedMonth} onChange={handleMonthChange} />
        </div>
      </div>
      <div className="flex justify-center lg:h-[280px] h-[150px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Trend;
