import { useDirectionContext } from '@/context/DirectionContext'
import { translate } from '@/language/language'
import React from 'react'

export default function DeviceInfoCard(props) {

    const {dir} = useDirectionContext()

    const { id , name , location , status , serial_number } = props

    return (
        <div
            className="bg-[var(--colCard)] rounded-lg shadow p-4 flex flex-col gap-2"
        >
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[var(--colTextA)]">
                    {name} <span className=" text-sm">({id})</span>
                </span>
                <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${status
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                >
                    {status ? 'Active' : 'Inactive'}
                </span>
            </div>
            <div className="text-[var(--colTextB)] text-sm">
                {translate(dir , 'deviceInfoCard.location')} : {location}
            </div>
            <div className="text-[var(--colTextB)] font-medium">
                {translate(dir , 'deviceInfoCard.serial')} : {serial_number}
            </div>
        </div>
    )
}
