import React from 'react'
import { useTranslation } from 'react-i18next'

export default function UserInfoCard(props) {

    const {id , name , email} = props

    const { t } = useTranslation()

    return (
        <div
            className="bg-[var(--colCard)] rounded-lg shadow p-4 flex flex-col gap-2"
        >
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[var(--colTextA)]">
                    {name}
                </span>

            </div>
            <div className="text-[var(--colTextB)] text-sm">
                {t('email')} : { email }
            </div>

        </div>
    )
}
