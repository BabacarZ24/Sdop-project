import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { generateImage } from "../services/geminiService";
import { Loader2, Sparkles } from "lucide-react";

export default function About() {
  const [aiImage1, setAiImage1] = useState<string | null>(null);
  const [aiImage2, setAiImage2] = useState<string | null>(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    const fetchImage1 = async () => {
      setLoading1(true);
      try {
        const variations = [
          "futuristic 3D render",
          "clean minimalist tech aesthetic",
          "high-tech holographic interface",
          "sophisticated digital ecosystem"
        ];
        const randomVariation = variations[Math.floor(Math.random() * variations.length)];
        const prompt = `A ${randomVariation} of an AI-powered lost and found platform. A central smartphone displays a 'Matching' screen with holographic icons of a wallet, keys, and a phone being connected by glowing data lines. The background is a dark, sophisticated blue with abstract digital patterns. High-tech, professional, and trustworthy aesthetic. Seed: ${Math.random()}`;
        const img = await generateImage(prompt);
        setAiImage1(img);
      } catch (error) {
        console.error("Failed to generate AI image 1:", error);
        setAiImage1("https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=800");
      } finally {
        setLoading1(false);
      }
    };

    const fetchImage2 = async () => {
      setLoading2(true);
      try {
        const variations = [
          "high-tech digital representation",
          "modern holographic visualization",
          "futuristic artistic render",
          "clean technological concept"
        ];
        const randomVariation = variations[Math.floor(Math.random() * variations.length)];
        const prompt = `A ${randomVariation} of Senegal's map integrated with glowing AI neural networks. The color palette incorporates the green, yellow, and red of the Senegalese flag in a subtle, professional way. In the foreground, a modern holographic interface shows a Senegalese national identity card being verified by AI. The background features a stylized silhouette of the Monument de la Renaissance Africaine in Dakar with digital data streams. Futuristic, clean, and culturally relevant. Seed: ${Math.random()}`;
        const img = await generateImage(prompt);
        setAiImage2(img);
      } catch (error) {
        console.error("Failed to generate AI image 2:", error);
        setAiImage2("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=800");
      } finally {
        setLoading2(false);
      }
    };

    fetchImage1();
    fetchImage2();
  }, []);

  return (
    <section id="a-propos" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Block 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square rounded-3xl overflow-hidden shadow-xl bg-slate-200 relative flex items-center justify-center"
          >
            {loading1 ? (
              <div className="flex flex-col items-center gap-4 text-slate-500">
                <Loader2 className="w-10 h-10 animate-spin text-accent" />
                <p className="text-sm font-medium">Génération de l'image IA...</p>
              </div>
            ) : aiImage1 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full relative group"
              >
                <img
                  src={aiImage1}
                  alt="Système de Matching IA"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-accent shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.div>
            ) : null}
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
            className="md:order-2 aspect-square rounded-3xl overflow-hidden shadow-xl bg-slate-200 relative flex items-center justify-center"
          >
            {loading2 ? (
              <div className="flex flex-col items-center gap-4 text-slate-500">
                <Loader2 className="w-10 h-10 animate-spin text-accent" />
                <p className="text-sm font-medium">Génération de l'image IA...</p>
              </div>
            ) : aiImage2 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full h-full relative group"
              >
                <img
                  src={aiImage2}
                  alt="Solution Sénégal IA"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-accent shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.div>
            ) : null}
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
