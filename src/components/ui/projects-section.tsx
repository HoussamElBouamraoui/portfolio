import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock, FileText, Gamepad2,MessagesSquare,Car,Wifi,LifeBuoy, Globe } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureXplorer",
      description: "SecureXplorer est une plateforme web tout-en-un pour l’analyse de sécurité réseau et web. Elle propose une interface moderne et intuitive permettant d’utiliser plusieurs outils d’audit sans aucune installation locale.",
      icon: Lock,
      stack: ["PHP", "MySQL", "PHPMailer", "Sessions", "Python","JS","Css"],
      gradient: "from-elite-purple to-elite-purple-light"
    },
    {
      title: "SmartNote",
      description: "Application de prise de notes intelligente permettant à l'utilisateur de rédiger, organiser et sauvegarder ses notes. Grâce à une intelligence artificielle intégrée, l'utilisateur peut générer automatiquement un résumé synthétique de ses notes. Ensuite, il peut créer et passer un examen personnalisé basé sur le contenu de ses notes pour s'auto-évaluer. Développé en PHP et JavaScript, avec une interface interactive et une gestion sécurisée des sessions.",
      icon: FileText,
      stack: ["PHP", "JS", "Sessions", "HTML", "CSS", "PHPMailer"],
      gradient: "from-elite-white to-elite-purple"
    },
    {
      title: "Jeu Snake Python",
      description: "Un mini-jeu Snake en JS pour comprendre la logique événementielle et les collisions.",
      icon: Gamepad2,
      stack: ["JS", "html", "css"],
      gradient: "from-elite-purple-dark to-elite-white"
    },
      {
          title: "SupportPro Hub",
          description: "SupportPro Hub est une plateforme web complète dédiée à la gestion des tickets d’assistance.\n" +
              "Elle centralise les demandes clients, facilite la communication entre utilisateurs et techniciens, et offre un suivi en temps réel grâce à un tableau de bord moderne et intuitif.\n" +
              "L’application intègre un système VIP, un journal d’activités (ActivityLog), une messagerie interne, et des outils d’analyse pour un support rapide et traçable.",
          icon: MessagesSquare,
          stack: ["Laravel", "livewire", "MySQL" , "Blade" ,"React" ,"PHP" ,"JS","TailwindCSS"],
          gradient: "from-elite-purple-dark to-elite-white"
      },


  ];

  return (
    <section id="projects" className="py-20 animated-bg">
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 1.5}s` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text glitch" data-text="Mes Projets">Mes Projets</span>
          </h2>
          <p className="text-lg text-elite-white/70 max-w-2xl mx-auto">
            Découvrez mes créations alliant <span className="text-elite-purple font-semibold">sécurité, performance et innovation</span>
          </p>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="elite-card p-8 group magnetic">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg elite-glow`}>
                    <IconComponent className="h-6 w-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-elite-white">{project.title}</h3>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-elite-white/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 text-elite-purple">Stack technique :</h4>
                  <div className="flex flex-wrap gap-2">
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
                
                {/* Actions */}
                <div className="flex gap-3">
                  
                  <Button size="sm" className="elite-glow flex-1 bg-gradient-purple text-white border-0 magnetic">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Démo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Coming Soon Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="text-elite-purple glitch" data-text="🧪 Projets à venir">🧪 Projets à venir</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
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
                className="elite-card p-6 text-center magnetic relative overflow-hidden group animate-fadeIn"
                style={{
                  background: "linear-gradient(135deg, #7c3aed33 0%, #a78bfa33 100%)",
                  border: "1.5px solid #7c3aed",
                  boxShadow: "0 8px 32px 0 #7c3aed33",
                }}
              >
                <div className="flex flex-col items-center gap-2 mb-2">
                  <span className="inline-block rounded-full bg-elite-purple/30 p-3 mb-2 animate-pulse group-hover:scale-110 transition-transform">
                    <project.icon className="h-7 w-7 text-elite-purple drop-shadow-lg" />
                  </span>
                  <p className="text-elite-white/80 font-semibold text-lg mb-1">
                    {project.title}
                  </p>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-elite-purple to-elite-purple-light text-white shadow-lg animate-bounce">
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