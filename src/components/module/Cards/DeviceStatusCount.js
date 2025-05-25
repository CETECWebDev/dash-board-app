import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from "@/language/language";
import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdOutlineHighlightOff } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

function DeviceStatusCount({
  devices,
  activeDeviceCount,
  setActiveDeviceCount,
}) {
  const totalDevices = Array.isArray(devices) ? devices.length : 0;
  const activeDevices = Array.isArray(devices)
    ? devices.filter((device) => device.active === true).length
    : 0;
  const inactiveDevices = totalDevices - activeDevices;
  const { dir } = useDirectionContext();

  return (
    <div className="w-full md:w-[40%] lg:w-[25%] bg-[var(--colCard)] text-[var(--colTextA)] text-[clamp(12px,0.9vw,14px)] rounded-2xl shadow-lg p-8 space-y-8 transition-transform ">
      <h3 className="text-2xl text-center font-bold gap-2 mb-8 tracking-wide">
        {translate(dir,"DeviceStatusCount.title")}
      </h3>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center justify-between gap-2 px-2 py-3 border-b border-[var(--colBorder)]">
            <span className="flex items-center gap-2 font-semibold">
              <FiPlus className="text-white text-2xl" />
              {translate(dir,"DeviceStatusCount.totalDevices")}</span>
            <span className="text-lg font-bold">{totalDevices}</span>
          </div>
          <div className="flex items-center justify-between gap-2 px-2 py-3 border-b border-[var(--colBorder)]">
            <span className="flex items-center gap-2 font-semibold">
              <GrStatusGoodSmall className="text-green-500 text-xl" />
              {translate(dir,"DeviceStatusCount.activeDevices")}
            </span>
            <span className="text-lg font-bold text-green-600">{activeDevices}</span>
          </div>
          <div className="flex items-center justify-between gap-2 px-2 py-3">
           <span className="flex items-center gap-2 font-semibold">
              <GrStatusGoodSmall className="text-red-600 text-xl" />
              {translate(dir,"DeviceStatusCount.inactiveDevices")}
            </span>
            <span className="text-lg font-bold text-red-600">{inactiveDevices}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

DeviceStatusCount.defaultProps = {
  devices: [],
};

export default DeviceStatusCount;
