import SideBar from "@/components/module/SideBar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute={'class'} defaultTheme="light" >
      <SideBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
