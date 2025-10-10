import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export const HeroSection = () => {
  const [terminalText, setTerminalText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [showCvActions, setShowCvActions] = useState(false);

    const profileImages: string[] = [
        "/houssam.png",
        "/houssam2.png"
    ];

  const terminalCommands = [
    "> Initialisation  ...",
    "> Chargement des outils de Houssam...",
    "> Lancement  🟢"
  ];

  useEffect(() => {
    let commandIndex = 0;
    let charIndex = 0;
    let currentText = "";
    
    const typeWriter = () => {
      if (commandIndex < terminalCommands.length) {
        if (charIndex < terminalCommands[commandIndex].length) {
          currentText += terminalCommands[commandIndex][charIndex];
          setTerminalText(currentText);
          charIndex++;
          setTimeout(typeWriter, 50);
        } else {
          currentText += "\n";
          setTerminalText(currentText);
          commandIndex++;
          charIndex = 0;
          setTimeout(typeWriter, 500);
        }
      } else {
        setTimeout(() => setShowContent(true), 500);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg pt-20 sm:pt-24">
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      {/* Terminal Animation */}
      <div className={`absolute top-16 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto sm:left-8 sm:translate-x-0 terminal-text text-xs sm:text-sm transition-opacity duration-1000 z-10 ${showContent ? 'opacity-0' : 'opacity-100'}`}>
        <pre className="whitespace-pre-line">{terminalText}</pre>
      </div>
      
      {/* Main Content */}
      <div className={`container mx-auto px-4 sm:px-6 text-center transition-all duration-1000 z-10 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative magnetic">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden elite-glow border-4 border-elite-purple/20">
                <Carousel
                  autoPlay={true} 
                  autoPlayInterval={3000}
                  className="w-full h-full"
                >
                  <CarouselContent className="h-full">
                    {profileImages.map((image, idx) => (
                      <CarouselItem key={idx} className="h-full">
                        <img
                          src={image}
                          alt={`Photo de profil ${idx + 1}`}
                          className="w-full h-full object-cover object-top filter brightness-110"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-elite-purple rounded-full pulse-elite hidden sm:block"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-elite-white rounded-full animate-pulse hidden sm:block"></div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 glitch" data-text="Houssam">
                <span className="gradient-text">Houssam</span>
              </h1>
              <p className="text-lg sm:text-xl text-elite-white/80 mb-2">
                Étudiant IT &  <span className="text-elite-purple font-semibold">Cybersécurité</span>
              </p>
              <div className="inline-block px-4 py-2 bg-elite-purple/20 text-elite-purple rounded-full text-xs sm:text-sm border border-elite-purple/30 elite-glow">
                ⭐ Mention Très Bien
              </div>
            </div>
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-elite-white/90 italic border-l-4 border-elite-purple pl-6 relative">
              <div className="absolute -left-1 top-0 w-2 h-full bg-gradient-purple rounded-full"></div>
              "J'apprends, je code, j'explore.<br />
              Je construis des projets <span className="text-elite-purple">utiles et sécurisés</span>."
            </blockquote>
            
            <p className="text-base sm:text-lg text-elite-white/70">
              Étudiant en <span className="text-elite-purple font-medium">Génie Informatique</span> – Mention Très Bien
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 items-center sm:items-stretch justify-center lg:justify-start">
              <Button asChild size="lg" className="elite-glow bg-gradient-purple text-white border-0 magnetic w-full sm:w-auto">
                <a href="#projects">
                  <Eye className="mr-2 h-5 w-5" />
                  Voir mes projets
                </a>
              </Button>
              <div className="relative">
                <Button
                  variant="outline"
                  size="lg"
                  className="elite-glow border-elite-purple text-elite-purple hover:bg-elite-purple hover:text-white magnetic w-full sm:w-auto"
                  onClick={() => setShowCvActions((v) => !v)}
                >
                  CV
                </Button>
                {showCvActions && (
                  <div className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 flex flex-col gap-2 z-20">
                    <Button asChild size="sm" className="w-40 elite-glow border-elite-purple text-elite-purple bg-white hover:bg-elite-purple hover:text-white">
                      <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                        Voir le CV
                      </a>
                    </Button>
                    <Button asChild size="sm" className="w-40 elite-glow border-elite-purple text-elite-purple bg-white hover:bg-elite-purple hover:text-white">
                      <a href="/CV.pdf" download>
                        Télécharger le CV
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements - Repositioned */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-elite-purple rounded-full animate-pulse opacity-60 hidden sm:block"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-elite-white rounded-full animate-pulse delay-1000 opacity-40 hidden sm:block"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-elite-purple-light rounded-full animate-pulse delay-500 opacity-80 hidden sm:block"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-elite-purple rounded-full animate-pulse delay-700 opacity-30 hidden sm:block"></div>
    </section>
  );
};
