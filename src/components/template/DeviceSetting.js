import React, { useState } from 'react';
import { MdDevicesOther } from "react-icons/md";
import { RiSimCardFill } from "react-icons/ri";
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";
import { FaGlobe } from "react-icons/fa";
import { TiArrowLoop } from "react-icons/ti";
import { IoMdArrowBack } from 'react-icons/io';
import { translate } from '@/language/language';



export default function AddDevice() {

    const { dir } = useDirectionContext();

    return (
        <div className='p-5 flex flex-col items-center gap-3'>

            <button className=' border-2 w-[200px] rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)]'>{ translate( dir , "deviceSetting.select" ) }</button>

            <form
                className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-full lg:w-[80%]"
            >
                <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
                    {translate( dir , "deviceSetting.title" )}
                </h1>

                {/* Device frameware */}
                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <MdDevicesOther className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            placeholder={`${translate( dir , "deviceSetting.frameware" )}...`}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Device IP */}

                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <FaGlobe className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            placeholder={`${translate( dir , "deviceSetting.serverID" )}...`}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
                </div>


                {/* Simcard Number */}

                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <RiSimCardFill className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            placeholder={`${translate( dir , "deviceSetting.simNumber" )} ...`}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Loop Number */}

                <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
                    <TiArrowLoop className="text-[var(--colTextA)] text-xl" />
                    <div className="relative w-full">
                        <input
                            placeholder={`${translate( dir , "deviceSetting.loopNumber" )} ...`}
                            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className='flex items-center gap-5 mt-10 mb-10'>
                    <button
                        type="submit"
                        className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg hover:text-[var(--textHover)] transition"
                    >
                       {translate( dir , "deviceSetting.applyAll" )}
                    </button>
                    <button
                        type="submit"
                        className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg  hover:text-[var(--textHover)] transition"
                    >
                        {translate( dir , "deviceSetting.applySelected" )}
                    </button>
                </div>

                {/* Back link */}
                <Link href={'/devices'} className='flex items-center gap-2 mt-5'>
                    <IoMdArrowBack />
                    {translate( dir , "backLink.back" )}
                </Link>

            </form>
        </div>
    );
}
