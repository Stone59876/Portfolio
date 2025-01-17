'use client';

import { motion, Variants } from "framer-motion";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

export default function Home() {

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: [1, 1.3, 1], // Effet de zoom
      rotate: [0, 20, -20, 0], // Légère rotation
      transition: {
        duration: 1.5, // Durée totale de l'animation
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (

    <main className="relative">

      <>
        <Cursor
          cursorInnerColor="#301467"
          cursorSize={25}
        />
      </>

      {/* Fond fixe couvrant tout l'écran */}
      <div className="absolute top-0 left-0 w-full h-full bg-cloud-bg bg-cover bg-center bg-fixed -z-10"></div>

      {/* Animation du nom "Cogo Clément" */}
      <section className="h-[100vh] flex items-center justify-center">
        <motion.div
          className="flex space-x-1 text-7xl font-bold bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent animate-gradient leading-none py-10 px-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1, // Délai entre chaque lettre
              },
            },
          }}
          whileHover="hover" // Applique l'effet combiné au survol
        >
          {"Cogo Clément".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              style={{
                display: "inline-block", // Nécessaire pour l'effet de rotation
              }}
            >
              {letter === " " ? "\u00A0" : letter}  {/* Gérer les espaces */}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Section 1 : Texte d'accueil */}
      <section className="h-[70vh] flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.1, // Animation progressive par mot
          }}
          className="text-black text-7xl font-bold text-center bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent"
        >
          {"Bienvenue sur mon portfolio".split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </section>

      {/* Section 2 : Texte explicatif */}
      <section className="h-[70vh] flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-semibold text-black">Qui suis-je ?</h2>
          <p className="mt-4 text-lg text-gray text-center max-w-lg">
            Je suis <strong>ingénieur en informatique</strong>, diplômé de
            l'<strong>INSA Hauts-de-France</strong>. Passionné par le développement
            d'interfaces modernes et élégantes, je suis actuellement en
            <strong> recherche d'opportunités professionnelles</strong> dans la
            région de <strong>Lille</strong>. Mon objectif est de contribuer à des
            projets innovants, mettant en avant mes compétences en développement
            front-end et en résolution de problèmes.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
