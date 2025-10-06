import { Code2, Database, Shield, Settings } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: " Langages",
      icon: Code2,
      skills: ["C", "Python", "PHP", "JavaScript"],
      color: "elite-purple"
    },
    {
      title: " Frontend",
      icon: Settings,
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      color: "elite-white"
    },
    {
      title: " Backend",
      icon: Database,
      skills: ["PHP (pur + Laravel)", "MySQL", "Sessions"],
      color: "elite-purple-light"
    },
    {
      title: " Cybersécurité",
      icon: Shield,
      skills: ["Auth JWT", "Concepts XSS/Injection", "OSINT (en cours)", "Sécurité Web"],
      color: "elite-purple-dark"
    }
  ];

  const tools = [
    "Git/GitHub", "Linux", "PHPMailer", "JWT", "MySQL", "Pygame"
  ];

  return (
    <section id="skills" className="py-20 bg-elite-black/30 animated-bg">
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 1.2}s` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text glitch" data-text="Compétences Techniques">Compétences Techniques</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full"></div>
        </div>
        
        {/* Badges & Certifications */}
        <div className="elite-card p-8 mb-12 magnetic">
          <h3 className="text-xl font-semibold mb-6 text-center text-elite-purple"> Badges & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/ccna_badge.png"
                alt="Badge CCNA 1"
                className="w-20 h-20  border-elite-purple shadow-lg bg-elite-black object-contain mb-2"
              />
              <span className="text-sm text-elite-white">Badge CCNA 1</span>
              <span className="text-xs text-elite-purple/70">2025</span>
            </div>
          </div>
        </div>
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="elite-card p-6 magnetic">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-elite-purple/20 rounded-lg mb-4 pulse-elite">
                    <IconComponent className="h-6 w-6 text-elite-purple" />
                  </div>
                  <h3 className="font-semibold text-lg text-elite-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-elite-white/70 flex items-center group">
                      <span className="w-2 h-2 bg-elite-purple rounded-full mr-3 group-hover:pulse-elite transition-all"></span>
                      <span className="group-hover:text-elite-purple transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* Soft Skills */}
          <div className="elite-card p-6 magnetic">
            <div className="text-center mb-6">
              <div className="inline-flex p-3 bg-elite-purple/20 rounded-lg mb-4 pulse-elite">
                <span className="text-xl text-elite-purple">🤝</span>
              </div>
              <h3 className="font-semibold text-lg text-elite-white">Soft Skills</h3>
            </div>
            <ul className="space-y-3">
              {['Communication', 'Travail en équipe', 'Gestion du temps', 'Adaptabilité', 'Esprit critique'].map((skill, i) => (
                <li key={i} className="text-sm text-elite-white/70 flex items-center group">
                  <span className="w-2 h-2 bg-elite-purple rounded-full mr-3 group-hover:pulse-elite transition-all"></span>
                  <span className="group-hover:text-elite-purple transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Tools Section */}
        <div className="elite-card p-8 magnetic">
          <h3 className="text-xl font-semibold mb-6 text-center text-elite-white">
            🧠 Outils & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-elite-purple/20 rounded-full text-sm elite-glow hover:bg-elite-purple/30 transition-all cursor-pointer magnetic border border-elite-purple/30 text-elite-white"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning Path */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 text-elite-purple glitch" data-text="🚀 En cours d'apprentissage">
            🚀 En cours d'apprentissage
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["OSINT avancé", "Pentesting Web", "Analyse réseau", "Java poo"].map((learning, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-elite-purple/30 text-elite-white rounded-full text-sm border border-elite-purple/50 elite-glow magnetic hover:bg-elite-purple/40 transition-all"
              >
                {learning}
              </span>
            ))}
          </div>
        </div>
        <br/><br/>
        {/* Timeline d'apprentissage verticale */}
        <div className="elite-card p-8 mt-12 magnetic">
          <h3 className="text-xl font-semibold mb-12 text-center text-elite-purple">Parcours & Expériences</h3>
          <div className="relative flex flex-col items-center">
            {/* Ligne centrale verticale */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-elite-purple/40 -translate-x-1/2 z-0"></div>
            {/* Etapes */}
            <div className="w-full flex flex-col gap-12">
              {/* BAC 2024 - gauche */}
              <div className="flex items-center w-full">
                <div className="w-1/2 flex justify-end pr-8">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-4 text-right max-w-xs">
                    <span className="text-elite-purple font-bold">2024</span>
                    <div className="text-elite-white text-sm mt-2">Obtention du BAC, mention Bien<br/>Lycée, Maroc</div>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="w-5 h-5 bg-elite-purple rounded-full border-4 border-elite-black block"></span>
                </div>
                <div className="w-1/2"></div>
              </div>
              {/* EST Safi - droite */}
              <div className="flex items-center w-full">
                <div className="w-1/2"></div>
                <div className="relative z-10">
                  <span className="w-5 h-5 bg-elite-purple rounded-full border-4 border-elite-black block"></span>
                </div>
                <div className="w-1/2 flex justify-start pl-8">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-4 text-left max-w-xs">
                    <span className="text-elite-purple font-bold">09/2024</span>
                    <div className="text-elite-white text-sm mt-2">Intégration à l'EST Safi<br/>Début du parcours universitaire</div>
                  </div>
                </div>
              </div>
              {/* S1 - gauche */}
              <div className="flex items-center w-full">
                <div className="w-1/2 flex justify-end pr-8">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-4 text-right max-w-xs">
                    <span className="text-elite-purple font-bold">S1 2024</span>
                    <div className="text-elite-white text-sm mt-2">Algorithmes, Analyse des SI (Merise),<br/>Architecture des ordinateurs,<br/>Programmation Python et C,<br/>Français, Anglais</div>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="w-5 h-5 bg-elite-purple rounded-full border-4 border-elite-black block"></span>
                </div>
                <div className="w-1/2"></div>
              </div>
              {/* S2 - droite */}
              <div className="flex items-center w-full">
                <div className="w-1/2"></div>
                <div className="relative z-10">
                  <span className="w-5 h-5 bg-elite-purple rounded-full border-4 border-elite-black block"></span>
                </div>
                <div className="w-1/2 flex justify-start pl-8">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-4 text-left max-w-xs">
                    <span className="text-elite-purple font-bold">S2 2025</span>
                    <div className="text-elite-white text-sm mt-2">Développement web, Réseaux (CCNA 1),<br/>Systèmes d'exploitation,<br/>Algèbre, Structures de données en C,<br/>Français, Anglais</div>
                  </div>
                </div>
              </div>
              {/* Stage Osisoftware - gauche */}
              <div className="flex items-center w-full">
                <div className="w-1/2 flex justify-end pr-8">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-4 text-right max-w-xs">
                    <span className="text-elite-purple font-bold">07-08/2025</span>
                    <div className="text-elite-white text-sm mt-2">Stage chez Osisoftware (Rabat)<br/>Développement sur Odoo<br/>Création d'une application de gestion de tickets et d'assistance<br/>
                    <a href="/attestationstage.jpg" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-3 py-1 bg-elite-purple text-elite-white rounded hover:bg-elite-purple-dark transition">Voir l'attestation (EN)</a>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="w-5 h-5 bg-elite-purple rounded-full border-4 border-elite-black block"></span>
                </div>
                <div className="w-1/2"></div>
              </div>
              {/* S3 - droite */}
              <div className="flex items-center w-full">
                <div className="w-1/2"></div>
                <div className="relative z-10">
                  <span className="w-5 h-5 bg-elite-purple rounded-full border-4 border-elite-black block"></span>
                </div>
                <div className="w-1/2 flex justify-start pl-8">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-4 text-left max-w-xs">
                    <span className="text-elite-purple font-bold">S3 2025</span>
                    <div className="text-elite-white text-sm mt-2">Programmation orientée objet (Java),<br/>Administration des réseaux,<br/>UML, Algorithmes pour graphes,<br/>Cryptographie</div>
                  </div>
                </div>
              </div>
              {/* S4 - gauche */}
              <div className="flex items-center w-full">
                <div className="w-1/2 flex justify-end pr-8">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-4 text-right max-w-xs">
                    <span className="text-elite-purple font-bold">S4 2026</span>
                    <div className="text-elite-white text-sm mt-2">En cours...</div>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="w-5 h-5 bg-elite-purple rounded-full border-4 border-elite-black block"></span>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};