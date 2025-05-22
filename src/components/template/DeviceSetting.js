import React, { useState } from 'react';
import { MdDevicesOther } from "react-icons/md";
import { RiSimCardFill } from "react-icons/ri";
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";
import { FaGlobe } from "react-icons/fa";
import { TiArrowLoop } from "react-icons/ti";
import { IoMdArrowBack } from 'react-icons/io';



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
        <div className='p-5 mt-8 flex flex-col items-center gap-3'>

            <button className=' border-2 w-[200px] rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'>Select Devices</button>

            <form onSubmit={createDevice}
                className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-full lg:w-[80%]"
            >
                <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
                    Device Settings
                </h1>

                {/* Device webframe */}
                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <MdDevicesOther className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={`Webframe version ...`}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Device IP */}

                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <FaGlobe className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            value={model}
                            onChange={e => setModel(e.target.value)}
                            placeholder={`Device server IP`}
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

                {/* Loop Number */}

                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <TiArrowLoop className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            value={serialNumber}
                            onChange={e => setSerialNumber(e.target.value)}
                            placeholder={`Loop number  ...`}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 hover:text-[var(--textHover)] transition"
                >
                    Apply to all device
                </button>
                <button
                    type="submit"
                    className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 mb-6 hover:text-[var(--textHover)] transition"
                >
                    Apply to selected devices
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
