import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Pipeline = () => {
  const [stripePattern, setStripePattern] = useState(null);

  // Create a single blue stripe pattern using canvas
  useEffect(() => {
    const createStripePattern = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size for the pattern
      canvas.width = 10;
      canvas.height = 5;

      // Fill with white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw blue horizontal stripes
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 5);   // Draw line from left to right at mid-height
      ctx.lineTo(10, 5);
      ctx.stroke();

      return ctx.createPattern(canvas, 'repeat');  // Repeat the pattern horizontally
    };

    // Generate the blue stripe pattern
    const pattern = createStripePattern();
    setStripePattern(pattern);
  }, []);

  const data = {
    labels: ['New', 'In Progress', 'Pro Sent', 'Negotiation', 'Closed(won)', 'Closed(Lost)'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 8, 15, 10],  // 7 bars of data
        backgroundColor: Array(7).fill(stripePattern),  // Apply the same pattern to all 7 bars
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false }, // Hide legend
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='flex flex-col gap-6 border border-border rounded-lg p-4'>
      <div className="flex justify-center">
      {stripePattern && <Bar data={data} options={options} />}  {/* Render chart only when pattern is ready */}
    </div>
       <div className='flex justify-center items-center gap-3'>
        <div className='bg-btnBg h-2 w-2 '></div>2022
       </div>
    </div>
  );
};

export default Pipeline;
