import React from 'react'
import { useTranslation } from 'react-i18next'
import Clock from '../Clock/Clock'
export default function Header() {

    const {t} = useTranslation()

    return (
        <div className='w-full h-12 bg-[var(--colCard)] shadow-md rounded-full flex justify-between items-center px-5 md:px-10 lg:px-16 py-7'>

            <div>
                <h1 className="text-center font-bold text-[clamp(10px,1.3dvw,24px)] text-[var(--colTextA)]">{t('headerTitle')}</h1>
            </div>

            <div className='text-[var(--colTextA)]'>
                <Clock />
            </div>




        </div>
    )
}