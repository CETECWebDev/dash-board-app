'use client';

import React, { useEffect, useState } from "react";
import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: true });

export default function PersianClock() {
  const [now, setNow] = useState(null); 

  useEffect(() => {
    const update = () => setNow(moment());
    update(); 
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!now) return null;

  return (
    <div className="text-[var(--colTextA)] font-vazir text-[clamp(10px,0.8dvw,20px)] font-bold">
      <p className="flex items-center gap-2"><span>{now.format("dddd")}</span> <span>{now.format("jYYYY/jMM/jDD")}</span></p>
      <p>ساعت : {now.format("ss : mm : HH")}</p>
    </div>
  );
}
