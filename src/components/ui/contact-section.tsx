import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from '@/components/ui/sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  // Base API: configurable via VITE_API_BASE_URL (ex: http://localhost:3000 si vercel dev)
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

  type ApiResponse = { ok?: boolean; success?: boolean; error?: string };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const isJson = (response.headers.get('content-type') || '').includes('application/json');
      let result: ApiResponse = {};
      if (isJson) {
        try {
          result = (await response.json()) as ApiResponse;
        } catch {
          result = {};
        }
      }

      if (response.ok && (result?.ok || result?.success)) {
        toast.success('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const msg = result?.error || `Erreur (${response.status}) lors de l'envoi du message.`;
        toast.error(msg);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Erreur serveur ou réseau.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 animated-bg relative">
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 2.5}s` }}></div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-elite-purple/10 via-elite-black/60 to-elite-purple/10 blur-xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text glitch" data-text="Contact">Contact</span>
          </h2>
          <p className="text-lg text-elite-white/70 max-w-2xl mx-auto">
            Une question ? Un projet ? <span className="text-elite-purple font-semibold">N'hésitez pas à me contacter !</span>
          </p>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full mt-4"></div>
        </div>
        <div className="flex justify-center">


          {/* Contact Info & Links */}
          <div className="space-y-8 w-full max-w-2xl">
            {/* Direct Contact */}
            <div className="elite-card p-8 magnetic">
              <h3 className="text-xl font-semibold mb-6 text-elite-white">Contact direct</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:houssamelbouamraoui@gmail.com"
                  className="flex items-center gap-4 p-4 bg-elite-purple/10 rounded-lg hover:bg-elite-purple/20 transition-all elite-glow magnetic border border-elite-purple/20"
                >
                  <Mail className="h-5 w-5 text-elite-purple" />
                  <div>
                    <p className="font-medium text-elite-white">Email</p>
                    <p className="text-sm text-elite-white/60">houssamelbouamraoui@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+212661371034"
                  className="flex items-center gap-4 p-4 bg-elite-purple/10 rounded-lg hover:bg-elite-purple/20 transition-all elite-glow magnetic border border-elite-purple/20"
                >
                  <span className="flex w-5 h-5 bg-elite-purple rounded-full items-center justify-center text-white font-bold">📞</span>
                  <div>
                    <p className="font-medium text-elite-white">Téléphone</p>
                    <p className="text-sm text-elite-white/60">+212 661 371034</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/el-bouamraoui-houssam-0569a1326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-elite-purple/10 rounded-lg hover:bg-elite-purple/20 transition-all elite-glow magnetic border border-elite-purple/20"
                >
                  <span className="flex w-5 h-5 bg-elite-purple rounded-full items-center justify-center text-white font-bold">in</span>
                  <div>
                    <p className="font-medium text-elite-white">LinkedIn</p>
                    <p className="text-sm text-elite-white/60">houssam-elbouamraoui</p>
                  </div>
                </a>

                <a
                  href="#location"
                  className="flex items-center gap-4 p-4 bg-elite-purple/10 rounded-lg hover:bg-elite-purple/20 transition-all elite-glow magnetic border border-elite-purple/20"
                >
                  <span className="flex w-5 h-5 bg-elite-purple rounded-full items-center justify-center text-white font-bold">📍</span>
                  <div>
                    <p className="font-medium text-elite-white">Localisation</p>
                    <p className="text-sm text-elite-white/60">Morocco, Rabat Salé</p>
                  </div>
                </a>

                <a
                  href="https://github.com/HoussamElBouamraoui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-elite-purple/10 rounded-lg hover:bg-elite-purple/20 transition-all elite-glow magnetic border border-elite-purple/20"
                >
                  <Github className="h-5 w-5 text-elite-purple" />
                  <div>
                    <p className="font-medium text-elite-white">GitHub</p>
                    <p className="text-sm text-elite-white/60">github.com/HoussamElBouamraoui</p>
                  </div>
                </a>
              </div>
            </div>
            

            
            {/* Status */}
            <div className="elite-card p-8 text-center magnetic">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-elite-purple rounded-full pulse-elite"></div>
                <span className="text-elite-purple font-medium">Disponible pour projets</span>
              </div>
              <p className="text-sm text-elite-white/60">
                Actuellement ouvert aux opportunités de <span className="text-elite-purple">stage et projets collaboratifs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};