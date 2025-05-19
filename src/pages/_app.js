import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute={'class'} defaultTheme="dark" >
      <SideBar />
      <div className="ml-[300px] w-[calc(100%-300px)]">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
