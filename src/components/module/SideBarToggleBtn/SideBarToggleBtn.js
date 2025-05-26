import { useDirectionContext } from '@/context/DirectionContext';
import { useSidebar } from '@/context/SidebarContext';
import { IoIosArrowBack } from 'react-icons/io';
import React from 'react'

export default function SideBarToggleBtn() {


    const { isSidebarOpen, toggleSidebar } = useSidebar()
    const {dir} = useDirectionContext()

    const backdropClass = isSidebarOpen
        ? "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden backdrop-blur-md"
        : "hidden";



    return (
        <>

            {/* Hamburger menu */}
            <button
                onClick={toggleSidebar}
                className={`block p-1 rounded-md bg-[var(--colCard)] text-[var(--coTextA)] shadow-md`}
                aria-label="Toggle Menu"
            >
                <IoIosArrowBack size={18} className={`${isSidebarOpen ? `-rotate-180` : ``} transition-all duration-700`} />
            </button>

            {/* Back drop Effect */}
            <div
                className={backdropClass}
                onClick={() => toggleSidebar()}
                aria-hidden="true"
            ></div>

        </>
    )

}
