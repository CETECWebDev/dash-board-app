import useAppStore from "@/stores/appStore";
import SideBarToggleButton from "./module/SideBar/SideBarToggleButton";
import Header from "./module/Header/Header";

export default function MainLayout({ children }) {

  const { isSideBarOpen } = useAppStore()

  const closeMenuClass = `w-full`
  const openMenuClass = `w-screen lg:w-[calc(100%-240px)] lg:ms-[240px]`

  return (
    <div className={`flex`}>
      <div className={isSideBarOpen ? openMenuClass : closeMenuClass}>
        <div className="w-full mb-3 flex items-center px-3 pt-3 gap-3">
          <SideBarToggleButton />
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
}
