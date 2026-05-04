import { motion } from "motion/react";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "contact@sdop.sn",
    sub: "Support 24/7",
  },
  {
    icon: MapPin,
    title: "Bureau",
    details: "Dakar, Sénégal",
    sub: "Plateau",
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: "+221 33 000 00 00",
    sub: "Lun-Ven, 8h-18h",
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message");
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-white/40 backdrop-blur-[2px]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Besoin d'<span className="gradient-text-accent">aide</span> ?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour toute question ou assistance technique.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 flex items-center gap-5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{info.title}</p>
                  <p className="text-primary font-bold">{info.details}</p>
                  <p className="text-slate-400 text-[11px]">{info.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message envoyé !</h3>
                <p className="text-slate-500">Nous reviendrons vers vous dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Nom complet</label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="Votre nom"
                      className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Email</label>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      placeholder="votre@email.com"
                      className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Sujet</label>
                  <select
                    {...register("subject", { required: true })}
                    className={`form-input appearance-none bg-white ${errors.subject ? 'border-red-400' : ''}`}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Support technique">Support technique</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Signalement d'objet">Signalement d'objet</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={5}
                    placeholder="Détaillez votre demande..."
                    className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg"
                >
                  {isSubmitting ? "Envoi en cours..." : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
