import { useState } from "react"

export const ThemeToggle = () => {
    const [istDarkMode,setIsDarkMode]= useState(false);
    return <button>{isDarkMode ? <Sun />: <Moon />} </button>
}