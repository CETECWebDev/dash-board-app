import React from 'react'
import { useTranslation } from 'react-i18next'
import FaClock from './FaClock'
import EnClock from './EnClock'


export default function Clock() {

    const { i18n } = useTranslation()

    return (
        <>
            { i18n.language === 'fa' ? <FaClock /> : <EnClock /> }
        </>
    )
}
