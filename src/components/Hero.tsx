import { motion } from "motion/react";
import { Smartphone, ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(215,38,56,0.4) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(26,90,138,0.5) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-white">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Retrouvez vos objets{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #D72638 0%, #f97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                perdus
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 10 Q75 2 150 8 Q225 14 298 4"
                    stroke="#D72638"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>{" "}
              grâce à l'IA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
            >
              SDOP connecte intelligemment les personnes ayant perdu un objet avec celles
              qui l'ont trouvé. Rapide, sécurisé, et propulsé par une IA de pointe.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
            >
              <motion.a
                href={import.meta.env.VITE_WEB_APP_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-accent text-base px-8 py-4 group"
              >
                <Search className="w-5 h-5" />
                Signaler un objet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={import.meta.env.VITE_MOBILE_APP_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost text-base px-8 py-4"
              >
                <Smartphone className="w-5 h-5" />
                Application Mobile
              </motion.a>
            </motion.div>

            {/* Online status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 text-white/50 text-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Plateforme active — <strong className="text-white/80">Rejoignez la communauté</strong></span>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative group">
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-accent/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              {/* Main Image */}
              <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/hero_visual.png" 
                  alt="SDOP AI Connection" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating element 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Search className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Match trouvé</p>
                    <p className="text-white/50 text-[10px]">Analyse terminée</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating element 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Alerte SMS</p>
                    <p className="text-white/50 text-[10px]">Envoyée instantanément</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
