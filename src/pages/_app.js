import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";

import { ThemeProvider } from "next-themes";
import React, { useState } from "react";
import { DirectionProvider } from "@/context/DirectionContext";
import MainLayout from "@/components/MainLayout";


export default function App({ Component, pageProps }) {

  return (
    <DirectionProvider>
      <ThemeProvider attribute={"class"} defaultTheme="dark">
        <div >
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </div>
      </ThemeProvider>
    </DirectionProvider>
  );
}
