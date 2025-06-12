import React from "react";
import dynamic from 'next/dynamic';
import { useTranslation } from "react-i18next";
import { toPersianDigits } from "@/utils/toPersianDigit";
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const hours = [
    "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM",
    "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"
];




const LineChart = ({ color, title, data }) => {

    const { t } = useTranslation()


    const options = {
        markers: {
            size: 5,
        },
        chart: {
            fontFamily: 'Yekan',
            type: "line",
            height: 350,
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: "smooth",
            width: 3
        },
        colors: [color],
        dataLabels: {
            formatter: function (val) {
                return toPersianDigits(String(val));
            },
            enabled: false
        },
        xaxis: {
            categories: hours,
            title: {
                text: ""
            }
        },
        yaxis: {
            min: 0,
            max: 40,
            labels: {
                formatter: val => `${val}%`
            },
            title: {
                text: ""
            }
        },
        title: {
            text: title,
            align: "center",
            style: {
                color: 'var(--colTextA)',
                fontSize: "20px"
            }
        },
        tooltip: {
            y: {
                formatter: val => `${toPersianDigits(val)}%`
            }
        }
    };

    const series = [
        {
            name: "",
            data: data
        }
    ];

    return (
        <div className="w-full h-full">
            <ApexChart options={options} series={series} type="area" height={'100%'} />
        </div>
    );
};

export default LineChart;
