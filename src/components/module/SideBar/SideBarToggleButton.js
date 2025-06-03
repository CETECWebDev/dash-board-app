import i18n from '@/i18n';
import useAppStore from '@/stores/appStore';
import React from 'react'
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";

export default function SideBarToggleButton() {

    const { isSideBarOpen, toggleSideBar } = useAppStore()

    return (
        <button onClick={toggleSideBar} className={`
            ${isSideBarOpen ? '' : 'rotate-180'}
            hover:text-[var(--textHover)]
            flex items-center justify-center p-2 text-lg text-[var(--colTextA)] bg-[var(--colCard)]
            rounded-full shadow-md transition-all ease-in-out duration-700 
            `}>

            { i18n.language === 'en' ? <IoIosArrowBack/> : <IoIosArrowForward /> }
        </button>
    )
}
