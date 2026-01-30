import { ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Food Finder (Shaorma Finder)",
        description: "Aplicație Android nativă (Kotlin) care localizează cea mai apropiată șaormerie. Include integrare Firebase pentru backend și Google Maps API pentru navigare și geolocație.",
        image: "/projects/food_finder.png",
        tags: ["Kotlin", "Android SDK", "Firebase", "Google Maps API"],
        demoUrl: "#",
        githubUrl: "https://github.com/sorin2net/Food_Finder",
    },
    {
        id: 4,
        title: "AI Hand Gesture Tracker",
        description: "Sistem de Computer Vision care detectează și analizează gesturile mâinii în timp real. Calculează unghiurile articulațiilor, numără degetele și recunoaște semne complexe (Peace, Rock, OK).",
        image: "/projects/handpose.jpg",
        tags: ["Python", "OpenCV", "MediaPipe", "NumPy", "Jupyter"],
        demoUrl: "#",
        githubUrl: "https://github.com/sorin2net/HandPose",
    },
    {
        id: 3,
        title: "Cinema Reservation System",
        description: "Sistem complex Client-Server Java Swing. Include rezervări în timp real (multithreading), notificări pe email (SMTP), restricții de vârstă și sincronizare automată între clienți.",
        image: "/projects/cinema_app.png",
        tags: ["Java Swing", "Socket Networking", "SQLite", "Multithreading"],
        demoUrl: "#",
        githubUrl: "https://github.com/sorin2net/CinemaApp",
    },
    {
        id: 2,
        title: "Red Hood RPG",
        description: "Joc 2D Dark Fantasy construit complet în Java. Demonstrează principii OOP avansate, Design Patterns, sistem de salvare/încărcare, inamici cu AI și luptă duală.",
        image: "/projects/redhood.png",
        tags: ["Java", "OOP", "Game Architecture", "Design Patterns"],
        demoUrl: "#",
        githubUrl: "https://github.com/sorin2net/JavaGame__OOP",
    },
    {
        id: 5,
        title: "Cinema Database Manager",
        description: "Soluție completă de baze de date pentru managementul unui lanț de cinema. Include modelare logică/relațională complexă și implementare fizică în Oracle Database 11g.",
        image: "/projects/cinema_db.png",
        tags: ["Oracle SQL", "PL/SQL", "Data Modeling", "Database Design"],
        demoUrl: "#",
        githubUrl: "https://github.com/sorin2net/CinemaDB",
    },
    {
        id: 6,
        title: "Personal Portfolio Website",
        description: "Site-ul pe care navighezi chiar acum. O aplicație Single Page (SPA) modernă, construită cu React și Vite. Include temă dinamică (Dark/Light), animații CSS avansate și formular de contact funcțional integrat cu EmailJS.",
        image: "/projects/portfolio.png", 
        tags: ["React", "Tailwind CSS", "Vite", "EmailJS", "Vercel"],
        demoUrl: "https://website-react-tailwind.vercel.app",
        githubUrl: "https://github.com/sorin2net/Website",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aici sunt proiectele mele reprezentative, care acoperă dezvoltarea mobilă,
                    aplicații desktop distribuite și baze de date complexe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col">

                            {/* MODIFICARE: h-60 (mai inalt) si p-1 (padding minim) pentru poza cat mai mare */}
                            <div className="h-60 overflow-hidden relative bg-secondary/50 flex items-center justify-center p-1">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* MODIFICARE: p-4 in loc de p-6 pentru a compacta textul */}
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-[10px] font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* MODIFICARE: text-lg (mai mic decat xl) */}
                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>

                                {/* MODIFICARE: text-sm cu leading-snug (mai compact) */}
                                <p className="text-muted-foreground text-sm leading-snug mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center mt-auto pt-2 border-t border-border/50">
                                    <div className="flex space-x-3">
                                        {project.demoUrl !== "#" && (
                                            <a href={project.demoUrl} target="_blank"
                                               className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLinkIcon size={18} />
                                            </a>
                                        )}
                                        <a href={project.githubUrl} target="_blank"
                                           className="text-foreground/80 hover:text-primary transition-colors duration-300" >
                                            <GithubIcon size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/sorin2net" target="_blank">
                        See All Repositories <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}