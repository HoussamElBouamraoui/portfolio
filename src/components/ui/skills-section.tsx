import { Code2, Database, Shield, Settings, Award } from "lucide-react";

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
    "Git/GitHub", "Linux", "JWT", "MySQL", "Pygame", "Adobe Photoshop", "Adobe Illustrator", "Behance"
  ];

  return (
    <section id="skills" className="py-20 bg-elite-black/30 animated-bg">
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 1.2}s` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text glitch" data-text="Compétences Techniques">Compétences Techniques</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full"></div>
        </div>
        
        {/* Badges & Certifications */}
        <div className="elite-card p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 magnetic">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-elite-purple"> Badges & Certifications</h3>
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
            {/* Certificat Cybersécurité (PDF) */}
            <a
              href="/certificat%20cyber.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir le certificat Cybersécurité (PDF)"
              className="group flex flex-col items-center p-3 rounded-lg hover:bg-elite-purple/10 transition-all magnetic"
            >
              <div className="w-20 h-20 rounded-full border border-elite-purple bg-elite-black/60 shadow-lg flex items-center justify-center mb-2 elite-glow group-hover:scale-105 group-hover:bg-elite-purple/20 transition-transform">
                <Award className="h-9 w-9 text-elite-purple" />
              </div>
              <span className="text-sm text-elite-white text-center">Certificat Cybersécurité</span>
              <span className="text-[11px] text-elite-purple/70">PDF</span>
            </a>

            {/* Certificat Développement Web (Udemy) (PDF) */}
            <a
              href="/certificat%20dev%20web%20udemy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir le certificat Développement Web Udemy (PDF)"
              className="group flex flex-col items-center p-3 rounded-lg hover:bg-elite-purple/10 transition-all magnetic"
            >
              <div className="w-20 h-20 rounded-full border border-elite-purple bg-elite-black/60 shadow-lg flex items-center justify-center mb-2 elite-glow group-hover:scale-105 group-hover:bg-elite-purple/20 transition-transform">
                <Award className="h-9 w-9 text-elite-purple" />
              </div>
              <span className="text-sm text-elite-white text-center">Développement Web (Udemy)</span>
              <span className="text-[11px] text-elite-purple/70">PDF</span>
            </a>
          </div>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="elite-card p-4 sm:p-6 magnetic">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-elite-purple/20 rounded-lg mb-4 pulse-elite">
                    <IconComponent className="h-6 w-6 text-elite-purple" />
                  </div>
                  <h3 className="font-semibold text-base sm:text-lg text-elite-white">{category.title}</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-xs sm:text-sm text-elite-white/70 flex items-center group">
                      <span className="w-2 h-2 bg-elite-purple rounded-full mr-3 group-hover:pulse-elite transition-all"></span>
                      <span className="group-hover:text-elite-purple transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* Soft Skills */}
          <div className="elite-card p-4 sm:p-6 magnetic">
            <div className="text-center mb-6">
              <div className="inline-flex p-3 bg-elite-purple/20 rounded-lg mb-4 pulse-elite">
                <span className="text-xl text-elite-purple">🤝</span>
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-elite-white">Soft Skills</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              {['Communication', 'Travail en équipe', 'Gestion du temps', 'Adaptabilité', 'Esprit critique'].map((skill, i) => (
                <li key={i} className="text-xs sm:text-sm text-elite-white/70 flex items-center group">
                  <span className="w-2 h-2 bg-elite-purple rounded-full mr-3 group-hover:pulse-elite transition-all"></span>
                  <span className="group-hover:text-elite-purple transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Tools Section */}
        <div className="elite-card p-4 sm:p-6 lg:p-8 magnetic">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-elite-white">
            🧠 Outils & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-elite-purple/20 rounded-full text-xs sm:text-sm elite-glow hover:bg-elite-purple/30 transition-all cursor-pointer magnetic border border-elite-purple/30 text-elite-white"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning Path */}
        <div className="mt-8 sm:mt-12 text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-elite-purple glitch" data-text="🚀 En cours d'apprentissage">
            🚀 En cours d'apprentissage
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["OSINT avancé", "Pentesting Web", "Analyse réseau", "Java poo"].map((learning, index) => (
              <span 
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-elite-purple/30 text-elite-white rounded-full text-xs sm:text-sm border-elite-purple/50 elite-glow magnetic hover:bg-elite-purple/40 transition-all"
              >
                {learning}
              </span>
            ))}
          </div>
        </div>
        <br/><br/>
        {/* Timeline d'apprentissage verticale */}
        <div className="elite-card p-4 sm:p-6 lg:p-8 mt-8 sm:mt-12 magnetic">
          <h3 className="text-lg sm:text-xl font-semibold mb-8 sm:mb-12 text-center text-elite-purple">Parcours & Expériences</h3>
          <div className="relative flex flex-col items-center">
            {/* Ligne centrale verticale */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-elite-purple/40 -translate-x-1/2 z-0 hidden md:block"></div>
            {/* Etapes */}
            <div className="w-full flex flex-col gap-8 sm:gap-12">
              {/* BAC 2024 - gauche */}
              <div className="flex items-center w-full">
                <div className="w-full md:w-1/2 flex justify-end md:pr-8 pr-0 mb-4 md:mb-0">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-3 sm:p-4 text-right max-w-xs w-full">
                    <span className="text-elite-purple font-bold text-sm sm:text-base">2024</span>
                    <div className="text-elite-white text-xs sm:text-sm mt-2">Obtention du BAC, mention Bien<br/>Lycée, Maroc</div>
                  </div>
                </div>
                <div className="relative z-10 hidden md:block">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-elite-purple rounded-full border-2 sm:border-4 border-elite-black block"></span>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              {/* EST Safi - droite */}
              <div className="flex items-center w-full">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="relative z-10 hidden md:block">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-elite-purple rounded-full border-2 sm:border-4 border-elite-black block"></span>
                </div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-8 pl-0 mt-0 md:mt-0">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-3 sm:p-4 text-left max-w-xs w-full">
                    <span className="text-elite-purple font-bold text-sm sm:text-base">09/2024</span>
                    <div className="text-elite-white text-xs sm:text-sm mt-2">Intégration à l'EST Safi<br/>Début du parcours universitaire</div>
                  </div>
                </div>
              </div>
              {/* S1 - gauche */}
              <div className="flex items-center w-full">
                <div className="w-full md:w-1/2 flex justify-end md:pr-8 pr-0 mb-4 md:mb-0">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-3 sm:p-4 text-right max-w-xs w-full">
                    <span className="text-elite-purple font-bold text-sm sm:text-base">S1 2024</span>
                    <div className="text-elite-white text-xs sm:text-sm mt-2">Algorithmes, Analyse des SI (Merise),<br/>Architecture des ordinateurs,<br/>Programmation Python et C,<br/>Français, Anglais</div>
                  </div>
                </div>
                <div className="relative z-10 hidden md:block">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-elite-purple rounded-full border-2 sm:border-4 border-elite-black block"></span>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              {/* S2 - droite */}
              <div className="flex items-center w-full">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="relative z-10 hidden md:block">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-elite-purple rounded-full border-2 sm:border-4 border-elite-black block"></span>
                </div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-8 pl-0 mt-0 md:mt-0">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-3 sm:p-4 text-left max-w-xs w-full">
                    <span className="text-elite-purple font-bold text-sm sm:text-base">S2 2025</span>
                    <div className="text-elite-white text-xs sm:text-sm mt-2">Développement web, Réseaux (CCNA 1),<br/>Systèmes d'exploitation,<br/>Algèbre, Structures de données en C,<br/>Français, Anglais</div>
                  </div>
                </div>
              </div>
              {/* Stage Osisoftware - gauche */}
              <div className="flex items-center w-full">
                <div className="w-full md:w-1/2 flex justify-end md:pr-8 pr-0 mb-4 md:mb-0">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-3 sm:p-4 text-right max-w-xs w-full">
                    <span className="text-elite-purple font-bold text-sm sm:text-base">07-08/2025</span>
                    <div className="text-elite-white text-xs sm:text-sm mt-2">Stage chez Osisoftware (Rabat)<br/>Développement sur Odoo<br/>Création d'une application de gestion de tickets et d'assistance<br/>
                    <a href="/attestationstage.jpg" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-2 sm:px-3 py-1 bg-elite-purple text-elite-white rounded hover:bg-elite-purple-dark transition text-xs">Voir l'attestation (EN)</a>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 hidden md:block">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-elite-purple rounded-full border-2 sm:border-4 border-elite-black block"></span>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
              {/* S3 - droite */}
              <div className="flex items-center w-full">
                <div className="hidden md:block md:w-1/2"></div>
                <div className="relative z-10 hidden md:block">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-elite-purple rounded-full border-2 sm:border-4 border-elite-black block"></span>
                </div>
                <div className="w-full md:w-1/2 flex justify-start md:pl-8 pl-0 mt-0 md:mt-0">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-3 sm:p-4 text-left max-w-xs w-full">
                    <span className="text-elite-purple font-bold text-sm sm:text-base">S3 2025</span>
                    <div className="text-elite-white text-xs sm:text-sm mt-2">Programmation orientée objet (Java),<br/>Administration des réseaux,<br/>UML, Algorithmes pour graphes,<br/>Cryptographie</div>
                  </div>
                </div>
              </div>
              {/* S4 - gauche */}
              <div className="flex items-center w-full">
                <div className="w-full md:w-1/2 flex justify-end md:pr-8 pr-0 mb-4 md:mb-0">
                  <div className="bg-elite-purple/20 border border-elite-purple rounded-lg shadow-lg p-3 sm:p-4 text-right max-w-xs w-full">
                    <span className="text-elite-purple font-bold text-sm sm:text-base">S4 2026</span>
                    <div className="text-elite-white text-xs sm:text-sm mt-2">En cours...</div>
                  </div>
                </div>
                <div className="relative z-10 hidden md:block">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-elite-purple rounded-full border-2 sm:border-4 border-elite-black block"></span>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};