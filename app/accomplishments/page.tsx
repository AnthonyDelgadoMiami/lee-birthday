// app/accomplishments/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Briefcase, Star, Award, Target, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const accomplishments = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Academic Success",
    description: "Graduated with honors in [Her Field], showing incredible dedication",
    details: ["Maintained 4.0 GPA", "Published research", "Academic awards"]
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Career Growth",
    description: "Rapid promotion at work, leading important projects with excellence",
    details: ["Lead major projects", "Mentored team members", "Exceeded all targets"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Personal Goals",
    description: "Achieved [specific personal goal], showing incredible determination",
    details: ["Ran first marathon", "Learned new language", "Mastered new skill"]
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Skills Mastered",
    description: "Became proficient in multiple areas while balancing everything else",
    details: ["Public speaking", "Leadership", "Technical expertise"]
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Community Impact",
    description: "Made a real difference through volunteer work and kindness",
    details: ["Volunteer hours", "Charity events", "Community leadership"]
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Overcoming Challenges",
    description: "Faced difficulties with incredible strength and grace",
    details: ["Perseverance", "Resilience", "Positive attitude"]
  }
];

export default function AccomplishmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Trophy className="w-16 h-16 mx-auto text-amber-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Celebrating Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Incredible Journey</span>
          </h1>
          <p className="text-lg text-gray-600">
            I'm so proud of everything you've accomplished
          </p>
        </motion.div>
      </div>

      {/* Accomplishments Grid */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {accomplishments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6"
      >
        <p className="text-xl italic text-gray-700 text-center">
          "Every day, you continue to amaze me with your strength, intelligence, and kindness."
        </p>
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between mt-12 max-w-4xl mx-auto">
        <Link
          href="/"
          className="px-6 py-3 bg-white text-gray-700 rounded-full shadow hover:shadow-md transition-shadow"
        >
          Back Home
        </Link>
        <Link
          href="/our-journey"
          className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow hover:shadow-md transition-shadow"
        >
          Next: Our Journey
        </Link>
      </div>
    </div>
  );
}