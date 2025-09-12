import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashutosh Rudraksh - AI/ML & Full-Stack Software Engineer',
  description: 'Experienced Software Engineer with $250K+ cost savings through AI automation, 99.99% uptime on 2M+ transactions, and $120K+ revenue generation. Expertise in Python, Java, React, AWS, and scalable AI systems.',
  keywords: [
    'Software Engineer', 
    'AI Engineer', 
    'Machine Learning', 
    'Full Stack Developer', 
    'Python Developer', 
    'Java Developer',
    'React Developer', 
    'AWS Engineer',
    'TypeScript', 
    'Next.js', 
    'Spring Boot',
    'FastAPI',
    'Artificial Intelligence',
    'Data Engineering',
    'Cloud Computing',
    'Ashutosh Rudraksh'
  ],
  authors: [{ name: 'Ashutosh Rudraksh', url: 'https://github.com/ashutoshrudraksh' }],
  creator: 'Ashutosh Rudraksh',
  openGraph: {
    title: 'Ashutosh Rudraksh - AI/ML & Full-Stack Software Engineer',
    description: 'Experienced Software Engineer with $250K+ cost savings through AI automation, 99.99% uptime on 2M+ transactions, and $120K+ revenue generation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ashutosh Rudraksh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashutosh Rudraksh - AI/ML & Full-Stack Software Engineer',
    description: 'Experienced Software Engineer with proven track record in AI automation and scalable systems.',
    creator: '@ashutoshrudraksh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}