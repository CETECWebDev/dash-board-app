import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import useDevices from "@/stores/deviceStore";
import { useTranslation } from "react-i18next";
import { toPersianDigits } from "@/utils/toPersianDigit";

function DeviceStatusCountCard() {

  const { devices } = useDevices()
  const { t } = useTranslation()

  const totalDevices = devices.length
  const activeDevices = devices.filter(device => device.status === true).length
  const inactiveDevices = totalDevices - activeDevices


  return (
    <div className="h-full w-full items-center justify-center flex flex-col gap-5  text-[var(--colTextA)] text-[clamp(10px,0.9vw,12px)] rounded-2xl transition-transform ">
      {/* Title */}
      <h3 className="text-xl text-center font-bold gap-2 mb-5 tracking-wide">
        {t('deviceNumberTitle')}
      </h3>

      {/* bottom */}
      <div className="w-full flex flex-col items-center gap-5">

        <div className="flex w-full items-center justify-between  px-2">
          <span className="flex items-center gap-2 font-semibold">
            <FiPlus className="text-yellow-500" />
            {t('totalDevices')}</span>
          <span className="text-lg font-bold">{toPersianDigits(String(totalDevices))}</span>
        </div>

        <div className="flex w-full items-center justify-between  px-2">
          <span className="flex items-center gap-2 font-semibold">
            <GrStatusGoodSmall className="text-[#1ac11a]" />
            {t('activeDevices')}
          </span>
          <span className="text-lg font-bold text-[#1ac11a]">{toPersianDigits(String(activeDevices))}</span>
        </div>

        <div className="flex w-full items-center justify-between  px-2">
          <span className="flex items-center gap-2 font-semibold">
            <GrStatusGoodSmall className="text-[#ff0000]" />
            {t('deactiveDevices')}
          </span>
          <span className="text-lg font-bold text-[#ff0000]">{toPersianDigits(String(inactiveDevices))}</span>
        </div>

      </div>
    </div>
  );
}

export default DeviceStatusCountCard;