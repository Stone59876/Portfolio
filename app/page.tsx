'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative">
      {/* Fond fixe couvrant tout l'écran */}
      <div className="absolute top-0 left-0 w-full h-full bg-cloud-bg bg-cover bg-center bg-fixed -z-10"></div>

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
