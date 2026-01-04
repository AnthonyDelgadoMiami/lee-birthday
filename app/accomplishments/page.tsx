'use client';

import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Target,
  Award,
  Heart,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const accomplishments = [
  {
    title: 'Academia',
    description:
      'Your discipline and focus through school showed a strength most people never develop.',
    details: [
      'Focused and hardworking',
      'Leadership in extracurriculars',
      'Graduated with pride',
    ],
    icon: GraduationCap,
    image: '/academia.JPEG',
  },
  {
    title: 'Professional Growth',
    description:
      'Watching you step confidently into your career while still a student was inspiring.',
    details: [
      'Promoted to full-time',
      'Recognized for excellence',
      'Natural leader and collaborator',
    ],
    icon: Briefcase,
    image: '/prof.JPEG',
  },
  {
    title: 'Personal Triumphs',
    description:
      'Your courage to chase life experiences speaks volumes about who you are.',
    details: [
      'Traveled across Japan & Vietnam',
      'Mastered AutoCAD',
      'Passionate rock climber',
    ],
    icon: Target,
    image: '/japan.JPEG',
  },
  {
    title: 'Skills & Talents',
    description:
      'You learn with grace, curiosity, and an artist’s heart.',
    details: [
      'Rapidly learned Spanish',
      'Emotionally intelligent communicator',
      'Incredible artist and painter',
    ],
    icon: Award,
    image: '/skill.JPEG',
  },
  {
    title: 'Heart of Gold',
    description:
      'Your kindness leaves a mark on everyone lucky enough to know you.',
    details: [
      'Always supports friends',
      'Cares deeply for those she loves',
      'Endless compassion',
    ],
    icon: Heart,
    image: '/heart.JPEG',
  },
];

export default function AccomplishmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b  px-6 py-16 text-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          My Amazing Girl
        </motion.h1>

        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          A quiet celebration of everything you are — and everything you’ve
          become.
        </p>
      </div>

      {/* Accomplishments */}
      <div className="max-w-6xl mx-auto space-y-20">
        {accomplishments.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div className="relative w-full h-[320px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-white/10">
                    <Icon className="w-6 h-6 text-pink-300" />
                  </div>
                  <h2 className="text-3xl font-semibold">{item.title}</h2>
                </div>

                <p className="text-white/80 mb-6 text-lg">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <span className="w-2 h-2 rounded-full bg-pink-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-4xl mx-auto mt-32 text-center"
      >
        <Heart className="w-12 h-12 text-pink-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">
          You Are My Greatest Pride
        </h2>
        <p className="text-xl text-white/80 leading-relaxed">
          Every accomplishment matters, but who you are while achieving them
          matters even more. I Love to see the kind of person you are/have grown into
        </p>
        <p className="mt-8 text-2xl text-pink-300 italic">
          “Loving you is my proudest achievement.”
        </p>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-center mt-24">
        <Link
          href="/our-journey"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-12 py-4 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
          
          {/* Text and icon */}
          <span className="relative">My heart</span>
          <ChevronRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300" />
          
          {/* Decorative hearts */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ❤️
          </div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ❤️
          </div>
        </Link>
      </div>
    </div>
  );
}
