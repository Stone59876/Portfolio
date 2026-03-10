'use client';

import { motion } from 'framer-motion';
import { Cursor } from 'react-creative-cursor';
import Link from 'next/link';
import 'react-creative-cursor/dist/styles.css';

const cardClass =
  'rounded-2xl bg-white/85 backdrop-blur-sm shadow-lg border border-white/60 p-6';

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Cursor cursorInnerColor="#301467" cursorSize={25} isGelly />

      <div className="absolute top-0 left-0 h-full w-full bg-cloud-bg bg-cover bg-center bg-fixed -z-10" />

      <Link href="/">
        <motion.div
          className="fixed top-5 left-5 z-20 rounded-full bg-white p-2 shadow-lg cursor-pointer"
          whileHover={{ scale: 1.1 }}
          title="Retour à l'accueil"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-purple-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </motion.div>
      </Link>

      <section className="px-6 pt-32 pb-16 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-700">
              À propos
            </p>

            <h1 className="bg-gradient-to-r from-indigo-800 to-purple-800 bg-clip-text text-center text-5xl font-bold text-transparent md:text-7xl">
              Clément Cogo
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-700 md:text-xl">
              Ingénieur informatique diplômé de l&apos;
              <strong> INSA Hauts-de-France</strong>, passionné par le développement
              d&apos;applications modernes, l&apos;expérience utilisateur et la conception
              de solutions utiles, propres et maintenables.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow">
                Front-End
              </span>
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow">
                Fullstack
              </span>
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow">
                Java / Spring Boot
              </span>
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow">
                Angular / React / Next.js
              </span>
              <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-purple-700 shadow">
                QA / Automatisation
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          >
            <div className={`${cardClass} lg:col-span-2`}>
              <h2 className="text-2xl font-bold text-purple-800">Mon profil</h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                J&apos;aime concevoir des interfaces claires, modernes et agréables à utiliser,
                mais aussi comprendre la logique métier derrière les applications. Mon parcours
                m&apos;a permis de travailler aussi bien sur du <strong>front-end</strong> que sur du
                <strong> back-end</strong>, sur des sujets de <strong>tests automatisés</strong>,
                d&apos;<strong>intégration</strong> et même de <strong>low-code</strong>.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Je recherche aujourd&apos;hui une opportunité où je pourrai continuer à progresser
                techniquement, contribuer à des projets concrets et évoluer dans un environnement
                stimulant, idéalement en mode <strong>hybride</strong> dans la région de
                <strong> Lille</strong>.
              </p>
            </div>

            <div className={cardClass}>
              <h2 className="text-2xl font-bold text-purple-800">En bref</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  <strong>Diplôme :</strong> INSA Hauts-de-France
                </li>
                <li>
                  <strong>Localisation :</strong> région de Lille
                </li>
                <li>
                  <strong>Postes visés :</strong> Front-End, Fullstack, Back-End, Mobile
                </li>
                <li>
                  <strong>Ouvert aussi à :</strong> QA, Low Code, automatisation
                </li>
                <li>
                  <strong>Mode de travail préféré :</strong> hybride
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <div className={cardClass}>
              <h2 className="text-2xl font-bold text-purple-800">Formation</h2>
              <div className="mt-4 space-y-4 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-900">INSA Hauts-de-France</h3>
                  <p className="text-sm">Cycle ingénieur informatique — diplômé fin 2024</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Université Polytechnique Hauts-de-France
                  </h3>
                  <p className="text-sm">DUT Informatique à Maubeuge</p>
                </div>
                <p className="text-base leading-7">
                  J&apos;ai choisi l&apos;ingénierie informatique pour développer une vision large
                  du développement logiciel, apprendre à travailler sur des problématiques variées
                  et construire un profil technique polyvalent.
                </p>
              </div>
            </div>

            <div className={cardClass}>
              <h2 className="text-2xl font-bold text-purple-800">Ce que je recherche</h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Je souhaite rejoindre une équipe dans laquelle je pourrai à la fois
                <strong> monter en compétences</strong>, être utile rapidement et participer à des
                projets ayant un vrai impact. J&apos;apprécie autant les contextes où l&apos;on est
                accompagné par des profils seniors que ceux où l&apos;on peut suivre un sujet
                de bout en bout avec autonomie.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Mon objectif est de continuer à développer des projets intéressants, renforcer
                mon expertise technique et, à terme, me spécialiser dans un domaine qui me plaît
                vraiment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={cardClass}
          >
            <h2 className="text-2xl font-bold text-purple-800">Expériences marquantes</h2>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-purple-100 bg-white/70 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Vallourec</h3>
                <p className="mt-2 text-sm font-medium text-purple-700">
                  Développeur Fullstack Java / Angular & QA Automation
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Développement d&apos;applications avec Java Spring Boot, Angular et Angular Material,
                  automatisation des tests avec Cypress / Cucumber et contribution à des pipelines
                  GitLab CI/CD.
                </p>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white/70 p-5">
                <h3 className="text-lg font-semibold text-slate-900">CBTW Luxembourg</h3>
                <p className="mt-2 text-sm font-medium text-purple-700">
                  Développeur Low Code Power Platform
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Conception d&apos;applications et d&apos;automatisations internes et clients avec
                  Power Apps, Power Automate et SharePoint, en réponse à des besoins métiers concrets.
                </p>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white/70 p-5">
                <h3 className="text-lg font-semibold text-slate-900">L&apos;olivier Assurance</h3>
                <p className="mt-2 text-sm font-medium text-purple-700">
                  Développeur RPA
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Développement et maintenance de robots UiPath, suivi en production, correction
                  d&apos;anomalies et adaptation des automatisations à la montée de version de Guidewire.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}