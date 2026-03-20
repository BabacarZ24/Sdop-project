import { motion } from "motion/react";
import { FileSearch, CheckCircle, QrCode } from "lucide-react";

const services = [
  {
    title: "Déclaration d’objet perdu",
    description: "Signalez votre objet perdu en quelques secondes. Notre IA commence immédiatement la recherche.",
    icon: FileSearch,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Déclaration d’objet trouvé",
    description: "Aidez la communauté en signalant un objet trouvé. L'IA se charge de retrouver son propriétaire.",
    icon: CheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "QR Box & QR Code System",
    description: "Protégez vos objets avec nos étiquettes QR intelligentes pour une récupération encore plus rapide.",
    icon: QrCode,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Nos Services</h2>
          <p className="mt-4 text-slate-600 text-lg">Des outils intelligents pour votre tranquillité d'esprit.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                translateY: -10,
                rotateZ: index % 2 === 0 ? 1 : -1
              }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
