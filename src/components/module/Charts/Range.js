// Range.jsx
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { toPersianDigits } from '@/utils/toPersianDigit';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RangeChart = () => {

    const { t } = useTranslation()

    const series = [
        {
            name: '',
            data: [60, 87],
        },
        {
            name: '',
            data: [40, 13],
        },
    ];

    const options = {
        title: {
            text: '',
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontSize: '14px',
            },
        },
        chart: {
            fontFamily: 'Yekan',
            type: 'bar',
            stacked: true,
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'start',
                horizontal: true,
                barHeight: '50%',
            },
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0], // فقط روی مقدار اصلی نمایش بده
            formatter: (val) => `${toPersianDigits(val)}%`,
            style: {
                colors: ['#fff'],
            },
        },
        xaxis: {
            categories: ['', ''],
        },
        colors: [

            ({ dataPointIndex }) => ['#008ffb', '#00e396'][dataPointIndex],
            ({ dataPointIndex }) => ['#9fd6ff', '#a6f5ce'][dataPointIndex],
        ],
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: (val) => `${toPersianDigits(val)}%`,
            },
        },
    };

    return (
        <div className="w-full h-full">
            <ApexChart options={options} series={series} type="bar" height={'100%'} />
        </div>
    );
};

export default RangeChart;