'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { translate } from '@/language/language';
import { useDirectionContext } from '@/context/DirectionContext';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
    const { dir } = useDirectionContext();
    const data = [2100, 850, 400]
    const labels = [translate(dir , "PieChart.normal"), translate(dir , "PieChart.heavy"), translate(dir , "PieChart.motorcycle")]
    const colors = ['#ff6347', '#003049', '#1e90ff']

    const options = {
        chart: {
            type: 'pie',
        },
        labels,
        colors,
        plotOptions: {
            pie: {
                expandOnClick: true,
            },
        },
        stroke: {
            show: false,
            width: 4,
            colors: ['transparent'], // یا رنگ پس‌زمینه‌ات
        },
        title: {
            text: translate(dir ,"PieChart.title" ),
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontFamily: 'IRANSans, sans-serif',
                fontSize: '18px',
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                return val.toFixed(1) + '%';
            },
            offset:5,
            style: {
                fontSize: '8px',
                colors: ['#ffffff'], 
                fontFamily: 'IRANSans, sans-serif',
            },
            dropShadow: {
                enabled: false, // 
            },
        },
        tooltip: {
            y: {
                formatter: (val) => `${val} تردد`,
            },
        },
        legend: {
            position: 'bottom',
            fontFamily: 'IRANSans, sans-serif',
        },
    };



    return (
        <div className="w-full h-full">
            <ApexChart key={dir} options={options} series={data} type="pie" height={'100%'} />
        </div>
    );
};

export default PieChart

