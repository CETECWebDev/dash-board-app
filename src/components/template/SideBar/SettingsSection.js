import LangToggle from '@/components/module/SideBar/LangToggle'
import ThemeToggle from '@/components/module/SideBar/ThemeToggle'
import SideBarContent from '@/content/sideBarContent'
import React from 'react'
import { useTranslation } from 'react-i18next'


export default function SettingsSection() {

    const {t} = useTranslation()

    return (
        <div>
            <h2 className='text-[var(--colTextB)] font-bold ps-4'>{t(SideBarContent.settings.textKey)}</h2>
            <div className='mt-5 ps-5 gap-2 flex items-center'>
                <ThemeToggle />
                <LangToggle />
            </div>
        </div>
    )
}
