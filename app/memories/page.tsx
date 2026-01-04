// app/memories/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';

type Memory =
  | {
      type: 'single';
      title: string;
      date: string;
      caption: string;
      image: string;
    }
  | {
      type: 'collection';
      title: string;
      date: string;
      caption: string;
      images: string[];
    };

const memories: Memory[] = [
  {
    type: 'collection',
    title: 'Our first date location',
    date: 'May 2nd/December 17th 2025',
    caption:
      'Where an awkward date made me happy',
    images: [
      '/memories/date.jpg',
      '/memories/date2.jpg',
      '/memories/date3.jpg',
      '/memories/date4.jpg',
      '/memories/date5.jpg',
      '/memories/date6.jpg',
      '/memories/date7.jpg',
    ],
  },
  {
    type: 'single',
    title: 'One of our first photos',
    date: 'May 23rd 2025',
    caption:
      'I didn’t know it then, but this was the beginning of my favorite chapter.',
    image: '/memories/firstphoto.JPEG',
  },
  {
    type: 'collection',
    title: 'Beach days',
    date: 'Summer 2025',
    caption:
      'Tanned skin, salty hair, and laughing until we forgot the time (Also getting sleepy). Having you swing around on me in the water',
    images: [
      '/memories/beach1.JPEG',
      '/memories/beach2.JPEG',
      '/memories/beach3.JPEG',
    ],
  },
  {
    type: 'collection',
    title: 'The babies',
    date: '-',
    caption:
      'Kana and Winter are cute babies',
    images: [
      '/memories/kw1.JPEG',
      '/memories/kw2.JPEG',
      '/memories/kw3.JPEG',
    ],
  },
  {
    type: 'single',
    title: 'Home started feeling like us',
    date: 'November 23nd 2025',
    caption:
      'Somehow everything felt lighter once we shared the same space.',
    image: '/memories/home.JPEG',
  },
  {
    type: 'collection',
    title: 'Little moments Id never let us forget',
    date: 'Random days',
    caption:
      'No plans. No cameras ready. Just us.',
    images: [
      '/memories/random1.JPEG',
      '/memories/random2.JPEG',
    ],
  },
  
];

export default function MemoriesPage() {
  return (
    <div className="min-h-screen bg-[#faf7f5] px-5 py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-12">
        <Link
          href="/our-journey"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-neutral-900 mb-3"
        >
          Our Memories
        </motion.h1>

        <p className="text-neutral-600 text-lg">
          Eight months of moments that became my favorite stories.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto space-y-20">
        {memories.map((memory, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Title */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900">
                {memory.title}
              </h2>
              <p className="text-sm text-neutral-500">{memory.date}</p>
            </div>

            {/* Images */}
            {memory.type === 'single' && (
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {memory.type === 'collection' && (
              <div className="grid grid-cols-2 gap-4">
                {memory.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-xl overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${memory.title} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Caption */}
            <p className="text-neutral-700 text-base leading-relaxed max-w-xl">
              {memory.caption}
            </p>
          </motion.section>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-24">
        <Link
          href="/surprise"
          className="group relative flex items-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-12 py-4 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
          
          {/* Text and icon */}
          <span className="relative">Surprise incoming</span>
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
