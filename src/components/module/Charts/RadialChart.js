import React from "react";
import dynamic from 'next/dynamic';
import { useTranslation } from "react-i18next";
import { toPersianDigits } from "@/utils/toPersianDigit";
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CircularProgress = ({ title, value }) => {

    const { t, i18n } = useTranslation()

    const options = {

        title: {
            text: title,
            align: 'center',
            style: {
                color: 'var(--colTextA)',
                fontSize: '14px',
            },
        },

        chart: {
            fontFamily: 'Yekan',
            height: 280,
            type: "radialBar",
        },

        series: [67],
        colors: ["#20E647"],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: "70%",
                    background: "var(--colBg)"
                },
                track: {
                    background: "var(--colCard)",
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        blur: 4,
                        opacity: 0.25,
                    }
                },
                dataLabels: {
             
                    name: {
                        offsetY: -10,
                        color: "var(--colTextA)",
                        fontSize: "13px"
                    },
                    value: {
                        color: "var(--colTextA)",
                        fontSize: "30px",
                        show: true ,
                         formatter: function (val) {
                            return `${toPersianDigits(val)}%`;
                        },
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                gradientToColors: ["#87D4F9"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: [t('common.increase')]
    };
    const series = [value];

    return (
        <div className="w-full h-full">
            <ApexChart options={options} series={series} type="radialBar" height={'100%'} key={i18n.language} />
        </div>
    );
};

export default CircularProgress;
