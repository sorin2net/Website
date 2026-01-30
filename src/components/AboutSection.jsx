import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Despre <span className="text-primary"> Mine</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        {/* Titlu curat */}
                        <h3 className="text-2xl font-semibold">
                            Student, Developer & Service Desk Intern
                        </h3>

                        {/* Paragraf 1: Direct la subiect - Ce faci tehnic */}
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Sunt student în anul 3 la Facultatea de Automatică și Calculatoare.
                            Dezvolt aplicații Android native, sisteme desktop client-server și lucrez cu baze de date complexe.
                            În prezent, îmi îndrept atenția către <span className="text-foreground font-medium">Game Development</span>, învățând Unity pentru a crea propriile jocuri.
                        </p>

                        {/* Paragraf 2: Mentorat + Internship (Context) */}
                        <p className="text-muted-foreground leading-relaxed">
                            Pe lângă facultate și proiecte, sunt activ pe două planuri: ofer meditații la informatică de peste un an, pregătind elevi pentru examene, și activez ca <span className="text-foreground font-medium">Service Desk Agent</span> la SCC Group, unde învăț rigoarea mediului corporate.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="#contact" className="cosmic-button text-center">
                                Contactează-mă
                            </a>
                            <a
                                href="/CV_Denis_Dumitriu.pdf"
                                download="CV_Denis_Dumitriu.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10
                                transition-colors duration-300 text-center flex items-center justify-center"
                            >
                                Descarcă CV
                            </a>
                        </div>
                    </div>

                    {/* Cardurile din dreapta */}
                    <div className="grid grid-cols-1 gap-6">

                        {/* Card 1: Technical Hard Skills */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Dezvoltare Software</h4>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Focus pe Java, Kotlin și Python. Construiesc aplicații mobile și desktop funcționale, iar acum explorez partea creativă prin Unity Engine.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Mentorat & Soft Skills */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Mentorat</h4>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        De peste un an ofer pregătire la informatică. Această experiență m-a învățat să explic clar concepte tehnice și să am răbdare cu procesul de învățare al altora.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Internship SCC - Corrected */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Internship SCC Group</h4>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Rol de Service Desk Agent. Aici îmi perfecționez abilitățile de comunicare (Soft Skills), troubleshooting și înțelegerea sistemelor de operare într-un mediu enterprise.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}