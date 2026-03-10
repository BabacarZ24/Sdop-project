import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    alert("Merci ! Votre message a été envoyé.");
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Contactez-nous</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Vous avez des questions sur nos services ou vous souhaitez un partenariat ? 
              Notre équipe est à votre disposition pour vous accompagner.
            </p>
            <div className="pt-4">
              <p className="font-semibold text-primary">Email</p>
              <p className="text-slate-600">sdopservice@gmail.com</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nom</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Sujet</label>
                <input
                  {...register("subject", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>
              <button type="submit" className="btn-primary w-full py-4">
                Envoyer le message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
