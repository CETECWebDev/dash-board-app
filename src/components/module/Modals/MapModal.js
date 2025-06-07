import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import useMapModal from '@/stores/mapModalStore';
import { useTranslation } from 'react-i18next';
import useLocation from '@/stores/locationStore';

const MapView = dynamic(() => import('@/components/module/Maps/MapView'), {
    ssr: false,
});


export default function MapModal({ setValue }) {

    const { isMapModalOpen, toggleMapModalOpen } = useMapModal()
    const { lat, long, setLat, setLong } = useLocation()
    const { t } = useTranslation()

    const setLocation = () => {
        setValue('lat', lat)
        setValue('long', long)
        toggleMapModalOpen()
    }

    const cancelHandler = () => {
        setValue('lat', '')
        setValue('long', '')
        toggleMapModalOpen()
    }

    return (
        <div className={`${isMapModalOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>
            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isMapModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-[70%] h-[70dvh] bg-[var(--colBg)] flex f rounded-xl'>
                    <MapView type={'findLoc'} />
                </div>

                <div className='flex items-center gap-10'>
                    <button onClick={cancelHandler} className='bg-red-700 text-white px-10 py-2 rounded-full'>{t('cancel')}</button>
                    <button onClick={setLocation} className='bg-green-600 text-white px-10 py-2 rounded-full'>{t('confirm')}</button>
                </div>

            </div>

        </div>
    )
}