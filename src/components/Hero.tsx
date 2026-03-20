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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent w-full sm:w-auto"
            >
              <Smartphone className="w-5 h-5" />
              Télécharger l'application mobile
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto"
            >
              <Search className="w-5 h-5" />
              Signaler un objet
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative max-w-5xl mx-auto group"
        >
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 relative z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800"
              alt="SDOP Platform Preview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Decorative elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -z-10 -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" 
          />
        </motion.div>
      </div>
    </section>
  );
}
