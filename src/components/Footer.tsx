import { Search, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <a href="#accueil" className="flex items-center gap-1">
              <span className="text-2xl font-black text-accent tracking-tighter flex items-center">
                SDO
                <div className="relative flex items-center">
                  P
                  <Search className="absolute -right-4 top-0 w-5 h-5 text-accent stroke-[3px]" />
                </div>
              </span>
            </a>
            <p className="text-slate-600 max-w-sm">
              La première plateforme intelligente de gestion des objets perdus au Sénégal. 
              Retrouvez ce qui vous appartient, simplement.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Liens rapides</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#accueil" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#a-propos" className="hover:text-primary transition-colors">A-propos</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-600">
              <li>sdopservice@gmail.com</li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} SDOP – Service des Objets Perdus. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
