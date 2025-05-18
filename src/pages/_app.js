import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute={'class'} defaultTheme="light" >
      <SideBar />
      <div className="ml-[300px] w-[calc(100%-300px)]">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
