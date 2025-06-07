import postDevice from '@/api/api-functions/postDevice'
import FormGridContainer from '@/components/module/FormGridContainer/FormGridContainer'
import MapModal from '@/components/module/Modals/MapModal'
import Result from '@/components/module/Modals/ResultModal'
import addDeviceFormContent from '@/content/addDeviceFormContent'
import useMapModal from '@/stores/mapModalStore'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IoMdArrowBack } from 'react-icons/io'


export default function AddDeviceForm() {

  const { t, i18n } = useTranslation()
  const { register, handleSubmit, reset, setValue } = useForm()
  const [isActive, setIsActive] = useState(true)
  const [isError, setIsError] = useState(null)
  const [isShowing, setIsShowing] = useState(false)
  const [resultMessage, setResultMessage] = useState()

  const translateClass = (i18n.language === 'fa') ? '-translate-x-full' : 'translate-x-full'
  const translateClassResult = (i18n.language === 'fa') ? 'translate-x-[calc(-100%-20px)]' : 'translate-x-[calc(100%+20px)]'

  const { toggleMapModalOpen } = useMapModal()


  const subHandler = async (data) => {
    const device = { ...data, status: isActive }

    const [status, resultMessage] = await postDevice(device)
    setIsShowing(true)

    console.log(isShowing);



    setResultMessage(resultMessage)
    if (status === 201) {

      setIsError(false)

    } else {

      setIsError(true)

    }

    reset()

    setTimeout(() => {
      setIsShowing(false)
    }, 2000)


  }

  return (
    <div className='p-5 flex justify-center text-[var(--colTextA)]'>

      <MapModal setValue={setValue} />

      <div className={`${isShowing ? 'translate-x-0 visible opacity-100' : `${translateClassResult} invisible opacity-0`}  fixed top-20 end-5 transition-all duration-500`}>
        <Result isError={isError} resultMessage={resultMessage} />
      </div>

      <form onSubmit={handleSubmit(subHandler)} className='flex flex-col w-full bg-[var(--colCard)] p-10 rounded-xl shadow-md'>

        {/* form title */}

        <h2 className='text-xl font-bold w-full text-center mb-5'>{t(addDeviceFormContent.formTitle.textKey)}</h2>

        {/* form items */}

        <FormGridContainer content={addDeviceFormContent} register={register} clickHanlder={toggleMapModalOpen} />

        {/* status */}

        <div className="text-[var(--colTextA)] flex items-center gap-5">
          {t('status')} :


          <div className='flex items-center gap-2'>
            <div>{t('active')}</div>

            <div onClick={() => setIsActive(!isActive)} className={`w-[50px] h-[25px] ${isActive ? 'bg-green-500' : 'bg-red-800'} rounded-full cursor-pointer transition-all duration-700`}>
              <div className={`w-[25px] h-full shadow-lg ${isActive ? 'bg-green-400 translate-x-0' : `bg-red-600 ${translateClass}`} transition-all duration-700   rounded-full`}>

              </div>
            </div>

            <div>{t('deactive')}</div>
          </div>

        </div>

        {/* submit Btn */}


        <div className='w-full flex justify-center items-center'>
          <button
            type="submit"
            className="w-[30%] duration-300 border hover:border hover:border-[var(--textHover)] bg-[var(--colBg)] text-[var(--colTextA)] font-medium py-3 rounded-lg mt-10 mb-6 hover:text-[var(--textHover)] transition"
          >
            {t('registerDevice')}
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
