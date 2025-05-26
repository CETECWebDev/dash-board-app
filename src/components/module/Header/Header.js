import { useDirectionContext } from '@/context/DirectionContext'
import { translate } from '@/language/language'
import React from 'react'
import PersianClock from '../PersianClock/PersianClock'

export default function Header() {

    const {dir} = useDirectionContext()

    return (
        <div className='w-full h-12 bg-[var(--colCard)] shadow-md rounded-full flex justify-between items-center px-5 md:px-10 lg:px-16 py-7'>

            <div>
                <h1 className="text-center font-bold text-[clamp(10px,1.3dvw,24px)] text-[var(--textTitle)]">{translate(dir, "sidebar.title")}</h1>
            </div>

            <div>
                <PersianClock />

            </div>




        </div>
    )
}
