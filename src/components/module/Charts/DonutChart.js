'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { translate } from '@/language/language';
import { useDirectionContext } from '@/context/DirectionContext';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChart = () => {
    const { dir } = useDirectionContext();
    const data = [700, 850, 400];
    const labels = [
        translate(dir, "PieChart.normal"),
        translate(dir, "PieChart.heavy"),
        translate(dir, "PieChart.motorcycle")
    ];
    const colors = ['#19d645', '#344CB7', '#CF0F47'];

    const options = {

        chart: {
            type: 'donut',  
        },

        labels,
        colors,

        plotOptions: {
            pie: {
                donut: {
                    size: "60%"
                },
                dataLabels: {
                    offset: 0,
                },
            },
        },
        stroke: {
            show: true,
            width: 3,
            colors: ['var(--colCard)'],
        },
        title: {
            text: translate(dir, "PieChart.title"),
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontFamily: translate(dir , "font.fontFamily"),
                fontSize: '14px',
            },
        },
        dataLabels: {
            enabled: false,
            formatter: function (val) {
                return val.toFixed(1) + '%';
            },
            style: {
                fontSize: '10px',
                colors: ['#fff'],
                fontFamily: translate(dir , "font.fontFamily"),
                
            },
            dropShadow: {
                enabled: false,
            },
            offsetY: 0,
            offsetX: 0,
            textAnchor: 'middle',
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
            <ApexChart key={dir} options={options} series={data} type="donut" height={'100%'} />
        </div>
    );
};

export default DonutChart;
