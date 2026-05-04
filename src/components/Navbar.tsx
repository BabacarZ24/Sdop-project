import { motion, useScroll, useTransform } from "motion/react";
import { Search, Mail, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Accueil", href: "#accueil" },
  { name: "À Propos", href: "#a-propos" },
  { name: "Services", href: "#services" },
  { name: "Fonctionnement", href: "#fonctionnement" },
  // { name: "Témoignages", href: "#temoignages" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(11,60,93,0.08)] border-b border-slate-100/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 group" id="nav-logo">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Search className="w-4 h-4 text-white stroke-[2.5px]" />
          </div>
          <span
            className={`text-xl font-black tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            SDOP
          </span>
          <span
            className={`hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full border transition-colors ${
              scrolled
                ? "border-accent/30 text-accent bg-accent/5"
                : "border-white/30 text-white/80 bg-white/10"
            }`}
          >
            Beta
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-white/10 ${
                scrolled
                  ? "text-slate-600 hover:text-primary hover:bg-slate-50"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            id="nav-contact-cta"
            className="btn-accent text-sm px-5 py-2.5"
          >
            <Mail className="w-4 h-4" />
            Nous contacter
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-b border-slate-100 shadow-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-slate-50 hover:text-primary transition-all"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-accent mt-2 w-full justify-center"
            >
              <Mail className="w-4 h-4" />
              Nous contacter
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
