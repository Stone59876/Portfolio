'use client';

import { motion } from 'framer-motion';
import { Cursor } from 'react-creative-cursor';
import Link from 'next/link';
import 'react-creative-cursor/dist/styles.css';
import {
  FaLaptopCode,
  FaServer,
  FaCheckCircle,
  FaRobot,
  FaTools,
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Front-End',
    icon: <FaLaptopCode className="w-8 h-8 text-purple-600" />,
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Angular Material'],
  },
  {
    title: 'Back-End',
    icon: <FaServer className="w-8 h-8 text-purple-600" />,
    skills: ['Java', 'Spring Boot', 'API REST', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Tests & Qualité',
    icon: <FaCheckCircle className="w-8 h-8 text-purple-600" />,
    skills: ['Cypress', 'Cucumber', 'Tests automatisés', 'QA', 'GitLab CI/CD', 'K6'],
  },
  {
    title: 'Low Code & Automatisation',
    icon: <FaRobot className="w-8 h-8 text-purple-600" />,
    skills: ['Power Apps', 'Power Automate', 'Power Automate Desktop', 'UiPath', 'Orchestrator', 'SharePoint'],
  },
  {
    title: 'Outils & Environnement',
    icon: <FaTools className="w-8 h-8 text-purple-600" />,
    skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'Agile', 'Scrum'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen">
      <Cursor cursorInnerColor="#301467" cursorSize={25} isGelly />

      <div className="absolute top-0 left-0 w-full h-full bg-cloud-bg bg-cover bg-center bg-fixed -z-10" />

      <Link href="/">
        <motion.div
          className="absolute top-5 left-5 z-20 bg-white p-2 rounded-full shadow-lg cursor-pointer"
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

      <section className="min-h-[35vh] flex flex-col items-center justify-center px-6 pt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-bold leading-tight pb-1 bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-transparent"
        >
          Mes compétences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-base md:text-lg text-slate-100 max-w-3xl"
        >
          Voici un aperçu des domaines techniques sur lesquels j&apos;ai pu travailler
          au fil de mes études, de mes expériences et de mes projets.
        </motion.p>
      </section>

      <section className="px-4 pb-16 pt-8 flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold text-purple-800">
                  {category.title}
                </h2>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}