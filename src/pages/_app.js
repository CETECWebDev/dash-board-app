import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";

import { ThemeProvider } from "next-themes";
import React from "react";
import MainLayout from "@/components/MainLayout";
import { useTranslation } from "react-i18next";
import "@/api/interceptors/interceptors";
import '@/i18n'



export default function App({ Component, pageProps }) {

  const { i18n } = useTranslation() 
  

  return (

    <ThemeProvider attribute={"class"} defaultTheme="dark">
      <div className={`${i18n.language === 'fa' ? `rtl font-[IranSans]` : 'font-roboto'}`}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </div>
    </ThemeProvider>

  );
}
