import { useDirectionContext } from "@/context/DirectionContext";

export default function MainLayout({ children }) {
  const { dir } = useDirectionContext();

  return (
    <div className={`flex ${dir === 'rtl' ? 'font-IranYekan' : 'font-roboto'} `}>
      <div className={`${dir === 'rtl' ? 'lg:mr-[240px]' : 'lg:ml-[240px]'} w-screen lg:w-[calc(100%-240px)] `}>
        {children}
      </div>
    </div>
  );
}
