import React, { useState } from 'react'
import { RiUser3Line } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";


import React from 'react'

export default function AddDevice() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const { dir } = useDirectionContext();

  return (
    <div className='p-5 mt-8 flex justify-center'>
      <form
        className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-full lg:w-[70%]"
      >
        <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
          Add New Devices
        </h1>

        {/* Name Field */}

        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <RiUser3Line className="text-[var(--colTextA)] text-xl" />
          <div className="relative w-full">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name ..."
              className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
            />
          </div>
        </div>

        {/* submit btn */}

        <button
          type="submit"
          className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 mb-6 hover:text-[var(--textHover)] transition"
        >
          Create User
        </button>

        <Link href={'/employees'} className='flex items-center gap-2 mt-5'><IoMdArrowBack />
          {dir === "ltr" ? "Back" : " بازگشت"}
        </Link>


      </form>
    </div>
  )
}
