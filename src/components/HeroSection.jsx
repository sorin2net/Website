import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 text-center">

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                    {/* 1. Salut, sunt - Apare primul */}
                    <span className="inline-block animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
                        Salut, sunt&nbsp;
                    </span>

                    {/* 2. Numele - Apare al doilea */}
                    <span className="text-primary inline-block animate-fade-in-delay-1 opacity-0" style={{ animationFillMode: 'forwards' }}>
                        Denis Dumitriu
                    </span>

                    <br />

                    {/* 3. Subtitlul cu animatia de tastare - Apare al treilea */}
                    <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground mt-4 block animate-fade-in-delay-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
                        I am a{" "}
                        <TypeAnimation
                            sequence={[
                                'Student',
                                1000,
                                'Developer',
                                1000,
                                'Programming Tutor',
                                1000,
                                'Indie Game Dev',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-primary font-bold"
                            repeat={Infinity}
                        />
                    </span>
                </h1>

                {/* 4. Descrierea - Apare a patra */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-3 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    Student în anul 3 la Automatică și Calculatoare și intern la SCC Group.
                    Scriu cod în C++, Java, Kotlin și Python, dezvoltând de la aplicații mobile până la sisteme desktop complexe.
                    În timpul liber, ofer meditații la informatică și învăț să creez jocuri folosind Unity.
                </p>

                {/* 5. Butoanele - Apar ultimele */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-4 opacity-0" style={{ animationFillMode: 'forwards' }}>
                    <a href="#projects" className="cosmic-button flex items-center gap-2">
                        View Projects <ArrowRight size={18} />
                    </a>

                    <a
                        href="/Dumitriu-Denis-Gabriel_CV.pdf"
                        download="CV_Denis_Dumitriu.pdf"
                        className="px-8 py-3 rounded-full border border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2"
                    >
                        Download CV <Download size={18} />
                    </a>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        </section>
    );
};