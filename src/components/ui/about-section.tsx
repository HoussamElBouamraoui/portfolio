import { Badge } from "@/components/ui/badge";
import { Code, Shield, Zap } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    "C", "Python", "PHP", "HTML", "CSS", "JS", 
    "Laravel", "Bootstrap", "Linux", "Java POO", "SQl","GIT",
  ];

  return (
    <section id="about" className="py-20 bg-elite-black/50 animated-bg">
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 2}s` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">À propos de moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="elite-card p-4 sm:p-6 lg:p-8 magnetic">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-elite-purple/20 rounded-lg pulse-elite">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-elite-purple" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-elite-white">Passion Cybersécurité</h3>
                  <p className="text-sm sm:text-base text-elite-white/70">
                    Étudiant en 1ᵉʳ année de <span className="text-elite-purple font-medium">Génie Informatique</span>, passionné par la cybersécurité,
                    l'exploitation système et le développement full stack.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="elite-card p-4 sm:p-6 lg:p-8 magnetic">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-elite-white/20 rounded-lg pulse-elite">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-elite-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-elite-white">Excellence Académique</h3>
                  <p className="text-sm sm:text-base text-elite-white/70">
                    <span className="text-elite-purple font-semibold">Mention Très Bien</span> validée pour les deux semestres 2025, 
                    démontrant ma rigueur et ma capacité d'apprentissage.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="elite-card p-4 sm:p-6 lg:p-8 magnetic">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-elite-purple/30 rounded-lg pulse-elite">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-elite-purple-light" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-elite-white">Développement Orienté Sécurité</h3>
                  <p className="text-sm sm:text-base text-elite-white/70">
                    Je développe des outils pratiques  avec une approche
                    <span className="text-elite-purple font-medium"> orientée sécurité et performance</span>, toujours en quête d'amélioration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="elite-card p-4 sm:p-6 lg:p-8 magnetic">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-elite-white">
              Langages & Technologies
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="elite-glow border-elite-purple/30 text-elite-purple hover:bg-elite-purple/20 hover:border-elite-purple transition-all duration-300 magnetic text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-elite-purple/20">
              <h4 className="font-medium mb-3 sm:mb-4 text-elite-purple text-center text-sm sm:text-base">
                🛠️ Outils favoris
              </h4>
              <ul className="text-xs sm:text-sm text-elite-white/60 space-y-1.5 sm:space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elite-purple rounded-full"></span>
                  Git/GitHub pour le versioning
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elite-purple rounded-full"></span>
                  Linux pour l'environnement de test
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elite-purple rounded-full"></span>
                  Resend pour les emails
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elite-purple rounded-full"></span>
                  Adobe Photoshop (Design)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elite-purple rounded-full"></span>
                  Adobe Illustrator (Design)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-elite-purple rounded-full"></span>
                  MySQL pour les bases de données
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};