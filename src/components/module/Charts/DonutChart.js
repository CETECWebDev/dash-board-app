'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import deviceDataCardContent from '@/content/deviceDataCardContent';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DonutChart = () => {

    const { t , i18n } = useTranslation()


    const data = [700, 850, 1700, 200];
    const labels = [
        t(deviceDataCardContent.chartLabel.sedan.textKey),
        t(deviceDataCardContent.chartLabel.bus.textKey),
        t(deviceDataCardContent.chartLabel.truck.textKey),
        t(deviceDataCardContent.chartLabel.heavy.textKey)

    ];
    const colors = ['#19d645', '#344CB7', '#CF0F47', '#FE5D26'];

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
            text: t(deviceDataCardContent.vehicleChart.chartTitle.textKey),
            align: 'center',
            style: {
                fontFamily: 'IranYekan' ,
                color: 'var(--colTextA)',
                fontSize: '14px',
            },
        },
        dataLabels: {
            enabled: false,
            formatter: function (val) {
                return val.toFixed(1) + '%';
            },
            style: {
                fontFamily: 'inherit' ,
                fontSize: '10px',
                colors: ['#fff'],
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
            <ApexChart key={i18n.language} options={options} series={data} type="donut" height={'100%'} />
        </div>
    );
};

export default DonutChart;