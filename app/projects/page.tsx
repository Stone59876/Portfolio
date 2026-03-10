'use client';

import { motion, Variants } from 'framer-motion';
import { Cursor } from 'react-creative-cursor';
import Link from 'next/link';
import 'react-creative-cursor/dist/styles.css';
import { FaReact, FaJava, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiAngular, SiNextdotjs, SiTypescript } from 'react-icons/si';
import Image from 'next/image';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projects = [
  {
    title: 'Mon portfolio',
    description:
      'Application web front-end moderne avec une interface animée et responsive.',
    github: 'https://github.com/Stone59876/Portfolio',
    icons: ['react', 'next'],
    image: '/projects/clement_logo.png',
  },
  {
    title: 'Projet interne SkillMatrix',
    description:
      'Application de gestion des compétences développée pour un contexte interne.',
    github: null, // pas de code dispo
    icons: ['angular', 'java'],
    image: '/projects/skillmatrix_logo.png',
  },
  {
    title: 'MTG Assistant',
    description:
      'MTG Assistant est une API backend en Java / Spring Boot pour gérer et améliorer des decks Magic: The Gathering.',
    github: 'https://github.com/Stone59876/mtg-deck-assistant',
    icons: ['angular', 'java', 'spring', 'next', 'react'],
    image: '/projects/mtg_logo.png',
  },
];

const iconMap = {
  angular: <SiAngular className="w-8 h-8 text-purple-600" />,
  java: <FaJava className="w-8 h-8 text-purple-600" />,
  spring: <SiSpringboot className="w-8 h-8 text-purple-600" />,
  next: <SiNextdotjs className="w-8 h-8 text-purple-600" />,
  react: <FaReact className="w-8 h-8 text-purple-600" />,
  typescript: <SiTypescript className="w-8 h-8 text-purple-600" />,
  github: <FaGithub className="w-8 h-8 text-purple" />,
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Curseur custom */}
      <>
        <Cursor cursorInnerColor="#301467" cursorSize={25} isGelly />
      </>

      {/* Fond fixe comme sur l'accueil */}
      <div className="absolute top-0 left-0 w-full h-full bg-cloud-bg bg-cover bg-center bg-fixed -z-10" />

      {/* Flèche retour vers l'accueil */}
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

      {/* Section titre */}
      <section className="min-h-[40vh] flex flex-col items-center pt-40">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-bold text-center leading-tight pb-1 bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent"
        >
          Mes projets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-auto mb-16 text-base md:text-lg text-slate-100 text-center max-w-2xl px-16"
        >
          Voici quelques projets représentatifs de mon travail. Chaque carte
          correspond à un exemple de projet que je pourrais détailler et
          documenter sur GitHub.
        </motion.p>
      </section>

      {/* Grid de projets */}
      <section className="min-h-[50vh] mt-6 flex justify-center items-start pt-8 pb-12 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          {projects.map((project, index) => {
            const hasGithub = Boolean(project.github);

            return (
              <motion.div
                key={project.title + index}
                variants={cardVariants}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow"
              >
                {/* “Image” placeholder */}
                <div className="h-40 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
                  {project.image ? (
                    <div className="relative h-40 w-40 md:h-40 md:w-40">
                      <Image
                        src={project.image}
                        alt={`Illustration du projet ${project.title}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : null}
                </div>

                {/* Contenu texte */}
                <div className="p-5 flex flex-col h-full">
                  <h2 className="text-xl font-semibold text-purple-800">
                    {project.title}
                  </h2>
                  {project.icons.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {project.icons.map((icon) => (
                        <span
                          key={icon}
                          className="text-purple-600"
                          title={icon}
                        >
                          {iconMap[icon as keyof typeof iconMap]}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <p className="mt-2 text-sm text-slate-700">
                    {project.description}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-slate-500">
                      {hasGithub ? 'Voir le code sur GitHub' : 'Code non disponible'}
                    </span>

                    {hasGithub ? (
                      <a
                        href={project.github as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 transition-colors"
                      >
                        Ouvrir
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-block px-4 py-2 bg-gray-300 text-gray-500 text-sm font-medium rounded-md cursor-not-allowed"
                      >
                        Indisponible
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

    </main>
  );
}
