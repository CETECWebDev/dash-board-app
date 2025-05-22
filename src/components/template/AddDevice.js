import React, { useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import { MdDevicesOther } from "react-icons/md";
import { RiSimCardFill } from "react-icons/ri";
import { IoMdBarcode, IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";
import { MdRoute } from "react-icons/md";


export default function AddDevice() {

  const { dir } = useDirectionContext();

  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const createDevice = (e) => {
    e.preventDefault();
    const newDevice = { name, model, serialNumber };
    console.log("🛠️ Device Created:", newDevice);
    alert(dir === "ltr" ? "Device created in console" : "دستگاه در کنسول ثبت شد");
    // Reset form (optional)
    setName('');
    setModel('');
    setSerialNumber('');
  };

  return (
    <div className='p-5 mt-8 flex justify-center'>
      <form onSubmit={createDevice}
        className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-full lg:w-[70%]"
      >
        <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
          {dir === "ltr" ? "Add Device" : "افزودن دستگاه"}
        </h1>

        {/* Device Name */}
        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <MdDevicesOther className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={dir === "ltr" ? "Device Name..." : "نام دستگاه..."}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>

        {/* lat & lng */}

        <div className='flex items-center gap-5'>



          <div className="mb-6 w-full border-b border-[var(--colTextA)] flex items-center gap-3">
            <MdLocationOn className="text-[var(--colTextA)] text-xl" />
            <div className="relative w-full">
              <input
                value={model}
                onChange={e => setModel(e.target.value)}
                placeholder={`Device's Lat`}
                className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6 w-full border-b border-[var(--colTextA)] flex items-center gap-3">
            <MdLocationOn className="text-[var(--colTextA)] text-xl" />
            <div className="relative w-full">
              <input
                value={model}
                onChange={e => setModel(e.target.value)}
                placeholder={`Device's Lng`}
                className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
              />
            </div>
          </div>

        </div>


        {/* Serial Number */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <IoMdBarcode className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={serialNumber}
              onChange={e => setSerialNumber(e.target.value)}
              placeholder={`Device Code ...`}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>


        {/* Device Road */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <MdRoute className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={serialNumber}
              onChange={e => setSerialNumber(e.target.value)}
              placeholder={`Device road ...`}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Simcard Number */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <RiSimCardFill className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={serialNumber}
              onChange={e => setSerialNumber(e.target.value)}
              placeholder={`Device simcard number ...`}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Simcard Serial */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <RiSimCardFill className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={serialNumber}
              onChange={e => setSerialNumber(e.target.value)}
              placeholder={`Device simcard serial  ...`}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Device Status */}

        <div className="text-[var(--colTextA)] flex items-center gap-4">
          Device Status:

          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="deviceStatus"
              value="active"
              className="accent-green-500 cursor-pointer bg-transparent"
              defaultChecked
            />
            Active
          </label>

          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="deviceStatus"
              value="deactive"
              className="accent-red-500 cursor-pointer bg-transparent"
            />
            Deactive
          </label>
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 mb-6 hover:text-[var(--textHover)] transition"
        >
          {dir === "ltr" ? "Create Device" : "ایجاد دستگاه"}
        </button>

        {/* Back link */}
        <Link href={'/devices'} className='flex items-center gap-2 mt-5'>
          <IoMdArrowBack />
          {dir === "ltr" ? "Back" : "بازگشت"}
        </Link>

      </form>
    </div>
  );
}
