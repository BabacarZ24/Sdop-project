import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/service_lost.png",
    title: "Déclaration d'objet perdu",
    description: "Signalez votre objet en moins de 60 secondes. L'IA s'occupe du reste.",
    textColor: "#3b82f6",
  },
  {
    image: "/service_found.png",
    title: "Déclaration d'objet trouvé",
    description: "Aidez la communauté et recevez des récompenses pour votre civisme.",
    textColor: "#10b981",
  },
  {
    image: "/service_qr.png",
    title: "QR Box & QR Code",
    description: "Étiquetez vos objets de valeur pour une récupération ultra-rapide.",
    textColor: "#a855f7",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white/40 backdrop-blur-[2px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Nos <span className="gradient-text-accent">Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Des outils intelligents pour retrouver ce qui vous appartient, en un clin d'œil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/80 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold" style={{ color: service.textColor }}>
                  Démarrer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
