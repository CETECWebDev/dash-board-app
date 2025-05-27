import React, { useState } from 'react';
import { MdLocationOn } from "react-icons/md";
import { MdDevicesOther } from "react-icons/md";
import { RiSimCardFill } from "react-icons/ri";
import { IoMdBarcode, IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";
import { MdRoute, MdOutlineDescription } from "react-icons/md";
import { translate } from '@/language/language';
import postDevice from '@/api-functions/postDevice';


export default function AddDevice() {

  const { dir } = useDirectionContext();

  const translateClass = (dir === 'rtl') ? '-translate-x-full' : 'translate-x-full'
  const [isActive, setIsActive] = useState(true)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [serial_number, setSerial_number] = useState('')
  const [location, setLocation] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')


  const createDevice = async (e) => {
    e.preventDefault()

    const newDevie = {
      name,
      description,
      serial_number,
      location,
      lat: Number(lat),
      long: Number(long),
      status: isActive
    }

    const res = await postDevice(newDevie)

    alert(res)

  }



  return (
    <div className='p-5 mt-8 flex justify-center'>
      <form
        onSubmit={createDevice}
        className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-full lg:w-[70%]"
      >
        <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
          {translate(dir, "addDevice.title")}
        </h1>

        {/* Device Name */}
        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <MdDevicesOther className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={`${translate(dir, "addDevice.name")} ...`}
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
                value={lat}
                onChange={e => setLat(e.target.value)}
                placeholder={`${translate(dir, "addDevice.lat")} ...`}
                className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6 w-full border-b border-[var(--colTextA)] flex items-center gap-3">
            <MdLocationOn className="text-[var(--colTextA)] text-xl" />
            <div className="relative w-full">
              <input
                value={long}
                onChange={e => setLong(e.target.value)}
                placeholder={`${translate(dir, "addDevice.lng")} ...`}
                className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
              />
            </div>
          </div>

        </div>


        {/* Description */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <MdOutlineDescription className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={`${translate(dir, "addDevice.description")} ...`}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>


        {/* serial_number */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <IoMdBarcode className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              onChange={e => setSerial_number(e.target.value)}
              value={serial_number}
              placeholder={`${translate(dir, "addDevice.deviceSerial")} ...`}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>

        {/* location */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <MdRoute className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder={`${translate(dir, "addDevice.deviceroad")} ...`}
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>



        {/* Device Status */}

        <div className="text-[var(--colTextA)] flex items-center gap-5">
          {translate(dir, 'addDevice.deviceStatus')} :


          <div className='flex items-center gap-2'>
            <div>{translate(dir, 'addDevice.active')}</div>

            <div onClick={() => setIsActive(!isActive)} className={`w-[50px] h-[25px] ${isActive ? 'bg-green-500' : 'bg-red-800'} rounded-full cursor-pointer transition-all duration-700`}>
              <div className={`w-[25px] h-full shadow-lg ${isActive ? 'bg-green-400 translate-x-0' : `bg-red-600 ${translateClass}`} transition-all duration-700   rounded-full`}>

              </div>
            </div>

            <div>{translate(dir, 'addDevice.deactive')}</div>
          </div>

        </div>



        {/* Submit Button */}
        <button
          type="submit"
          className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 mb-6 hover:text-[var(--textHover)] transition"
        >
          {translate(dir, 'addDevice.createDevice')}
        </button>

        {/* Back link */}
        <Link href={'/devices'} className='flex items-center gap-2 mt-5'>
          <IoMdArrowBack />
          {translate(dir, 'backLink.back')}
        </Link>

      </form>
    </div>
  );
}
