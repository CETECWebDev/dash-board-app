import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import useDevices from "@/stores/deviceStore";
import { useTranslation } from "react-i18next";

function DeviceStatusCountCard() {

  const { devices } = useDevices()
  const {t} = useTranslation()

  const totalDevices = devices.length
  const activeDevices = devices.filter( device => device.status === true).length
  const inactiveDevices = totalDevices - activeDevices


  return (
    <div className="h-full w-full  bg-[var(--colCard)] text-[var(--colTextA)] text-[clamp(12px,0.9vw,14px)] rounded-2xl shadow-lg p-8 space-y-8 transition-transform ">
      <h3 className="text-xl text-center font-bold gap-2 mb-8 tracking-wide">
        {t('deviceNumberTitle')}
      </h3>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center justify-between gap-2 px-2 py-3 ">
            <span className="flex items-center gap-2 font-semibold">
              <FiPlus className="text-yellow-500 text-2xl" />
              {t('totalDevices')}</span>
            <span className="text-lg font-bold">{totalDevices}</span>
          </div>
          <div className="flex items-center justify-between gap-2 px-2 py-3 ">
            <span className="flex items-center gap-2 font-semibold">
              <GrStatusGoodSmall className="text-[#1ac11a] text-xl" />
              {t('activeDevices')}
            </span>
            <span className="text-lg font-bold text-[#1ac11a]">{activeDevices}</span>
          </div>
          <div className="flex items-center justify-between gap-2 px-2 py-3">
           <span className="flex items-center gap-2 font-semibold">
              <GrStatusGoodSmall className="text-[#ff0000] text-xl" />
              {t('deactiveDevices')}
            </span>
            <span className="text-lg font-bold text-[#ff0000]">{inactiveDevices}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceStatusCountCard;