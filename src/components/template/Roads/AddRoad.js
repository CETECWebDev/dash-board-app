import React, { useState } from 'react';
import { MdRoute } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import Link from 'next/link';
import { useDirectionContext } from "@/context/DirectionContext";
import { translate } from '@/language/language';

export default function AddRoad() {
  const { dir } = useDirectionContext();

  const [routeName, setRouteName] = useState('');
  const [routeAddress, setRouteAddress] = useState('');
  const [officeProvince, setOfficeProvince] = useState('');

  const createRoute = (e) => {
    e.preventDefault();
    const newRoute = { routeName, routeAddress, officeProvince };
    console.log("🛣️ Route Created:", newRoute);
    setRouteName('');
    setRouteAddress('');
    setOfficeProvince('');
  };

  return (
    <div className='p-5 mt-8 flex justify-center'>
      <form onSubmit={createRoute}
        className="bg-[var(--colCard)] p-8 rounded-2xl backdrop-blur-md w-full lg:w-[70%]"
      >
        <h1 className="text-center text-2xl md:text-3xl font-medium text-[var(--colTextA)] mb-8">
          {translate(dir, "addRoad.title")}
        </h1>

        {/* Route Name */}
        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <MdRoute className="text-[var(--colTextA)] text-xl" />
          <input
            value={routeName}
            onChange={e => setRouteName(e.target.value)}
            placeholder= {translate(dir, "addRoad.name")}
            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
          />
        </div>

        {/* Route Address */}
        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <MdLocationOn className="text-[var(--colTextA)] text-xl" />
          <input
            value={routeAddress}
            onChange={e => setRouteAddress(e.target.value)}
            placeholder= {translate(dir, "addRoad.address")}
            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
          />
        </div>

        {/* Office + Province */}
        <div className="mb-6 border-b border-[var(--colTextA)] flex items-center gap-3">
          <FaBuilding className="text-[var(--colTextA)] text-xl" />
          <input
            value={officeProvince}
            onChange={e => setOfficeProvince(e.target.value)}
            placeholder= {translate(dir, "addRoad.officeProvince")}
            className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 mb-6 hover:text-[var(--textHover)] transition"
        >
          {translate(dir, 'addRoad.click')}
        </button>

        {/* Back Link */}
        <Link href={'/roads'} className='flex items-center gap-2 mt-5'>
          <IoMdArrowBack />
         {translate(dir, 'addRoad.back')}
        </Link>

      </form>
    </div>
  );
}