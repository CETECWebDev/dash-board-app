import { useDirectionContext } from "@/context/DirectionContext";
import { useSidebar } from "@/context/SidebarContext";
import SideBarToggleBtn from "./module/SideBarToggleBtn/SideBarToggleBtn";
import Header from "./module/Header/Header";

export default function MainLayout({ children }) {

  const { dir } = useDirectionContext();
  const { isSidebarOpen } = useSidebar()

  const closeMenuClass = `w-full`
  const openMenuClass = `${dir === 'rtl' ? 'lg:mr-[240px]' : 'lg:ml-[240px]'} w-screen lg:w-[calc(100%-240px)] `

  return (
    <div className={`flex ${dir === 'rtl' ? 'font-IranYekan' : 'font-roboto'} `}>
      <div className={`${isSidebarOpen ? openMenuClass : closeMenuClass}`}>
        <div className="w-full flex items-center px-5 pt-5 gap-3">
          <SideBarToggleBtn />
          <Header />
        </div>
        {children}
      </div>
    </div>
  );
}
