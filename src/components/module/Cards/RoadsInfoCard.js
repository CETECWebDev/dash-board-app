import { useDirectionContext } from '@/context/DirectionContext'
import { translate } from '@/language/language'
import React from 'react'

export default function RoadInfoCard(props) {

    const { dir } = useDirectionContext()

    const { id, road_id, name, direction, province, dest, address, road_type, volume_each_line, volume_road } = props

    return (
        <div className="bg-[var(--colCard)] rounded-lg shadow p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-lg text-[var(--colTextA)]">
                    {name} <span className=" text-sm">({id})</span>
                </span>
            </div>
            <div className='grid grid-cols-3 gap-3 place-items-center'>

                <div className="text-[var(--colTextB)] text-sm w-full">
                    {translate(dir, "deviceInfoCard.road_id")} : {road_id}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {translate(dir, "deviceInfoCard.province")} : {province}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {translate(dir, "deviceInfoCard.road_type")} : {road_type}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {translate(dir, "deviceInfoCard.volume_road")} : {volume_road}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {translate(dir, "deviceInfoCard.volume_each_line")} : {volume_each_line}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {translate(dir, "deviceInfoCard.direction")} : {direction}
                </div>


            </div>

        </div>
    )
}
