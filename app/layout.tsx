// app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Dancing_Script, Playfair_Display } from 'next/font/google'
import NavigationFooter from './components/NavigationFooter'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Happy Birthday, My Lee 🎉',
  description: 'A celebration of you',
  icons: {
    icon: '/icon.png', // Main browser tab icon (usually 32x32)
    shortcut: '/icon.png', // Icon for bookmarks/favorites
    apple: '/apple-icon.png', // Apple Home Screen icon (180x180)
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${dancingScript.variable} ${playfair.variable}`}>
      <body className="min-h-screen pb-16 md:pb-0">
        {children}
        <NavigationFooter />
      </body>
    </html>
  )
}