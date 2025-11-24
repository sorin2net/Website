import { ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react"

const projects=[
    {
        id: 1,
        title: "Cinema Java",
        description: "Copie cinema city facut in java cu interfata grafica Swing",
        image: "/projects/CinemaJava.JPG",
        tags: ["Java", "Swing", "OOP"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Logical",
        description: "Proiect in baza de date pentru un cinema care vinde bilete",
        image: "/projects/Logical.png",
        tags: ["SQL", "Database", "PL/SQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "RedHood",
        description: "Joc 2D facut in Java folosind OOP si design patterns",
        image: "/projects/redhood.png",
        tags: ["Java", "OOP", "Design Patterns"],
        demoUrl: "#",
        githubUrl: "#",
    }
]
{/*mai sus trebuie sa adaug poze la ce proiecte fac, de preferat multiplu de 3, o sa incerc sa fac 6 sa fie*/}
{/* */}

export const ProjectsSection= () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-width-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> 
                Aici sunt cateva dintre proiectele mele recente. Constant creez
                altele noi pentru a invata si a-mi imbunatati abilitatile.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden"> {/*eventual mai joc de la h-64 sa pun h-48*/}
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>   

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>  
                         

                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLinkIcon size={20}/></a>
                                        <a href={project.githubUrl} target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300" >
                                        <GithubIcon size={20}/></a>
                                    </div>
                                </div>
                            </div>
                    </div>    
                ))}
            </div>


                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/sorin2net" target="_blank">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
        </div>
        </section>
    )


}