import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lock, FileText, Gamepad2,MessagesSquare,Car,Wifi } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureXplorer",
      description: "SecureXplorer est une plateforme web tout-en-un pour l’analyse de sécurité réseau et web. Elle propose une interface moderne et intuitive permettant d’utiliser plusieurs outils d’audit sans aucune installation locale.",
      icon: Lock,
      stack: ["PHP", "MySQL", "Sessions", "Python","JS","Css","PHPMAILER"],
      gradient: "from-elite-purple to-elite-purple-light",
      linkedin:"https://www.linkedin.com/posts/el-bouamraoui-houssam-0569a1326_cybersaezcuritaez-daezveloppementweb-python-activity-7346671559475924992-ftdh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJfPQIBhVJ-_7LDaVjb7glTMqPvdnsJ2dY",
      demo: "https://www.linkedin.com/posts/el-bouamraoui-houssam-0569a1326_cybersaezcuritaez-daezveloppementweb-python-activity-7346671559475924992-ftdh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJfPQIBhVJ-_7LDaVjb7glTMqPvdnsJ2dY",
      images: [
        "/picture projet/securexplorer/image_index_1.png",
        "/picture projet/securexplorer/image_foncti_2.png"
      ]
    },
    {
      title: "SmartNote",
      description: "Application de prise de notes intelligente permettant à l'utilisateur de rédiger, organiser et sauvegarder ses notes. Grâce à une intelligence artificielle intégrée, l'utilisateur peut générer automatiquement un résumé synthétique de ses notes. Ensuite, il peut créer et passer un examen personnalisé basé sur le contenu de ses notes pour s'auto-évaluer. Développé en PHP et JavaScript, avec une interface interactive et une gestion sécurisée des sessions.",
      icon: FileText,
      stack: ["PHP", "JS", "Sessions", "HTML", "CSS" ,"PHPMAILER"],
      gradient: "from-elite-white to-elite-purple",
      demo: "https://github.com/HoussamElBouamraoui/module-note/",
      images: [
        "/picture projet/Smartnote/index_1.png",
        "/picture projet/Smartnote/page_note_2.png"
      ]
    },
    {
      title: "Jeu Snake Python",
      description: "Un mini-jeu Snake en JS pour comprendre la logique événementielle et les collisions.",
      icon: Gamepad2,
      stack: ["JS", "html", "css"],
      gradient: "from-elite-purple-dark to-elite-white",
      demo: "https://github.com/HoussamElBouamraoui/serpant",
      images: [
        "/picture projet/snake/index_snake_1.png",
        "/picture projet/snake/jeu_snake_2.png"
      ]
    },
    {
      title: "SupportPro Hub (Projet de stage)",
      description: "SupportPro Hub est une plateforme web complète dédiée à la gestion des tickets d’assistance.\nElle centralise les demandes clients, facilite la communication entre utilisateurs et techniciens, et offre un suivi en temps réel grâce à un tableau de bord moderne et intuitif.\nL’application intègre un système VIP, un journal d’activités (ActivityLog), une messagerie interne, et des outils d’analyse pour un support rapide et traçable.",
      icon: MessagesSquare,
      stack: ["Laravel", "livewire", "MySQL" , "Blade" ,"React" ,"PHP" ,"JS","TailwindCSS"],
      gradient: "from-elite-purple-dark to-elite-white",
      demo: "https://supportprohub.example.com",
      images: [
        "/picture projet/supportPro hub/analyse.png",
        "/picture projet/supportPro hub/dashboard_admin.png",
        "/picture projet/supportPro hub/index.png",
        "/picture projet/supportPro hub/intervention.png",
        "/picture projet/supportPro hub/ticket.png"
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 animated-bg">
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 1.5}s` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text glitch" data-text="Mes Projets">Mes Projets</span>
          </h2>
          <p className="text-base sm:text-lg text-elite-white/70 max-w-2xl mx-auto px-4">
            Découvrez mes créations alliant <span className="text-elite-purple font-semibold">sécurité, performance et innovation</span>
          </p>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="elite-card p-4 sm:p-6 lg:p-8 group magnetic">
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 bg-gradient-to-br ${project.gradient} rounded-lg elite-glow`}>
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-elite-white">{project.title}</h3>
                  </div>
                </div>
                {/* Description */}
                <p className="text-sm sm:text-base text-elite-white/70 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-elite-purple">Stack technique :</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.stack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-elite-purple/20 text-elite-purple border-elite-purple/30 hover:bg-elite-purple/30 transition-colors magnetic"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* Carousel */}
                <div className="mb-4 sm:mb-6 relative">
                  <Carousel 
                    autoPlay={true} 
                    autoPlayInterval={3000}
                    className="w-full"
                  >
                    <CarouselContent>
                      {project.images.map((image, idx) => (
                        <CarouselItem key={idx}>
                          <div className="relative">
                            <img 
                              src={image} 
                              alt={`${project.title} screenshot ${idx + 1}`} 
                              className="rounded-lg w-full h-48 sm:h-56 lg:h-64 object-cover border border-elite-purple/20"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                              {idx + 1}/{project.images.length}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 sm:left-2 bg-elite-purple/80 hover:bg-elite-purple text-white border-0 h-8 w-8" />
                    <CarouselNext className="right-1 sm:right-2 bg-elite-purple/80 hover:bg-elite-purple text-white border-0 h-8 w-8" />
                  </Carousel>
                </div>
                {/* Actions */}
                <div className="flex gap-2 sm:gap-3">
                  {project.demo && (
                    <Button size="sm" className="elite-glow flex-1 bg-gradient-purple text-white border-0 magnetic text-xs sm:text-sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Lien
                      </a>
                    </Button>


                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
            <span className="text-elite-purple glitch" data-text="🧪 Projets à venir">🧪 Projets à venir</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Application de location de voitures",
                icon: Car,
              },
              {
                title: "💬 Chat sécurisé ",
                icon: MessagesSquare,
              },
              {
                title: "Evil twin ",
                icon: Wifi,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="elite-card p-4 sm:p-6 text-center magnetic relative overflow-hidden group animate-fadeIn"
                style={{
                  background: "linear-gradient(135deg, #7c3aed33 0%, #a78bfa33 100%)",
                  border: "1.5px solid #7c3aed",
                  boxShadow: "0 8px 32px 0 #7c3aed33",
                }}
              >
                <div className="flex flex-col items-center gap-2 mb-2">
                  <span className="inline-block rounded-full bg-elite-purple/30 p-2 sm:p-3 mb-2 animate-pulse group-hover:scale-110 transition-transform">
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-elite-purple drop-shadow-lg" />
                  </span>
                  <p className="text-elite-white/80 font-semibold text-sm sm:text-base lg:text-lg mb-1">
                    {project.title}
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 flex justify-center">
                  <span className="text-xs font-bold px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-elite-purple to-elite-purple-light text-white shadow-lg animate-bounce">
                    🚧 En développement...
                  </span>
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-xl border border-elite-purple/40 group-hover:border-elite-purple/80 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
