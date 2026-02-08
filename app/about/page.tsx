'use client';

import { motion} from 'framer-motion';
import React from 'react';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import Link from 'next/link';

export default function About() {

  /*
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: [1, 1.3, 1],
      rotate: [0, 20, -20, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };
  */

  return (
    <main className="relative">
      {/* Custom cursor */}
      <>
        <Cursor cursorInnerColor="#301467" cursorSize={25} isGelly />
      </>

      {/* Fond fixe */}
      <div className="absolute top-0 left-0 w-full h-full bg-cloud-bg bg-cover bg-center bg-fixed -z-10"></div>

      {/* Flèche retour */}
      <Link href="/">
        <motion.div
          className="absolute top-5 left-5 bg-white p-2 rounded-full shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          title="Retour à l'accueil"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-purple-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </motion.div>
      </Link>

      {/* Section 1 : Titre */}
      <section className="h-[100vh] flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-black text-7xl font-bold text-center bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent pt-40"
        >
          À propos
        </motion.h1>

        {/* Texte explicatif centré */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-grow flex items-center justify-center"
        >
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Bienvenue sur la page &lsquo;À propos&lsquo;. Je suis <strong>ingénieur en informatique</strong>, 
            diplômé de l&apos;<strong>INSA Hauts-de-France</strong>. Avec une passion pour le développement 
            front-end et les interfaces modernes, mon objectif est de créer des expériences utilisateur 
            élégantes et intuitives. Actuellement, je suis en <strong>recherche d&apos;opportunités</strong> 
            dans la région de <strong>Lille</strong>, où je pourrais appliquer mes compétences pour 
            contribuer à des projets innovants.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
