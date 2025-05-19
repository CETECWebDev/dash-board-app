import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from "next-themes";
import React, { useState } from "react";

export default function App({ Component, pageProps }) {

  const [sidebarRight, setSidebarRight] = useState(false);

  return (
    <ThemeProvider attribute={'class'} defaultTheme="dark" >
      <div className="flex">
        <SideBar
          isRight={sidebarRight}
          onTogglePosition={() => setSidebarRight(prev => !prev)}
        />
        <div className="flex-1 ">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}
