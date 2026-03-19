import { motion } from "motion/react";
import { X, ShieldCheck } from "lucide-react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/20 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-4xl max-h-[80vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0">
          <div className="flex items-center gap-3 text-primary">
            <ShieldCheck className="w-6 h-6" />
            <h2 className="text-xl font-bold">Politique de Confidentialité</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 text-slate-600 leading-relaxed">
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-primary">1. Introduction</h3>
            <p>
              Bienvenue sur SDOP (Service des Objets Perdus). Nous attachons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre plateforme.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-primary">2. Collecte des Données</h3>
            <p>Nous collectons les informations suivantes pour assurer le bon fonctionnement de notre service :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Informations d'identification : Nom, prénom, adresse e-mail.</li>
              <li>Données relatives aux objets : Descriptions, photos des objets perdus ou trouvés.</li>
              <li>Données de localisation : Lieu où l'objet a été perdu ou trouvé (uniquement avec votre consentement).</li>
              <li>Données techniques : Adresse IP, type de navigateur, identifiants d'appareil.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-primary">3. Utilisation des Données</h3>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Faciliter la mise en correspondance (matching) entre objets perdus et trouvés via notre IA.</li>
              <li>Vous notifier lorsqu'une correspondance potentielle est détectée.</li>
              <li>Sécuriser les échanges entre les utilisateurs.</li>
              <li>Améliorer nos algorithmes de reconnaissance d'objets.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-primary">4. Partage des Informations</h3>
            <p>
              SDOP ne vend ni ne loue vos données personnelles à des tiers. Les informations relatives aux objets (photos et descriptions) sont visibles par les autres utilisateurs pour faciliter l'identification, mais vos coordonnées personnelles restent privées jusqu'à ce qu'une mise en relation sécurisée soit établie.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-primary">5. Sécurité</h3>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles rigoureuses pour protéger vos données contre tout accès non autorisé, modification ou suppression.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-primary">6. Vos Droits</h3>
            <p>
              Conformément à la législation en vigueur au Sénégal (Loi n° 2008-12 sur la protection des données personnelles), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Vous pouvez exercer ces droits en nous contactant directement.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-primary">7. Contact</h3>
            <p>
              Pour toute question concernant cette politique, contactez-nous à : <span className="font-semibold text-primary">sdopservice@gmail.com</span>
            </p>
          </section>

          <div className="pt-8 border-t border-slate-100 text-sm text-slate-400 italic">
            Dernière mise à jour : 19 Mars 2026
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary px-8"
          >
            J'ai compris
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
