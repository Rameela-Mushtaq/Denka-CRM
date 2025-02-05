import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import CustomSelector from "../shared/CustomSelector";

const TotalSales = () => {
  const [selectedMonth, setSelectedMonth] = useState("Monthly");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Revenue",
        data: [13500, 13000, 13200, 13700, 13500, 13000, 13800, 13400, 13600, 13500, 13000, 13500],
        borderColor: "rgba(255, 142, 143, 1)",
        backgroundColor: (context) => {
          const bg = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
          bg.addColorStop(0.2, "rgba(255, 99, 132, 0.4)");
          bg.addColorStop(0.5, "rgba(255, 99, 132, 0.1)");
          bg.addColorStop(1, "rgba(255, 255, 255, 0)");
          return bg;
        },
        // Smooth curves
        fill: true, // Enables gradient filling
        pointRadius: 0, // Point size
      },
      {
        label: "Order",
        data: [12500, 12300, 12600, 12300, 12600, 12500, 12700, 12300, 12400, 12600, 12500, 12700],
        borderColor: "rgba(225, 120, 197, 1)",
        backgroundColor: (context) => {
          const bg = context.chart.ctx.createLinearGradient(0, 0, 0, 300);
          bg.addColorStop(0, "rgba(153, 102, 255, 0.6)");
          bg.addColorStop(1, "rgba(153, 102, 255, 0)");
          return bg;
        },
        fill: false, // Enables gradient filling
        pointRadius: 0, // Point size
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,// Position the legend at the top
        labels: {
          usePointStyle: true, // Circular markers for legend
        },
      },
      tooltip: {
        mode: "index", // Show tooltip for all datasets
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false, // No vertical grid lines
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "rgba(0, 0, 0, 0.1)", // Light dotted grid lines
          borderDash: [5, 5], // Dotted effect
        },
        ticks: {
          callback: (value) => `$${value / 1000}k`, // Formats Y-axis labels
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-4 font-manrope">
      <div className='flex flex-wrap justify-between items-center gap-2 '>
        <div className="flex flex-wrap items-center md:gap-8 gap-4">
          <div className="lg:text-xl md:text-base text-sm font-bold text-primary ">Total Sales</div>
          <div className="flex items-center justify-center md:gap-4 gap-2 md:text-sm text-xs">
            <div className="flex items-center gap-2 
          ">
              <div className="w-3 h-3 bg-[#FF8E8F] "></div>
              Revenue
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#E178C5] "></div>
              Order
            </div>
          </div>
        </div>

        {/* Month Selector */}
        <div>
          <CustomSelector
            value={selectedMonth}
            onChange={handleMonthChange}
          />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalSales;
