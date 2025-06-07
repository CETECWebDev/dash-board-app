import FormGridContainer from '@/components/module/FormGridContainer/FormGridContainer'
import SelectDeviceModal from '@/components/module/Modals/SelectDeviceModal'
import deviceSettingFormContent from '@/content/deviceSettingFormContent'
import useSelectDeviceModal from '@/stores/selectDeviceModalStore'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'

export default function SettingForm() {

    const { register, handleSubmit } = useForm()
    const { t } = useTranslation()
    const { toggleModal } = useSelectDeviceModal()

    return (
        <div className='p-5 flex justify-center text-[var(--colTextA)]'>


            <SelectDeviceModal />

            <form className='flex flex-col w-full bg-[var(--colCard)] p-10 rounded-xl shadow-md items-center'>

                <h2 className='text-xl font-bold w-full text-center mb-5'>{t('deviceSettings')}</h2>

                {/* form items */}

                <FormGridContainer content={deviceSettingFormContent} register={register} />

                {/* submit Btn */}

                <div className='w-full flex justify-center items-center'>
                    <button
                        onClick={toggleModal}
                        type="button"
                        className="w-[30%] duration-300 border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 mb-6 hover:text-[var(--textHover)] transition"
                    >
                        {t('selectDevice')}
                    </button>
                    <Link href={'/devices'} className='px-10 flex items-center gap-2 mt-5 text-inherit'>
                        <IoMdArrowBack />
                        {t('back')}
                    </Link>
                </div>

            </form>

        </div>
    )
}
