import { motion } from "motion/react";
import { Brain, ShieldCheck, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    desc: "Analyse instantanée des signalements pour des correspondances précises.",
    color: "icon-box-accent",
    stat: "Matching automatique",
    statColor: "#D72638",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité maximale",
    desc: "Données chiffrées et vérification d'identité pour éviter les fraudes.",
    color: "icon-box-primary",
    stat: "100% Sécurisé",
    statColor: "#0B3C5D",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="section-padding bg-white/40 backdrop-blur-[2px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <img 
              src="/ai_matching_illustration.png" 
              alt="SDOP AI Matching" 
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label section-label-accent mb-4">
                <Sparkles className="w-3 h-3" />
                Notre mission
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mt-4 mb-6">
                L'IA au service de <span className="gradient-text-accent">vos objets</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                SDOP réinvente la gestion des objets perdus au Sénégal. Plus de stress, plus d'attente : notre plateforme connecte les citoyens instantanément et en toute sécurité.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="feature-card"
                >
                  <div className={`icon-box ${pillar.color} mb-4`}>
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                  <p className="text-slate-500 text-sm">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
