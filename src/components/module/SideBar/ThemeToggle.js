import { useTheme } from 'next-themes';
import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs";

export default function ThemeToggle() {

    const { theme , setTheme  } = useTheme()

    const themeToggleHandler = () => {
        setTheme( theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button className='flex items-center justify-center w-10 h-10 border-2 border-[var(--colTextA)] rounded-full linkHover hover:border-[var(--textHover)] hover:text-[var(--textHover)]' onClick={themeToggleHandler}>
            <BsMoonStarsFill/>
        </button>
    )
}
