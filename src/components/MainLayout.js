import { useDirectionContext } from "@/context/DirectionContext";

export default function MainLayout({ children }) {
  const { dir } = useDirectionContext();

  return (
    <div className={`flex ${dir === 'rtl' ? 'font-IranSans' : 'font-roboto'} `}>
      <div className={`${dir === 'rtl' ? 'lg:mr-[300px]' : 'lg:ml-[300px]'} w-screen lg:w-[calc(100%-300px)] `}>
        {children}
      </div>
    </div>
  );
}
