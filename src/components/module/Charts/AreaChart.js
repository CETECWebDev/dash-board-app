import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { toPersianDigits } from "@/utils/toPersianDigit";
import i18n from "@/i18n";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaChart = ({ shadow, labelSize }) => {

    const { t } = useTranslation()

    const options = {
        legend: {
            show: false
        },
        chart: {
            type: "area",
            toolbar: { show: false },
            zoom: { enabled: false },
            fontFamily: 'Yekan'
        },
        title: {
            text: 'ssda',
            align: 'center',

        },
        xaxis: {
            categories: ["12 AM", "4 AM", "8 AM", "10 M", "10 PK"], // X-axis categories
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
            formatter: function (val) {
                return toPersianDigits(String(val));
            },
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
        tooltip: {
            y: {
                formatter: function (val) {
                    return toPersianDigits(String(val));
                }
            },
            style: {
                fontFamily: 'Yekan',
                fontSize: '13px',
            },
            cssClass: i18n.language === 'fa' ? 'rtl' : ''
        }
    };

    const series = [
        {
            name: '',
            data: [45, 80, 48, 80, 90], // Data for the first line
        },
        {
            name: '',
            data: [25, 60, 28, 60, 70], // Data for the second line
        },
    ];

    return (
        <div
            className={`w-full h-full`}
        >
            <ApexChart options={options} series={series} type="area" height={'100%'} />
        </div>
    );
};

export default AreaChart;