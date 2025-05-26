'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PieChart = () => {
    const data = [2100, 850, 400]
    const labels = ['سواری', 'سنگین', 'موتور']
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
            text: 'آمار تردد وسایل نقلیه',
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
                fontSize: '7px',
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
            <ApexChart options={options} series={data} type="pie" height={'100%'} />
        </div>
    );
};

export default PieChart

