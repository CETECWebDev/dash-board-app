// ApexChart.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import { translate } from '@/language/language';
import { useDirectionContext } from '@/context/DirectionContext';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const LineChart = ({h , shadow , labelSize}) => {
const { dir } = useDirectionContext();
 const options = {
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom:{
      enabled:false
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    title: {
      text: translate(dir,'lineChart.x_axis_text'),
      style: {
        color: ['var(--colTextA)'],
        fontSize: `${labelSize}px`
      }
    }
  },
  yaxis: {
    
    min: 0,
    // max: 100,
    title: {
      text: translate(dir,'lineChart.y_axis_text'),
      style: {
        color: ['var(--colTextA)'],
        fontSize: `${labelSize}px`
      }
    }
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  colors: ['var(--colTextA)'],

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
    name: 'Income',
    data: [10, 41, 35, 51, 49, 62]
  }
];

return (
  <div className={`w-[100%]  p-2 bg-[var(--colCard)] rounded-2xl ${shadow ? 'shadow-lg' : ''}`}>
    <ApexChart options={options} series={series} type='line' height={h} />
  </div>
  
);
};

export default LineChart;
