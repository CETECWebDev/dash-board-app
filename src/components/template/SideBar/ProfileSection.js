import React from 'react'
import Profile from '@/asset/profile.svg'
import SideBarContent from '@/content/sideBarContent'
import { useTranslation } from 'react-i18next'

export default function ProfileSection() {

  const {t} = useTranslation()

  return (
    <div className='w-full flex flex-col justify-center items-center'>

        <Profile className={`w-[80px] text-[var(--colTextA)]`}/>

        <div className='text-[var(--colTextA)] font-bold text-lg mt-1'>{t(SideBarContent.profileSection.username.textKey)}</div>

        <div className='text-[var(--colTextB)]'>{t(SideBarContent.profileSection.role.textKey)}</div>
        
    </div>
  )


}
