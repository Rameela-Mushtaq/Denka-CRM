import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Website", "Referrals", "Ads"],
    datasets: [
      {
        label: "Sales",
        data: [14000, 17000, 12000],
        backgroundColor: [
          "rgba(225, 179, 142, 1)", // Color for Website
          "rgba(255, 142, 143, 1)", // Color for Referrals
          "rgba(255, 120, 197, 1)", // Color for Ads rgb(225,120,197)
        ],
        borderColor: [
          "rgba(225, 179, 142, 1)", // Color for Website
          "rgba(255, 142, 143, 1)", // Color for Referrals
          "rgba(255, 120, 197, 1)", // Color for Ads
        ],
        borderWidth: 1,
      },
    ],
  };



  const options = {
    responsive: true,
    cutout: "80%", // Reduces the thickness of the doughnut
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Custom Plugin for Center Text
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
      const { width } = chart;
      const { ctx } = chart;
      ctx.restore();

      const fontSize1 = Math.round(width / 10); // Dynamic font size based on width
      const fontSize2 = Math.round(width / 15);

      ctx.font = `bold ${fontSize1}px Arial`; // Lead Source text
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#212121";

      const textX = chart.getDatasetMeta(0).data[0].x;
      const textY = chart.getDatasetMeta(0).data[0].y - 10;

      ctx.fillText("Lead Source", textX, textY);

      ctx.font = `bold ${fontSize2}px Arial`; // Breakdown text
      ctx.fillStyle = "#212121";
      ctx.fillText("Breakdown", textX, textY + 24);
      ctx.save();
    },
  };


  return (
    <div className="flex flex-col justify-between gap-4 font-manrope w-full">
      <div className="lg:text-xl md:text-base text-sm font-bold text-primary ">Lead Source Breakdown</div>

      <div className="flex justify-center">
        <div className="lg:h-[250px] lg:w-[250px] md:w-[180px] md:h-[180px] h-[120px] w-[120px]">
          <Doughnut data={data} options={options} plugins={[centerTextPlugin]} className="w-72" />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 md:text-sm text-[10px]">
        <span className="flex items-center gap-1">
          <div className="md:w-3 w-2 h-2 md:h-3 bg-[#ffb38e] rounded-full"></div> Websites
        </span>
        <span className="flex items-center gap-1">
          <div className="md:w-3 w-2 h-2 md:h-3 bg-[#FF8E8F] rounded-full"></div> Referrals
        </span>
        <span className="flex items-center gap-1">
          <div className="md:w-3 w-2 h-2 md:h-3 bg-[#E178C5] rounded-full"></div> Ads
        </span>
      </div>

    </div>
  );
};

export default DoughnutChart;
