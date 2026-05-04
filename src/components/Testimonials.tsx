import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fatou Diallo",
    role: "Dakar",
    avatar: "👩🏾",
    content: "J'ai retrouvé ma carte d'identité en quelques heures. Merci SDOP !",
    tag: "Carte retrouvée",
  },
  {
    name: "Moussa Ndiaye",
    role: "Thiès",
    avatar: "👨🏾‍💼",
    content: "Simple et efficace pour rendre un objet trouvé en toute sécurité.",
    tag: "Portefeuille rendu",
  },
  {
    name: "Aïssatou Ba",
    role: "Dakar",
    avatar: "👩🏾‍🎓",
    content: "L'IA est impressionnante. Mon téléphone a été localisé très vite.",
    tag: "Téléphone localisé",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="section-padding bg-white/40 backdrop-blur-[2px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Ils nous font <span className="gradient-text-accent">confiance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="testimonial-card bg-white/80 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-50">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-primary font-bold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
