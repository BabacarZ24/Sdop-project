import { motion } from "motion/react";
import { Smartphone, Search } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight max-w-5xl mx-auto">
            Retrouver vos objets plus rapidement grâce à l’
            <span className="text-accent">Intelligence Artificielle</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            SDOP utilise l’IA pour faire correspondre automatiquement les objets perdus et trouvés 
            et connecter les citoyens de manière rapide, sécurisée et efficace.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-accent w-full sm:w-auto">
              <Smartphone className="w-5 h-5" />
              Télécharger l'application mobile
            </button>
            <button className="btn-primary w-full sm:w-auto">
              <Search className="w-5 h-5" />
              Signaler un objet
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
            <img
              src="https://picsum.photos/seed/sdop-hero/1200/675"
              alt="SDOP Platform Preview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
