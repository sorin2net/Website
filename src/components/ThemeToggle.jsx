import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {


    const [isDarkMode, setIsDarkMode] = useState(() => {

        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");

            return storedTheme !== "light";
        }
        return true;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );

};