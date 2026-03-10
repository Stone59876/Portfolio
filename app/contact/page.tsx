'use client';

import { motion } from 'framer-motion';
import { Cursor } from 'react-creative-cursor';
import Link from 'next/link';
import 'react-creative-cursor/dist/styles.css';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const contactMethods = [
  {
    title: 'Email',
    value: 'cogo.clement@live.fr',
    href: 'mailto:cogo.clement@live.fr',
    icon: <FaEnvelope className="w-6 h-6 text-purple-600" />,
    description: 'Pour toute opportunité, échange professionnel ou question.',
  },
  {
    title: 'Téléphone',
    value: '06 95 77 76 49',
    href: 'tel:0695777649',
    icon: <FaPhoneAlt className="w-6 h-6 text-purple-600" />,
    description: 'Pour me joindre directement par appel téléphonique.',
  },
  {
    title: 'LinkedIn',
    value: 'Voir mon profil LinkedIn',
    href: 'https://www.linkedin.com/in/cl%C3%A9ment-cogo-b7844b1aa/',
    icon: <FaLinkedin className="w-6 h-6 text-purple-600" />,
    description: 'Pour consulter mon profil ou me contacter sur LinkedIn.',
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

export default function ContactPage() {
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
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-base md:text-lg text-slate-100 max-w-3xl"
        >
          N&apos;hésitez pas à me contacter pour échanger autour d&apos;une opportunité,
          d&apos;un projet ou simplement pour discuter de mon profil.
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
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.title === 'LinkedIn' ? '_blank' : undefined}
              rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100">
                  {method.icon}
                </div>
                <h2 className="text-2xl font-semibold text-purple-800">
                  {method.title}
                </h2>
              </div>

              <p className="mt-4 text-slate-700 leading-7">
                {method.description}
              </p>

              <p className="mt-5 text-sm font-medium text-purple-700 break-words">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </main>
  );
}