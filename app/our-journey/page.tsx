// app/our-journey/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Heart, Coffee, Sunset, Music, Home, Users, ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';

const relationshipMoments = [
  {
    year: "When We Met",
    icon: <Heart className="w-8 h-8" />,
    description: "That first moment I knew you were special",
    memories: ["First conversation", "That smile", "Instant connection"]
  },
  {
    year: "Early Days",
    icon: <Coffee className="w-8 h-8" />,
    description: "Getting to know each other over coffee dates",
    memories: ["Long conversations", "Shared laughter", "Discovering common interests"]
  },
  {
    year: "Growing Together",
    icon: <Users className="w-8 h-8" />,
    description: "Building our life together in Boca",
    memories: ["First apartment", "Creating routines", "Supporting each other's dreams"]
  },
  {
    year: "Special Moments",
    icon: <Sunset className="w-8 h-8" />,
    description: "Countless beautiful Florida sunsets watched together",
    memories: ["Beach walks", "Evening drives", "Quiet moments"]
  },
  {
    year: "Our Traditions",
    icon: <Music className="w-8 h-8" />,
    description: "The little rituals that make us, us",
    memories: ["Saturday breakfasts", "Movie nights", "Kitchen dance parties"]
  },
  {
    year: "Future Dreams",
    icon: <Home className="w-8 h-8" />,
    description: "All the adventures still ahead of us",
    memories: ["Travel plans", "Home dreams", "Growing old together"]
  }
];

export default function OurJourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/accomplishments" 
          className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Heart className="w-16 h-16 mx-auto text-rose-500 mb-4 animate-heartbeat" />
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Beautiful Story</span>
          </h1>
          <p className="text-lg text-gray-600">
            Every moment with you is a treasure
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto">
        {relationshipMoments.map((moment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start mb-8`}
          >
            {/* Content */}
            <div className={`${index % 2 === 0 ? 'mr-4' : 'ml-4'} flex-1`}>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-rose-400 to-pink-400">
                    <div className="text-white">
                      {moment.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{moment.year}</h3>
                    <p className="text-gray-600">{moment.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {moment.memories.map((memory, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400" />
                      <span className="text-gray-700">{memory}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="relative flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-500" />
              {index < relationshipMoments.length - 1 && (
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-pink-300 to-rose-300" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-8 text-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <Calendar className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">[X]</div>
            <div className="text-sm">Years Together</div>
          </div>
          <div>
            <Heart className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">Countless</div>
            <div className="text-sm">Laughs Shared</div>
          </div>
          <div>
            <Sunset className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">Hundreds</div>
            <div className="text-sm">Sunsets Watched</div>
          </div>
          <div>
            <Coffee className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl font-bold">Infinite</div>
            <div className="text-sm">Cups of Coffee</div>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between mt-12 max-w-2xl mx-auto">
        <Link
          href="/accomplishments"
          className="px-6 py-3 bg-white text-gray-700 rounded-full shadow hover:shadow-md transition-shadow"
        >
          Back
        </Link>
        <Link
          href="/memories"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-full shadow hover:shadow-md transition-shadow"
        >
          Next: Our Memories
        </Link>
      </div>
    </div>
  );
}