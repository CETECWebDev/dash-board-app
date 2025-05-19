import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ThemeProvider } from "next-themes";
import React, { useState } from "react";
import { DirectionProvider } from "@/context/DirectionContext";
import Layout from "@/components/Layout";


export default function App({ Component, pageProps }) {
  // const [sidebarRight, setSidebarRight] = useState(false);

  return (
    <DirectionProvider>
      <ThemeProvider attribute={"class"} defaultTheme="dark">
        <div className="">
          <SideBar
              
          />
         <Layout>
          <Component {...pageProps} />
        </Layout>
        </div>
      </ThemeProvider>
    </DirectionProvider>
  );
}
