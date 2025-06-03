import i18n from '@/i18n';
import React from 'react'
import { LuLanguages } from "react-icons/lu";

export default function LangToggle() {

    const toggleLang = () => {
        i18n.changeLanguage( i18n.language === 'fa' ? 'en' : 'fa')
    }

    return (
        <button className='flex items-center justify-center w-10 h-10 border-2 border-[var(--colTextA)] rounded-full linkHover hover:border-[var(--textHover)] hover:text-[var(--textHover)]' onClick={toggleLang}>
            <LuLanguages />
        </button>
    )
}
