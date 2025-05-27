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
import MapModal from '@/components/module/Modals/MapModal';
import Result from '@/components/module/Modals/Result';


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
  const [road_installed, setRoad_installed] = useState('')
  const [sim_number, setSim_number] = useState('')
  const [sim_serial_number, setSim_serial_number] = useState('')


  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isResultShowing, setIsResultShowing] = useState(false)
  const [isError, setIsError] = useState(null)
  const [resultMessage, setResultMessage] = useState('')


  const createDevice = async (e) => {
    e.preventDefault()

    const newDevie = {

      name,
      description,
      serial_number,
      location,
      lat: Number(lat),
      long: Number(long),
      status: isActive,
      road_installed,
      sim_number,
      sim_serial_number,

    }

    const res = await postDevice(newDevie)


    if (res) {
      // Trigger ISR for the homepage
      await fetch('/api/revalidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: '/' }),
      })

      await fetch('/api/revalidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path: '/devices' }),
      })


    }

    if (res.status === 201) {
      setIsError(false)
      setIsResultShowing(true)
      setResultMessage(translate(dir, 'resultModal.successDevice'))
    }

    if (res.status !== 201) {
      setIsError(true)
      setIsResultShowing(true)
      setResultMessage(translate(dir, 'resultModal.error'))
    }

    setTimeout(() => setIsResultShowing(false), [2000])

  }



  return (
    <div className='p-5 mt-8 flex justify-center'>

      <MapModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setLat={setLat} setLong={setLong} />



      <div className={`fixed top-5 ${dir === 'rtl' ? 'left-5' : 'right-5'} z-[999] transition-all duration-700 ${isResultShowing ? `translate-x-0 opacity-100` : `-translate-x-[calc(100%+20px)] opacity-0`}`}>
        <Result isError={isError} resultMessage={resultMessage} />
      </div>


      <form
        onSubmit={createDevice}
        className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-full lg:w-[80%]"
      >
        <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
          {translate(dir, "addDevice.title")}
        </h1>


        {/* lat & lng */}
        <div className='flex items-center gap-5 mb-5'>



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

          <div className='w-full text-[var(--colTextA)] font-bold flex justify-center'>
            <button onClick={() => setIsModalOpen(!isModalOpen)} type='button' className='linkHover border-2 border-[var(--colTextA)] rounded-full py-1 px-5'>{translate(dir, 'addDevice.openMap')}</button>
          </div>



        </div>

        {/* input Container */}
        <div className='w-full grid grid-cols-3 gap-5 mb-10'>

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


          {/* road_installed */}
          <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
            <MdRoute className="text-[var(--colTextA)] text-xl" />
            <div className="relative w-full">
              <input
                value={road_installed}
                onChange={e => setRoad_installed(e.target.value)}
                placeholder={`${translate(dir, "addDevice.road_installed")} ...`}
                className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
              />
            </div>
          </div>

          {/* sim_number */}
          <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
            <RiSimCardFill className="text-[var(--colTextA)] text-xl" />
            <div className="relative w-full">
              <input
                value={sim_number}
                onChange={e => setSim_number(e.target.value)}
                placeholder={`${translate(dir, "addDevice.simNumber")} ...`}
                className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
              />
            </div>
          </div>


          {/* sim_serial_number */}
          <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
            <RiSimCardFill className="text-[var(--colTextA)] text-xl" />
            <div className="relative w-full">
              <input
                value={sim_serial_number}
                onChange={e => setSim_serial_number(e.target.value)}
                placeholder={`${translate(dir, "addDevice.simSerial")} ...`}
                className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
              />
            </div>
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
