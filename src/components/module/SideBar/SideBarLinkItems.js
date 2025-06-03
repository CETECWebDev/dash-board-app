import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SideBarLinkItems({textKey , href , icon}) {

  const path = usePathname()

  const selectedClass = 'border-b-2 border-[var(--textHover)] w-fit pb-1 font-bold'
  

  const {t} = useTranslation()

  return (
    <li className={`${path === href ? selectedClass : ``}`} ><Link className='flex items-center gap-2 linkHover hover:text-[var(--textHover)]' href={href} > {icon} {t(textKey)} </Link></li>
  )
}
