'use client';

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [triggerAnimation, setTriggerAnimation] = useState(false); // État global pour relancer l'animation

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative">
      {/* Fond fixe couvrant tout l'écran */}
      <div className="absolute top-0 left-0 w-full h-full bg-cloud-bg bg-cover bg-center bg-fixed -z-10"></div>

      {/* Animation du nom "Cogo Clément" */}
      <section className="h-[100vh] flex items-center justify-center">
        <motion.div
          className="flex space-x-1 text-7xl font-bold bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent animate-gradient leading-none py-1"
          initial="hidden"
          animate={triggerAnimation ? "hidden" : "visible"} // Relance l'animation
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1, // Délai entre chaque lettre
              },
            },
          }}
          onMouseEnter={() => {
            setTriggerAnimation(true); // Relance l'animation
            setTimeout(() => setTriggerAnimation(false), 100); // Réinitialise l'état
          }}
        >
          {"Cogo Clément".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              {letter === " " ? "\u00A0" : letter} {/* Gérer les espaces */}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Section 1 : Texte d'accueil */}
      <section className="h-[70vh] flex items-center justify-center">
        <h1 className="text-black text-5xl font-bold text-center">
          Bienvenue sur mon portfolio
        </h1>
      </section>

      {/* Section 2 : Texte explicatif */}
      <section className="h-[70vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-black">Qui suis-je ?</h2>
          <p className="mt-4 text-lg text-gray text-center max-w-lg">
            Je suis un développeur front-end passionné par les interfaces modernes et élégantes.
            Découvrez mes compétences et mes projets ci-dessous !
          </p>
        </motion.div>
      </section>
    </main>
  );
}
