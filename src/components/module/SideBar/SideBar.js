import useAppStore from "@/stores/appStore";
import React from "react";
import CetecLogo from '@/asset/CetecLogo.svg'
import ProfileSection from "@/components/template/SideBar/ProfileSection";
import i18n from "@/i18n";
import NavigationSection from "@/components/template/SideBar/NavigationSection";
import SettingsSection from "@/components/template/SideBar/SettingsSection";

export default function SideBar() {

  const { isSideBarOpen , toggleSideBar } = useAppStore()
  const translateClass = i18n.language === 'en' ? `-translate-x-full` : `translate-x-full`


  return (
    <>
      <div className={`h-[100dvh] w-[240px] bg-[var(--colCard)] shadow-lg transition-all duration-300 ease-in-out fixed z-[999999] top-0 start-0 ${isSideBarOpen ? 'translate-x-0' : translateClass}`}>

        {/* Logo Section */}

        <div className="w-full flex justify-center my-7">
          <CetecLogo className="text-[var(--colTextA)] scale-[1.1]" />
        </div>

        {/* Profile Section */}

        <div className="w-full">
          <ProfileSection />
        </div>


        {/* Navigation Section */}

        <div className="w-full mt-7">
          <NavigationSection />
        </div>

        {/* Settings Section */}
        <div className="w-full mt-7">
          <SettingsSection />
        </div>



      </div>

      {/* mobile Overlay */}

      <div onClick={toggleSideBar} className={`block lg:hidden w-screen h-screen backdrop-blur-md fixed top-0 left-0 z-[900] bg-black bg-opacity-50 transition-all duration-700 ease-in-out ${isSideBarOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>

    </>
  );
}
