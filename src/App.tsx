import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Global Background Animations */}
      <ParticleBackground />

      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-grow"
      >
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        {/* <Testimonials /> */}
        <Contact />
      </motion.main>
      <Footer onShowPrivacy={() => setShowPrivacy(true)} />
      <Chatbot />

      <AnimatePresence>
        {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      </AnimatePresence>
    </div>
  );
}
