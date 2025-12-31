// app/page.tsx - This will be the Welcome page
'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-50" />
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 16}px`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <Sparkles className="w-24 h-24 mx-auto text-pink-500 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          Happy Birthday, My Love! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-gray-700 mb-12 font-light"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          A special celebration just for you
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
          className="flex justify-center gap-4 mb-12"
        >
          <Heart className="w-12 h-12 text-rose-500 animate-heartbeat" />
          <Heart className="w-16 h-16 text-pink-500 animate-heartbeat" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-12 h-12 text-rose-500 animate-heartbeat" style={{ animationDelay: '0.4s' }} />
        </motion.div>

        {/* Navigation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Birthday Journey</h2>
          
          <div className="space-y-4">
            <Link 
              href="/accomplishments" 
              className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800">Celebrating You</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
            </Link>

            <Link 
              href="/our-journey" 
              className="flex items-center justify-between p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl hover:from-rose-100 hover:to-pink-100 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800">Our Journey</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rose-500" />
            </Link>

            <Link 
              href="/memories" 
              className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl hover:from-purple-100 hover:to-violet-100 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800">Our Memories</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />
            </Link>

            <Link 
              href="/surprise" 
              className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl hover:from-amber-100 hover:to-orange-100 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-800">Your Surprise</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500" />
            </Link>
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            Tap on a card to begin the celebration
          </p>
        </motion.div>
      </div>
    </div>
  );
}