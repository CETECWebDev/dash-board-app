import React, { useState } from 'react'
import { translate } from '@/language/language'
import { useDirectionContext } from '@/context/DirectionContext'
import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('@/components/module/Maps/MapView'), {
  ssr: false,
});


export default function MapModal(props) {

    const {dir} = useDirectionContext()

    const { isModalOpen, setIsModalOpen , setLat , setLong } = props


    const [latOnMap , setLatOnMap] = useState(null)
    const [longOnMap , setLongOnMap] = useState(null)


    const setLocation = () => {
        setLat(latOnMap)
        setLong(longOnMap)
        setIsModalOpen(false)
    }

    const cancelHandler = () => {
        setLat('')
        setLong('')
        setIsModalOpen(false)
    }
   

    return (
        <div className={`${isModalOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>
            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-[70%] h-[70dvh] bg-[var(--colBg)] flex f rounded-xl'>
                    <MapView type={'findLoc'} setLat={setLat} setLong={setLong} setLatOnMap={setLatOnMap} setLongOnMap={setLongOnMap} />
                </div>

                <div className='flex items-center gap-10'>
                    <button onClick={cancelHandler}  className='bg-red-700 text-white px-10 py-2 rounded-full'>{translate(dir , "applySettingModal.cancel")}</button>
                    <button onClick={setLocation}  className='bg-green-600 text-white px-10 py-2 rounded-full'>{translate(dir , "applySettingModal.apply")}</button>
                </div>

            </div>

        </div>
    )
}
