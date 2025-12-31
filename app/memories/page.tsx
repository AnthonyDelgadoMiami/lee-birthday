// app/memories/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Camera, Heart, Star, Smile, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

const memoryCategories = [
  {
    category: "Beach Days",
    icon: <Star className="w-8 h-8" />,
    description: "Our adventures along the Florida coast",
    color: "from-blue-400 to-cyan-400",
    moments: ["Boca Raton Beach", "Sunset walks", "Shell collecting", "Ocean swims"]
  },
  {
    category: "Date Nights",
    icon: <Heart className="w-8 h-8" />,
    description: "Special evenings out in our city",
    color: "from-rose-400 to-pink-400",
    moments: ["Mizner Park dinners", "Movie dates", "Live music", "Dessert runs"]
  },
  {
    category: "Home Moments",
    icon: <Smile className="w-8 h-8" />,
    description: "Cozy times that mean the world",
    color: "from-amber-400 to-orange-400",
    moments: ["Sunday mornings", "Cooking together", "Movie marathons", "Rainy days"]
  },
  {
    category: "Adventures",
    icon: <Camera className="w-8 h-8" />,
    description: "Exploring Florida together",
    color: "from-emerald-400 to-teal-400",
    moments: ["Day trips", "New restaurants", "Local events", "Nature hikes"]
  }
];

export default function MemoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/our-journey" 
          className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Camera className="w-16 h-16 mx-auto text-purple-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Treasure Chest</span>
          </h1>
          <p className="text-lg text-gray-600">
            Moments that make our story uniquely ours
          </p>
        </motion.div>
      </div>

      {/* Memory Categories */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {memoryCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div 
              className={`h-2 bg-gradient-to-r ${category.color}`}
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.moments.map((moment, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    <span className="text-gray-700">{moment}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Photo Gallery Placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-12"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <ImageIcon className="w-12 h-12 mx-auto text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Photo Gallery</h3>
            <p className="text-gray-600 mb-6">
              This is where our favorite pictures would go!
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  className="aspect-square rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <div className="text-sm text-purple-600">Photo {item}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Add your actual photos here by replacing these placeholders!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between mt-12 max-w-4xl mx-auto">
        <Link
          href="/our-journey"
          className="px-6 py-3 bg-white text-gray-700 rounded-full shadow hover:shadow-md transition-shadow"
        >
          Back
        </Link>
        <Link
          href="/surprise"
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow hover:shadow-md transition-shadow"
        >
          Next: Your Surprise!
        </Link>
      </div>
    </div>
  );
}