import SideBarLinkItems from '@/components/module/SideBar/SideBarLinkItems'
import SideBarContent from '@/content/sideBarContent'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function NavigationSection() {

    const {t} = useTranslation()

    return (
        <div>
            <h2 className='text-[var(--colTextB)] font-bold ps-4'>{t(SideBarContent.navigation.textKey)}</h2>
            <ul className='mt-5 w-full flex flex-col gap-3 ps-5 text-[var(--colTextA)]'>
                {SideBarContent.links.map( (item , index) => {
                    return <SideBarLinkItems key={index} {...item } />
                })}
            </ul>
        </div>
    )
}
