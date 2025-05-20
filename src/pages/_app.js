import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute={'class'} defaultTheme="dark" >
      <div className="flex">
        <SideBar/>
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}
