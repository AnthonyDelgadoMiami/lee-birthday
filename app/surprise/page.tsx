// app/surprise/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Gift, Plane, Hotel, Utensils, Star, ArrowLeft, Car } from 'lucide-react';
import Link from 'next/link';

export default function SurprisePage() {
  const [isRevealed, setIsRevealed] = useState(false);

  const tripDetails = {
    destination: "Orlando, Florida 🎢",
    date: "This Coming Weekend!",
    duration: "3 Days / 2 Nights",
    distance: "Just 3 hours from Boca Raton",
    highlights: [
      { icon: <Hotel className="w-6 h-6" />, text: "Luxury Resort Stay", color: "from-blue-400 to-cyan-400" },
      { icon: <Star className="w-6 h-6" />, text: "Theme Park Fun", color: "from-purple-400 to-violet-400" },
      { icon: <Utensils className="w-6 h-6" />, text: "Amazing Dining", color: "from-amber-400 to-orange-400" },
      { icon: <Car className="w-6 h-6" />, text: "Road Trip Adventure", color: "from-emerald-400 to-teal-400" }
    ],
    itinerary: [
      { 
        day: "Friday", 
        theme: "Arrival & Magic",
        activities: ["Scenic drive from Boca", "Check into luxury resort", "Evening at Disney Springs", "Romantic dinner"]
      },
      { 
        day: "Saturday", 
        theme: "Birthday Fun Day",
        activities: ["Full day at theme park", "Special birthday surprises", "Evening spectacular show", "Celebration dinner"]
      },
      { 
        day: "Sunday", 
        theme: "Relax & Return",
        activities: ["Leisurely brunch", "Resort pool time", "Spa relaxation", "Drive home refreshed"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/memories" 
          className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
      </div>

      {!isRevealed ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12"
        >
          <Gift className="w-32 h-32 mx-auto text-yellow-300 mb-8 animate-bounce" />
          <h1 className="text-5xl font-bold text-white mb-6">
            One Final Surprise... 🎁
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-md mx-auto">
            You've been celebrated all day, but I saved the best for last!
          </p>
          
          <button
            onClick={() => setIsRevealed(true)}
            className="px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-2xl font-bold rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Open Your Gift
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Main Announcement */}
          <div className="text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full mb-6">
              <Plane className="w-20 h-20 text-white" />
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-4">
              Pack Your Bags! 🧳
            </h1>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-lg mx-auto border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-yellow-300" />
                <span className="text-3xl font-bold text-white">{tripDetails.destination}</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-yellow-300" />
                <span className="text-xl text-white">{tripDetails.date}</span>
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <Car className="w-6 h-6 text-yellow-300" />
                <span className="text-lg text-white/90">{tripDetails.distance}</span>
              </div>
              
              <p className="text-lg text-white/90">
                A birthday getaway to celebrate YOU!
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tripDetails.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${highlight.color} rounded-xl p-4`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      {highlight.icon}
                    </div>
                    <span className="text-white font-medium">{highlight.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Birthday Weekend Itinerary</h2>
            <div className="space-y-4">
              {tripDetails.itinerary.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl text-yellow-300">{index === 0 ? "🎉" : index === 1 ? "🎂" : "💝"}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{day.day}</h3>
                      <p className="text-yellow-300">{day.theme}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {day.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/90">
                        <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl p-8 border border-pink-500/30">
              <p className="text-2xl text-white mb-6">
                My love, this trip is just a small way to show how much you mean to me.
                Every moment with you is magical, and I can't wait to create more memories together.
              </p>
              
              <div className="text-4xl text-yellow-300 animate-pulse mb-6">
                ❤️ Happy Birthday, My Love! ❤️
              </div>
              
              <p className="text-white/80">
                With all my love,<br />
                [Your Name]
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
            >
              Back to Beginning
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}