import React from "react";
import dynamic from "next/dynamic";
import { translate } from "@/language/language";
import { useDirectionContext } from "@/context/DirectionContext";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OverallAreaChart = ({ h, shadow, labelSize }) => {
  const { dir } = useDirectionContext();

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis categories
      title: {
        text: translate(dir, "lineChart.x_axis_text"),
        style: {
          color: ["var(--colTextA)"],
          fontSize: `${labelSize}px`,
        },
      },
    },
    yaxis: {
      min: 0,
      title: {
        text: translate(dir, "lineChart.y_axis_text"),
        style: {
          color: ["var(--colTextA)"],
          fontSize: `${labelSize}px`,
        },
      },
    },
    stroke: {
      curve: "straight",
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1E90FF", "#FF6347"], // Colors for the two lines
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  const series = [
    {
      name: "High - 2013",
      data: [5, 20, 27, 30,33, 31, 33], // Data for the first line
    },
    {
      name: "Low - 2013",
      data: [0, 11, 14, 18, 17, 13, 13], // Data for the second line
    },
  ];

  return (
    <div
      className={`w-[100%] p-2 bg-[var(--colCard)] rounded-2xl ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <ApexChart options={options} series={series} type="area" />
    </div>
  );
};

export default OverallAreaChart;
