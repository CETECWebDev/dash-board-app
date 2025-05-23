import React from 'react'

export default function RoutesInfoCard(props) {
    const { id, name, simcardnumber, firmware, ip } = props
    return (
        <div className="bg-[var(--colCard)] rounded-lg shadow p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[var(--colTextA)]">
                    {name} <span className=" text-sm">({id})</span>
                </span>
            </div>
            <div className="text-[var(--colTextB)] text-sm">
                Sim Card Number: {simcardnumber}
            </div>
            <div className="text-[var(--colTextB)] text-sm">
                Firmware: {firmware}
            </div>
            <div className="text-[var(--colTextB)] text-sm">
                IP: {ip}
            </div>
        </div>
    )
}
