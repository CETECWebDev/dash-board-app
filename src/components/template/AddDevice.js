import React, { useState } from 'react';
import { MdDevicesOther } from "react-icons/md";
import { IoMdBarcode, IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";

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

                {/* Model */}
                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <MdDevicesOther className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            value={model}
                            onChange={e => setModel(e.target.value)}
                            placeholder={dir === "ltr" ? "Model..." : "مدل..."}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Serial Number */}
                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <IoMdBarcode className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            value={serialNumber}
                            onChange={e => setSerialNumber(e.target.value)}
                            placeholder={dir === "ltr" ? "Serial Number..." : "شماره سریال..."}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
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
