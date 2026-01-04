// app/surprise/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Gift,
  MapPin,
  Calendar,
  Sparkles,
  Cake,
  Heart,
  ArrowLeft,
  Car,
} from 'lucide-react';
import Link from 'next/link';

export default function SurprisePage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fde2e4] via-[#f8cdda] to-[#e0c3fc] text-[#4b3b5a]">
      {/* Back */}
      <div className="p-5">
        <Link
          href="/memories"
          className="inline-flex items-center gap-2 text-[#7a5fa0] font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
      </div>

      <AnimatePresence mode="wait">
        {!revealed ? (
          /* Tease */
          <motion.section
            key="closed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center px-6 text-center min-h-[80vh]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mb-8"
            >
              <Gift className="w-28 h-28 text-[#c08497]" />
            </motion.div>

            <h1 className="text-4xl font-semibold mb-4">
              One last surprise
            </h1>

            <p className="text-base text-[#6d597a] max-w-sm mb-10">
              I saved this one for the end — just for you.
            </p>

            <button
              onClick={() => setRevealed(true)}
              className="px-10 py-3 rounded-full bg-[#f4acb7] text-white font-medium shadow-md active:scale-95"
            >
              Open it
            </button>
          </motion.section>
        ) : (
          /* Reveal */
          <motion.section
            key="open"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 pb-20 space-y-14"
          >
            {/* Hero */}
            <div className="text-center">
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#f4acb7] flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl font-semibold mb-2">
                We’re going to Orlando
              </h1>

              <p className="text-[#6d597a]">
                This coming weekend.
              </p>
            </div>

            {/* Destination */}
            <div className="rounded-2xl p-6 bg-white/70 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#c08497]" />
                <h2 className="text-xl font-medium">
                  Orlando, Florida
                </h2>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-5 h-5 text-[#c08497]" />
                <span>This coming weekend</span>
              </div>

              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-[#c08497]" />
                <span>Just a 3-hour drive</span>
              </div>
            </div>

            {/* Birthday */}
            <div className="rounded-2xl p-6 bg-[#f8cdda]/60">
              <div className="flex items-center gap-3 mb-3">
                <Cake className="w-6 h-6 text-[#7a5fa0]" />
                <h3 className="text-lg font-medium">
                  Your Birthday at Universal
                </h3>
              </div>

              <ul className="space-y-2 text-sm">
                <li>• Universal Studios all day</li>
                <li>• Birthday surprises</li>
                <li>• Dinner together</li>
                <li>• Ending the night hand in hand</li>
              </ul>
            </div>

            {/* Weekend */}
            <div className="space-y-3">
              {[
                ['Friday', 'Road trip and a cozy night together'],
                ['Saturday', 'Your birthday and Universal'],
                ['Sunday', 'Slow morning, H-mart, hotsprings, and more'],
              ].map(([day, text]) => (
                <div
                  key={day}
                  className="rounded-xl p-4 bg-white/60"
                >
                  <h4 className="font-medium">{day}</h4>
                  <p className="text-sm text-[#6d597a]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Letter */}
            <div className="rounded-2xl p-8 text-center bg-[#fde2e4]">
              <Heart className="w-10 h-10 mx-auto mb-4 text-[#c08497]" />

              <p className="text-base leading-relaxed mb-4">
                This trip is a small way of saying thank you
                for who you are, for Loving me,
                and for choosing us every day.

                Today is celebrating my good girl
              </p>

              <p className="font-medium">
                Happy Birthday, my Love 🤍
              </p>

              <p className="mt-2 text-sm text-[#7a5fa0]">
                — Tonio
              </p>
            </div>

            {/* End */}
            <div className="flex justify-center">
              <Link
                href="/"
                className="px-8 py-3 rounded-full text-white font-medium shadow"
              >
                Back to the beginning
              </Link>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
