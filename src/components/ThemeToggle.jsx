import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    // 1. REPARATIE: Inițializăm starea verificând direct LocalStorage.
    // Asta rezolvă eroarea "set-state-in-effect".
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Verificăm dacă codul rulează în browser (fereastra există)
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            // Dacă userul are "light" salvat, returnăm false.
            // Altfel (dacă e "dark" sau nu are nimic salvat), returnăm true.
            return storedTheme !== "light";
        }
        return true; // Default server-side
    });

    // 2. useEffect acum doar sincronizează clasa CSS cu starea.
    // Nu mai modificăm starea aici.
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]); // Se activează automat când se schimbă isDarkMode

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none focus:ring-2 focus:ring-primary" // Am pus outline-none standard
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );
    // Am șters comentariul de aici care cauza eroarea "Unreachable code"
};