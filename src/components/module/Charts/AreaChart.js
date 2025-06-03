import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = ({ shadow, labelSize }) => {

    const{t} = useTranslation()

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // X-axis categories
      title: {
        text: t('month'),
        style: {
          color: ["var(--colTextA)"],
          fontSize: `${labelSize}px`,
        },
      },
    },
    yaxis: {
      min: 0,
      title: {
        text: t('totalCount'),
        style: {
          color: ["var(--colTextA)"],
          fontSize: `${labelSize}px`,
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#008ffb", "#00e396"], // Colors for the two lines
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
      data: [31, 40, 28, 51, 42, 109, 100], // Data for the first line
    },
    {
      name: "Low - 2013",
      data: [11, 32, 45, 32, 34, 52, 41], // Data for the second line
    },
  ];

  return (
    <div
      className={`w-[100%] h-full p-2 bg-[var(--colCard)] rounded-2xl  ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <ApexChart options={options} series={series} type="area" height={'100%'} />
    </div>
  );
};

export default AreaChart;