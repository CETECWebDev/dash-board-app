import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdOutlineHighlightOff } from "react-icons/md";

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

  return (
    <div className="w-full md:w-[40%] lg:w-[25%] bg-[var(--colCard)] text-[var(--colTextA)] text-[clamp(12,0.9dvw,14px)] shadow-lg rounded-2xl p-6 space-y-6">
      <h3 className="text-xl text-center font-semibold gap-2 mb-10">
        تعداد دستگاه‌ها
      </h3>
      <div className="flex flex-col items-center gap-5">
        <diV className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold">کل دستگاه‌ها:</span>
            <span>{totalDevices}</span>
          </div>
          <div className="flex items-center gap-3">
            <GrStatusGoodSmall className="text-green-500 text-xl" />
            <span className="font-semibold">فعال:</span>
            <span>{activeDevices}</span>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineHighlightOff className="text-red-600 text-xl" />
            <span className="font-semibold">غیرفعال:</span>
            <span>{inactiveDevices}</span>
          </div>
        </diV>
      </div>
    </div>
  );
}

DeviceStatusCount.defaultProps = {
  devices: [],
};

export default DeviceStatusCount;
