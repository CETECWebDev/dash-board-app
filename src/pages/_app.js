import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";

// ایمپورت فونت‌آوسام CSS اضافه کن
import '@fortawesome/fontawesome-free/css/all.min.css';

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute={'class'} defaultTheme="light" >
      <SideBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
