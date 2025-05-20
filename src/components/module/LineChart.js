// ApexChart.jsx
import React from 'react';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const LineChart = () => {
 const options = {
  chart: {
    type: 'line',
    toolbar: { show: false }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    title: {
      text: 'Months',
      style: {
        color: ['var(--colTextA)'],
        fontSize: '14px'
      }
    }
  },
  yaxis: {
    min: 0,
    max: 100,
    title: {
      text: 'Income ($)',
      style: {
        color: ['var(--colTextA)'],
        fontSize: '14px'
      }
    }
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  colors: ['var(--colTextA)'],
};

const series = [
  {
    name: 'Income',
    data: [10, 41, 35, 51, 49, 62]
  }
];

return (
  <div className='p-2 bg-[var(--colCard)] rounded-lg shadow-md'>
    <ApexChart options={options} series={series} type="line" height={350}  />
  </div>
  
);
};

export default LineChart;
