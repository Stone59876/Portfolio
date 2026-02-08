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

  /*
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  */

  const pages = [
    {
      title: "À propos",
      description: "Découvrez mon parcours et mes motivations.",
      link: "/about",
      button: "En savoir plus",
    },
    {
      title: "Projets",
      description: "Explorez mes projets personnels et professionnels.",
      link: "/projects",
      button: "Voir les projets",
    },
    {
      title: "Compétences",
      description: "Un aperçu de mes compétences techniques.",
      link: "/skills",
      button: "Découvrir mes compétences",
    },
    {
      title: "Contact",
      description: "Entrez en contact avec moi pour toute opportunité.",
      link: "/contact",
      button: "Me contacter",
    },
  ];


  return (

    <main className="relative">

      <>
        <Cursor
          cursorInnerColor="#301467"
          cursorSize={25}
          isGelly 
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
            l&apos;<strong>INSA Hauts-de-France</strong>. Passionné par le développement
            d&apos;interfaces modernes et élégantes, je suis actuellement en
            <strong> recherche d&apos;opportunités professionnelles</strong> dans la
            région de <strong>Lille</strong>. Mon objectif est de contribuer à des
            projets innovants, mettant en avant mes compétences en développement
            front-end et en résolution de problèmes.
          </p>
        </motion.div>
      </section>

      {/* Menu horizontal */}
      <section className="py-10 h-[100vh] flex flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false, // L'animation peut rejouer si on scroll
            amount: 0.5, // L'animation se déclenche quand 50% de la section est visible
          }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1, // Temps légèrement prolongé pour plus de fluidité
                ease: "linear", // Courbe naturelle pour un mouvement doux
                staggerChildren: 0.125, // Décalage progressif entre les enfants
              },
            },
          }}
          className="flex justify-center items-center space-x-8 max-w-7xl mx-auto h-full"
        >
          {pages.map((page, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 100 }, // État initial
                visible: {
                  opacity: 1,
                  y: 0, // Position finale
                  transition: {
                    duration: 1, // Animation uniforme
                    ease: "linear", // Courbe naturelle
                  },
                },
              }}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-lg font-bold text-purple-700">{page.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{page.description}</p>
              <a
                href={page.link}
                className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700"
              >
                {page.button}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}
