import React, { useState } from 'react'
import DeviceInfoCard from '../Cards/DeviceInfoCard'
import { translate } from '@/language/language'
import { useDirectionContext } from '@/context/DirectionContext'

export default function SelectDeviceModal(props) {

    const {dir} = useDirectionContext()

    const { devices, selectedDevices, setDevices, setSelectedDevices, isModalOpen, setIsModalOpen } = props

    const addToSelectedDevice = (clickedDevice) => {

        const allDevices = [...devices]

        const newAllDevices = allDevices.filter(device => {
            return device.id !== clickedDevice.id
        })

        setDevices(newAllDevices)

        const newList = [...selectedDevices, clickedDevice]

        setSelectedDevices(newList)

    }

    const removeFromSelectedDevice = (clickedDevice) => {
        const allSelectedDevices = [...selectedDevices]

        const newSelectedDevices = allSelectedDevices.filter(device => {
            return device.id !== clickedDevice.id
        })

        setSelectedDevices(newSelectedDevices)

        const newAllList = [clickedDevice, ...devices].sort((a, b) => a.id - b.id)

        setDevices(newAllList)

    }


    return (
        <div className={`${isModalOpen ? 'opacity-100 z-[999999]' : 'opacity-0 -z-[999999]'} transition-all duration-500 flex fixed items-center justify-center w-screen h-screen left-0 top-0 bg-black/50 backdrop-blur-md`}>
            <div className={`w-full flex flex-col gap-10 items-center justify-center transition-all duration-500 ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-[70%] h-[500px] bg-[var(--colBg)] flex f rounded-xl'>

                    <div className='w-1/2 flex flex-col items-center'>
                        <div className='my-5'>{translate( dir , "applySettingModal.deviceList" )}</div>
                        <div className='overflow-y-auto flex flex-col gap-3 w-[90%] px-3 mb-5'>
                            {devices.map(device => {
                                return (
                                    <div key={device.id} onClick={() => addToSelectedDevice(device)}>
                                        <DeviceInfoCard {...device} />
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                    <div className='w-1/2 flex flex-col items-center'>
                        <div className='my-5'>{translate(dir , "applySettingModal.SelectedDevices")}</div>
                        <div className='overflow-y-auto flex flex-col gap-3 w-[90%] px-3 mb-5'>
                            {
                                selectedDevices && (
                                    selectedDevices.map(device => {
                                        return (
                                            <div key={device.id} onClick={() => removeFromSelectedDevice(device)}>
                                                <DeviceInfoCard {...device} />
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
                        setIsModalOpen(false)      
                        setSelectedDevices([])
                    }
                        } className='bg-red-700 text-white px-10 py-2 rounded-full'>{translate(dir , "applySettingModal.cancel")}</button>
                    <button className='bg-green-600 text-white px-10 py-2 rounded-full'>{translate(dir , "applySettingModal.apply")}</button>
                </div>

            </div>

        </div>
    )
}
