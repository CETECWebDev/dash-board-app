import apiRequestProxy from '@/api/axios-instance/proxy'
import useDevices from '@/stores/deviceStore'
import useSelectDeviceModal from '@/stores/selectDeviceModalStore'
import { addToSelectedDevice, removeFromSelectedDevice } from '@/utils/deviceSelection'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import DeviceInfoCard from '../Cards/DeviceInfoCard'

export default function () {

    const { devices, setDevices, selectedDevices, setSelectedDevices } = useDevices()
    const { isModalOpen, toggleModal } = useSelectDeviceModal()
    const { t } = useTranslation()

    useEffect(() => {
        const getDevices = async () => {
            const res = await apiRequestProxy.get('/devices')
            setDevices(res.data)
        }
        getDevices()
    }, [isModalOpen])


    const addHandler = (clickedDevice) => {
        addToSelectedDevice(devices, clickedDevice, setDevices, selectedDevices, setSelectedDevices)
    }

    const removeHandler = (clickedDevice) => {
        removeFromSelectedDevice(devices, clickedDevice, setDevices, selectedDevices, setSelectedDevices)
    }

    return (
        <div className={`${isModalOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>

            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-[70%] h-[70dvh] bg-[var(--colBg)] flex f rounded-xl'>

                    <div className='w-1/2 flex flex-col items-center'>
                        <div className='my-5'>{t('devicesList')}</div>
                        <div className='overflow-y-auto flex flex-col gap-3 w-[90%] px-3 mb-5'>
                            {devices.map(device => {
                                return (
                                    <div key={device.id} onClick={() => addHandler(device)}>
                                        <DeviceInfoCard {...device} />
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                    <div className='w-1/2 flex flex-col items-center'>
                        <div className='my-5'>{t('selectedDevicesList')}</div>
                        <div className='overflow-y-auto flex flex-col gap-3 w-[90%] px-3 mb-5'>
                            {
                                selectedDevices && (
                                    selectedDevices.map(device => {
                                        return (
                                            <div key={device.id} onClick={() => removeHandler(device)}>
                                                <DeviceInfoCard
                                                    {...device} />
                                            </div>

                                        )
                                    })
                                )
                            }

                        </div>
                    </div>

                </div>

                <div className='flex items-center gap-10'>
                    
                    <button onClick={() => {
                        toggleModal()
                        setSelectedDevices([])
                    }
                    } className='bg-red-700 text-white px-10 py-2 rounded-full'>{t('cancel')}
                    </button>

                    <button className='bg-green-600 text-white px-10 py-2 rounded-full'>
                        {t('apply')}
                    </button>
                </div>

            </div>

        </div>
    )
}
