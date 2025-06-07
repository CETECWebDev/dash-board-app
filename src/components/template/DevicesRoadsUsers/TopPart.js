import PaginationControl from '@/components/module/Controls/PaginationControl'
import devicesPageContent from '@/content/devicesPageContent'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TopPart(props) {

    const { t } = useTranslation()

    return (
        <div className='w-full flex flex-col gap-3 lg:flex-row lg:justify-between items-center text-[var(--colTextA)] p-5'>
            <div className='flex lg:flex-row flex-col gap-2'>
                {props.content.btnLinks.map((item , index) => {
                    return <Link key={index} className="linkHover font-bold bg-[var(--colCard)]  border-[3px] rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)] flex items-center gap-2" href={item.href} > {item.icon} {t(item.textKey)} </Link>
                })}
            </div>

            <div>
                <PaginationControl {...props} />
            </div>

        </div>
    )
}
