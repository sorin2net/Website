import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { AboutSection } from "@/components/AboutSection";    
import { SkillsSection } from "@/components/SkillsSection";

export const Home= () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">

        {/* Theme toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </main>
        {/* Footer */}

    </div>;
}; {/* ramas la 1:40:50 sectiunea skills */}