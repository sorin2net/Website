const skills = [
  
  { name: "C/C++", level: 90, category: "Programming Languages" },
  { name: "Java", level: 85, category: "Programming Languages" },
  { name: "Python", level: 80, category: "Programming Languages" },
  { name: "Kotlin", level: 70, category: "Programming Languages" },
  { name: "SQL", level: 70, category: "Programming Languages" },
  /*{ name: "Assembly", level: 65, category: "Programming Languages" },*/

  { name: "Unity", level: 80, category: "Frameworks & Technologies" },
  { name: "React", level: 70, category: "Frameworks & Technologies" },
  { name: "Tailwind CSS", level: 65, category: "Frameworks & Technologies" },
  { name: "Android Dev (Kotlin)", level: 65, category: "Frameworks & Technologies" },
  { name: "Tkinter", level: 60, category: "Frameworks & Technologies" },
  

  { name: "Visual Studio Code", level: 90, category: "Tools" },
  { name: "Git / GitHub", level: 80, category: "Tools" },
  { name: "IntelliJ / PyCharm", level: 80, category: "Tools" },
  { name: "Terminal / Bash", level: 70, category: "Tools" },
  { name: "Oracle SQL Developer", level: 65, category: "Tools" },

];


{/* aici am un vector de skills uri unde completez dupa ce mai fac niste proiecte */}


export const SkillsSection= () => {
    return (
        <section id="skills" className="py-20 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>

                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {skills.map((skill,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div> 

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">

                            </div>     

                        </div>
                    ))}   

                </div>

            </div>
        </section>
        )

}