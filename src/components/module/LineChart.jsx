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
        color: '#666',
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
        color: '#666',
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
  <div>
    <ApexChart options={options} series={series} type="line" height={350}  />
  </div>
  
);
};

export default LineChart;
