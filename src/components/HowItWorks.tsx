import { motion } from "motion/react";
import { ClipboardList, Cpu, BellRing, Handshake } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Signalez",
    desc: "Formulaire simple avec photo.",
    emoji: "📝",
  },
  {
    icon: Cpu,
    title: "Analysez",
    desc: "L'IA compare en temps réel.",
    emoji: "🤖",
  },
  {
    icon: BellRing,
    title: "Alerté",
    desc: "SMS et notification push.",
    emoji: "🔔",
  },
  {
    icon: Handshake,
    title: "Récupérez",
    desc: "Mise en relation sécurisée.",
    emoji: "🤝",
  },
];

export default function HowItWorks() {
  return (
    <section id="fonctionnement" className="section-padding bg-slate-50/40 backdrop-blur-[2px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Comment ça <span className="gradient-text-accent">marche</span> ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 rounded-3xl p-8 shadow-sm border border-slate-100 text-center hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent text-white shadow-lg">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Integration of the Senegal Map Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-primary/95 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 text-white space-y-6">
              <h3 className="text-3xl font-black">Partout à Dakar</h3>
              <p className="text-white/70 text-lg">
                Notre réseau se concentre sur toute la capitale pour vous garantir une efficacité maximale dès le lancement.
              </p>
            </div>
            <div className="h-64 lg:h-full min-h-[300px]">
              <img 
                src="/senegal_network_map_1777899802963.png" 
                alt="SDOP Senegal Network" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
