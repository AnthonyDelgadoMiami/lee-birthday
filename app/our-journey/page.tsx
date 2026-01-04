'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart,ChevronRight } from 'lucide-react';

export default function OurLovePage() {
  return (
    <div className="min-h-screen text-white px-6 py-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          My Heart
        </motion.h1>

        <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed">
          My Heart is yours and yours alone,
          I Love you
        </p>
      </div>

      {/* SECTION: Milestone */}
      <section className="max-w-5xl mx-auto mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md"
        >
          <h2 className="text-3xl font-semibold mb-6 text-pink-300">
            We Built a Life Together
          </h2>

          <p className="text-lg text-white/85 leading-relaxed">
            It wasn't just talking about building a life, it wasn't just working to build a life, it wasn't moving in, and it wasn't all those dates.
            It is you, you are my Life, we are building a life together, I never want you to forget I am always in your corner.
          </p>

          <p className="mt-6 text-white/70 italic">
            “Home stopped being a place. It became you.” -Lee
          </p>
        </motion.div>
      </section>

      {/* SECTION: Photo Memories */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Moments That Became Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {['/us-1.JPEG', '/us-2.JPEG', '/us-3.JPEG'].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative h-[320px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={src}
                alt="Us"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION: Letters */}
      <section className="max-w-4xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Letter for my Lee
        </h2>

        {[1].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-[#1e0028]/50 border border-white/10 rounded-3xl p-10"
          >
            <p className="text-sm text-pink-300 mb-4">
              When you need Love,
            </p>

            <p className="text-lg text-white/85 leading-relaxed">
              {/* WRITE YOUR LETTER HERE */}
              My Dearest Lee,
              <br /><br />
              When you need Love from me, remember that I would do anything for you,

              I am always going to give you all the Love I can offer, I can only ever hope it's enough

              You can always text or call me if and when you need me, I will be there, I want to give you the world
              </p>

            <p className="mt-8 text-right text-white/60 italic">
              — Forever yours,

                Tonio
            </p>
          </motion.div>
        ))}
      </section>

      {/* SECTION: Closing */}
      <section className="max-w-3xl mx-auto text-center">
        <Heart className="w-12 h-12 text-pink-400 mx-auto mb-6" />

        <h2 className="text-3xl font-bold mb-6">
          Happy Birthday, My Love
        </h2>

        <p className="text-xl text-white/80 leading-relaxed">
          Hopefully this was a nice and romantic page for you
        </p>

        <p className="mt-10 text-2xl text-pink-300 italic">
          I Love you all of it.
        </p>
      </section>
      
      {/* Navigation */}
      <div className="flex justify-center mt-24">
        <Link
          href="/memories"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-12 py-4 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
          
          {/* Text and icon */}
          <span className="relative">Memories</span>
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
