import { useDirection } from "@/context/DirectionContext";
import SideBar from "@/components/module/SideBar";

export default function Layout({ children }) {
  const { dir } = useDirection();

  return (
    <div className="flex">
      <SideBar />
      <div className={`${dir === 'rtl' ? 'mr-[300px]' : 'ml-[300px]'} w-[calc(100%-300px)] `}>
        {children}
      </div>
    </div>
  );
}
