import { motion } from "motion/react";

export default function About() {
  return (
    <section id="a-propos" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/sdop-ai/800/800"
              alt="AI Platform"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Une plateforme moderne basée sur l’IA
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Notre système de matching par IA analyse instantanément les descriptions et les images des objets signalés.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Reconnaissance intelligente d'objets via photos</li>
                <li>Matching automatique entre objets perdus et trouvés</li>
                <li>Notifications en temps réel pour les correspondances</li>
                <li>Reconnexion sécurisée entre les citoyens</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Block 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-2 aspect-square rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://picsum.photos/seed/sdop-senegal/800/800"
              alt="Senegal Solution"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Une solution adaptée au Sénégal
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Face au problème récurrent des cartes d'identité nationales perdues et à l'absence de système centralisé, SDOP apporte une réponse structurée.
              </p>
              <p>
                Nous offrons une plateforme sécurisée qui réduit les risques de fraude et facilite la récupération des documents administratifs essentiels.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
