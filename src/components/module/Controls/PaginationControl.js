import React from 'react'
import { useTranslation } from 'react-i18next';
import { IoChevronForward, IoChevronBack } from "react-icons/io5";


export default function PaginationControl(props) {

    const {t , i18n } = useTranslation()

    const { totalPages, currentPage, setCurrentPage } = props

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    if(totalPages === 1){
        return null
    }


    return (
        <div className='font-bold bg-[var(--colCard)]  border-[3px] rounded-full py-2 px-4 border-[var(--colTextA)] select-none flex items-center gap-4 rtl'>
            <button onClick={nextPage} className='hover:text-[var(--textHover)]'><IoChevronForward /></button>
            <div className={`flex items-center gap-2 ${i18n.language === 'fa' ? 'rtl' : 'ltr' }`}>
                <span>{t('page')}</span>
                <span>{currentPage}</span>
                <span>{t('from')}</span>
                <span>{totalPages}</span>
            </div>
            <button onClick={prevPage} className='hover:text-[var(--textHover)]'><IoChevronBack /></button>
        </div>
    )

}
