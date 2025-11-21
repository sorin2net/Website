import { Briefcase, Code, User } from "lucide-react";


export const AboutSection= () => {
    return(
     <section id="about" className="py-24 px-4 relative"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Despre <span className="text-primary"> Mine</span>

            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"> Student, Programator, Meditator </h3>
                    <p className="text-muted-foreground">
                        Realizator de site-uri web si aplicatii in diferite
                        limbaje de programare precum python, java, react, c++.
                        Pasionat de tehnologie si programare.  {/*de modificat*/}
                        
                    </p>

                    <p className="text-muted-foreground">
                        Imi doresc sa ma dezvolt si sa invat cat mai multe lucruri noi
                        in domeniul programarii si dezvoltarii web, pentru a putea
                        crea proiecte cat mai interesante si utile.  {/*de modificat*/}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contact 
                        </a> 
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10
                         transition-colors duration-300 text-center"
                         >
                           Descarca CV {/*aici vreau un document cu cv-ul in src si sa il pot descarca prin buton, acolo la href pun link-ul catre cv sa il downloadez*/}
                        </a> 
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Aplicatii c++/java/python </h4>
                                <p className="text-muted-foreground"> imi place sa codez foarte mult fac asta si in timpul liber</p>
                            </div> {/*de modificat*/}
                        </div>
                        
                    </div >

                    <div className="gradient-border p-6 card-hover"> 
                        
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Aplicatii c++/java/python </h4>
                                <p className="text-muted-foreground"> imi place sa codez foarte mult fac asta si in timpul liber</p>
                            </div> {/*de modificat*/}
                        </div>
                        
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Aplicatii c++/java/python </h4>
                                <p className="text-muted-foreground"> imi place sa codez foarte mult fac asta si in timpul liber</p>
                            </div> {/*de modificat*/}
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>
     </section>
     );
}