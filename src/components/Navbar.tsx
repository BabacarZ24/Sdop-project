import { motion } from "motion/react";
import { Search, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "A-propos", href: "#a-propos" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-1 group">
          <span className="text-2xl font-black text-accent tracking-tighter flex items-center">
            SDO
            <div className="relative flex items-center">
              P
              <Search className="absolute -right-4 top-0 w-5 h-5 text-accent stroke-[3px]" />
            </div>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden md:block">
          <button className="btn-primary text-sm px-8">
            <LogIn className="w-4 h-4" />
            Connexion
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-600"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary w-full">
            <LogIn className="w-4 h-4" />
            Connexion
          </button>
        </motion.div>
      )}
    </nav>
  );
}
