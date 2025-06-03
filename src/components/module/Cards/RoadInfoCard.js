import React from 'react'
import { useTranslation } from 'react-i18next'

export default function RoadInfoCard(props) {

    const {t} = useTranslation()

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
                    {t('roadCode')} : {road_id}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {t('province')} : {province}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {t('roadType')} : {road_type}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {t('roadVolume')} : {volume_road}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {t('volumeEachLine')} : {volume_each_line}
                </div>
                <div className="text-[var(--colTextB)] text-sm w-full">
                    {t('roadDirection')} : {direction}
                </div>


            </div>

        </div>
    )
}