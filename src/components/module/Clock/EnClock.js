'use client';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';


export default function EnClock() {
    const [now, setNow] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(dayjs())
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="text-[var(--colTextA)] text-[clamp(10px,0.8dvw,16px)] font-bold">
                <p className='flex items-center gap-1'><span>{now.format("dddd")}</span><span>{now.format('YYYY/MM/DD')}</span></p>
                <p>Time : {now.format('HH : mm : ss')}</p>
            </div>
        </>


    );
}
