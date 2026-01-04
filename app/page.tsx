// app/page.tsx - Dramatic Redesign with Photos
'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronRight, Camera, Star, Gift, Trophy, ArrowRight, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WelcomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cinematic Background Layers */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-rose-950 to-pink-900" />
        
        {/* Animated Light Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Falling Hearts */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-300/30"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 32 + 16}px`,
              }}
              animate={{
                y: [-100, window.innerHeight + 100],
                x: [0, Math.random() * 100 - 50],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              ♥
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section with Photo Collage */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <div className="max-w-7xl w-full">
         {/* Photo Collage - Fixed 2x2 layout */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {/* Left photo - spans 2 columns, 2 rows (full height of right column) */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-2 row-span-2 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <Image
                  src="/IMG_1070.JPEG" 
                  alt="Our special moment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
            
            {/* Top-right photo - column 3, row 1 */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-1 row-span-1 aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <Image
                  src="/IMG_9020.JPEG" 
                  alt="Our special moment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* New small photo - column 3, row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="col-span-1 row-span-1 aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <Image
                  src="/IMG_9095.JPEG" 
                  alt="Another memory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
              
              
              {/* Middle photo */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="col-span-3 aspect-[16/5] rounded-2xl overflow-hidden shadow-2xl border-white/20 mt-4"
              >
                <div className="w-full h-full bg-gradient-to-r from-blue-500/80 to-cyan-500/80 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Calendar className="w-20 h-20 mx-auto mb-4 text-white/80" />
                    <p className="text-white text-2xl">Birthday Celebration 2026</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Dramatic Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="text-center mb-12"
            >
              <div className="inline-block relative">
                <Sparkles className="w-32 h-32 mx-auto text-yellow-300 mb-6 animate-pulse" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-yellow-300/30 rounded-full"
                />
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-7xl md:text-8xl font-bold mb-6 text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Happy Birthday
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "400px" }}
                transition={{ delay: 1.2, duration: 1.5 }}
                className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-8"
              />
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                To The Most Amazing Woman 
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                And My Most Amazing Lee
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-xl text-white/80 max-w-2xl mx-auto"
              >
                This week is just the beginning of celebrating everything that makes you special
              </motion.p>
            </motion.div>

            {/* Clean Colorful Timeline Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="max-w-6xl mx-auto px-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.9 }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Your Celebration Journey
                </h3>
                <p className="text-lg text-white/80">Follow the path to explore each part of your birthday</p>
              </motion.div>
              
              <div className="space-y-8">
                {[
                  { 
                    href: "/accomplishments", 
                    emoji: "🏆", 
                    title: "Your Victories", 
                    desc: "Why we are celebrating your incredible achievements", 
                    bgColor: "bg-gradient-to-r from-blue-50 to-white",
                    borderColor: "border-l-blue-400"
                  },
                  { 
                    href: "/our-journey", 
                    emoji: "❤️", 
                    title: "My heart", 
                    desc: "Of which I give all to you", 
                    bgColor: "bg-gradient-to-r from-pink-50 to-white",
                    borderColor: "border-l-pink-400"
                  },
                  { 
                    href: "/memories", 
                    emoji: "📸", 
                    title: "Precious Memories", 
                    desc: "Moments of your life we remember", 
                    bgColor: "bg-gradient-to-r from-purple-50 to-white",
                    borderColor: "border-l-purple-400"
                  },
                  { 
                    href: "/surprise", 
                    emoji: "🎁", 
                    title: "The Grand Surprise", 
                    desc: "A universal truth to be discovered", 
                    bgColor: "bg-gradient-to-r from-orange-50 to-white",
                    borderColor: "border-l-orange-400"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + (index * 0.2) }}
                  >
                    <Link href={item.href} className="group block">
                      {/* Using inline styles as fallback */}
                      <motion.div
                        whileHover={{ scale: 1.02, x: 10 }}
                        className={`${item.bgColor} ${item.borderColor} border-l-8 rounded-r-2xl p-8 shadow-xl border border-gray-200/50 overflow-hidden`}
                        style={{
                          // Fallback inline style
                          background: item.bgColor === "bg-gradient-to-r from-blue-50 to-white" 
                            ? "linear-gradient(to right, #eff6ff, #ffffff)"
                            : item.bgColor === "bg-gradient-to-r from-pink-50 to-white"
                            ? "linear-gradient(to right, #fdf2f8, #ffffff)"
                            : item.bgColor === "bg-gradient-to-r from-purple-50 to-white"
                            ? "linear-gradient(to right, #faf5ff, #ffffff)"
                            : "linear-gradient(to right, #fff7ed, #ffffff)",
                          borderLeftColor: item.borderColor === "border-l-blue-400" ? "#60a5fa"
                            : item.borderColor === "border-l-pink-400" ? "#f472b6"
                            : item.borderColor === "border-l-purple-400" ? "#a78bfa"
                            : "#fb923c"
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            {/* Emoji Icon */}
                            <div className="text-5xl">{item.emoji}</div>
                            
                            {/* Text Content */}
                            <div>
                              <h4 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h4>
                              <p className="text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                          
                          {/* Arrow */}
                          <ArrowRight className="w-8 h-8 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-2 transition-all" />
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Simple CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 }}
                className="text-center mt-12"
              >
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}