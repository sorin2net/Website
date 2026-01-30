import { useState } from "react";
import { cn } from "../lib/utils";

// Importam iconitele necesare
import {
    FaJava, FaPython, FaReact, FaGitAlt, FaAndroid, FaTerminal,
    FaDatabase
} from "react-icons/fa";

import {
    SiCplusplus, SiKotlin, SiUnity, SiTailwindcss,
    SiIntellijidea, SiOracle, SiFirebase, SiGooglecloud
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbNetwork } from "react-icons/tb"; // Iconita pentru Networking/Sockets

const skills = [
    // Languages
    { name: "Java (OOP & Swing)", level: 90, category: "Programming Languages", icon: FaJava },
    { name: "Kotlin", level: 85, category: "Programming Languages", icon: SiKotlin },
    { name: "C/C++", level: 95, category: "Programming Languages", icon: SiCplusplus },
    { name: "SQL & PL/SQL", level: 80, category: "Programming Languages", icon: FaDatabase },
    { name: "Python", level: 85, category: "Programming Languages", icon: FaPython },

    // Frameworks & Tech
    { name: "Android SDK", level: 80, category: "Frameworks & Technologies", icon: FaAndroid },
    { name: "Firebase", level: 75, category: "Frameworks & Technologies", icon: SiFirebase },
    { name: "React", level: 75, category: "Frameworks & Technologies", icon: FaReact },
    { name: "Unity Engine", level: 80, category: "Frameworks & Technologies", icon: SiUnity },
    { name: "Socket Networking", level: 75, category: "Frameworks & Technologies", icon: TbNetwork },

    // Tools
    { name: "Git / GitHub", level: 85, category: "Tools", icon: FaGitAlt },
    { name: "Oracle SQL Dev", level: 70, category: "Tools", icon: SiOracle },
    { name: "IntelliJ / Android Studio", level: 85, category: "Tools", icon: SiIntellijidea },
    { name: "Terminal / Bash", level: 70, category: "Tools", icon: FaTerminal },
    { name: "VS Code", level: 90, category: "Tools", icon: VscVscode },
];

const categories = ["All", "Programming Languages", "Frameworks & Technologies", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-20 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                                onClick={() => setActiveCategory(category)}
                                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                                )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover group">

                            {/* Header cu Iconita si Nume */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-full bg-secondary/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <skill.icon size={24} />
                                </div>
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            {/* Bara de progres */}
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                     style={{ width: skill.level + "%" }} />
                            </div>

                            <div className="text-right mt-2">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}