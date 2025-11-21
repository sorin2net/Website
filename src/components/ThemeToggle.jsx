import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode,setIsDarkMode]= useState(false);

useEffect(() => {
    const storedTheme = localStorage.getItem("theme"); //verific tema salvata in local storage
    if (storedTheme === "dark") { 
        setIsDarkMode(true); //setez starea pe dark
        document.documentElement.classList.add("dark"); 
        
    } else {
        localStorage.setItem("theme","light");
            setIsDarkMode(false); //setez starea pe light

    }
} , []) //vector de dependente gol pt a rula o singura data


    const toggleTheme = () => {
        if(isDarkMode){
            
            document.documentElement.classList.remove("dark"); //elimin clasa dark
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
    }


        else{
            document.documentElement.classList.add("dark"); //adaug clasa dark
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }

}
    return (
    <button onClick={toggleTheme} 
    className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", 
        "focus:outlin-hidden" //elimin conturul albastru la click

    )} 
    >

        {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
    ) : (
        <Moon className="h-6 w-6 text-blue-900"/>
    )} 
    </button>     //daca e dark arat soarele, altfel luna
    ); 
};

