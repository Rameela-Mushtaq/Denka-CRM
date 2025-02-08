import React from "react";
import { Chart } from "react-chartjs-2";

const CombinedChart = () => {
  const data = {
    labels: [
      "Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        type: "bar",
        label: "2024",
        data: [170, 20, 260, 110, 125, 25, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderRadius: 5,
      },
      {
        type: "line",
        label: "2022",
        data: [170, 165, 25, 20, 260, 250, 100, 110, 60, 125, 30, 25],
        borderColor: "#8979FF",
        backgroundColor: "#8979FF",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#8979FF",
        tension: 0.4, // Smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
        ticks: {
          color: "#6b7280", // Gray color for Y-axis labels
        },
        grid: {
          color: "#e5e7eb", // Light gray grid lines
        },
      },
      x: {
        ticks: {
          color: "#6b7280",
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#6b7280",
          boxWidth: 12,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="p-4 border border-border rounded-lg">
      <div className='text-xl font-bold'>KPI Achievement</div>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-white">
      <Chart data={data} options={options} />
    </div>
    </div>
  );
};

export default CombinedChart;
