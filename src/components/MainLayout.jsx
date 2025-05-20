import { useDirection } from "@/context/DirectionContext";
import SideBar from "@/components/module/SideBar";

export default function MainLayout({ children }) {
  const { dir } = useDirection();

  return (
    <div className="flex">
      <div className={`${dir === 'rtl' ? 'lg:mr-[300px]' : 'lg:ml-[300px]'} w-[calc(100%-300px)] `}>
        {children}
      </div>
    </div>
  );
}
