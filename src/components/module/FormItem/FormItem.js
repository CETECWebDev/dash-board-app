import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export default function FormItem(props) {

    const { textKey, registerKey, icon, config, register, type , clickHanlder} = props

    const { t } = useTranslation()

    if (type === 'Button') {
        return (
            <div onClick={clickHanlder} className='w-full h-fit text-[var(--colTextA)] font-bold flex justify-center'>
                <button type='button' className='border-2 border-[var(--colTextA)] rounded-full py-1 px-5 btnHover'>{t(textKey)}</button>
            </div>

        )
    }

    return (
        <div className="mb-6 w-full border-b border-[var(--colTextA)] flex items-center gap-3">
            {icon}
            <div className="relative w-full">
                <input
                    {...register(registerKey)}
                    placeholder={`${t(textKey)} ...`}
                    className="peer w-full bg-transparent text-[var(--colTextA)] py-3 focus:outline-none"
                />
            </div>
        </div>

    )
}
