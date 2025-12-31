// app/components/NavigationFooter.tsx
'use client';

import Link from 'next/link';
import { Home, Trophy, Heart, Camera, Gift } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function NavigationFooter() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { href: '/accomplishments', icon: <Trophy className="w-5 h-5" />, label: 'Achievements' },
    { href: '/our-journey', icon: <Heart className="w-5 h-5" />, label: 'Our Story' },
    { href: '/memories', icon: <Camera className="w-5 h-5" />, label: 'Memories' },
    { href: '/surprise', icon: <Gift className="w-5 h-5" />, label: 'Surprise' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href === '/' && pathname === '/') ||
            (item.href !== '/' && pathname?.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                isActive 
                  ? 'text-pink-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className={`mb-1 ${isActive ? 'scale-110' : ''}`}>
                {item.icon}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}