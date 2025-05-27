import React from "react";
import dynamic from 'next/dynamic';
import { translate } from "@/language/language";
import { useDirectionContext } from "@/context/DirectionContext";
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = () => {
    const { dir } = useDirectionContext();
    const options = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد"],
            labels: {
                style: {
                    fontSize: '8px',  
                }
            }
        },

          dataLabels: {
        enabled: true,
        style: {
            // fontSize: '14px',
            fontFamily: translate(dir , "font.fontFamily"),

            colors: ['#fff'] // رنگ اعداد درون ستون
        }
    },
        title: {
            text: "دستگاه های شمارش شده",
            align: "center",
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: 'inherit',
                color: 'var(--colTextA)'
            }
        },
        colors: ['var(--textHover)']
    };

    const series = [
        {
            name: "تعداد خودرو",
            data: [30, 40, 35, 50, 49],

        }
    ];

    return (
        <div className="w-full h-full">
            <ApexChart options={options} series={series} type="bar" height={`100%`} />
        </div>
    );
};

export default BarChart;
