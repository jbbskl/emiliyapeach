import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emiliya - Exclusive Content',
  description: 'Welcome to Emiliya\'s exclusive content. Find all my spicy links here.',
  keywords: 'Emiliya, exclusive content, OnlyFans, F2F, Telegram',
  openGraph: {
    title: 'Emiliya - Exclusive Content',
    description: 'Welcome to Emiliya\'s exclusive content. Find all my spicy links here.',
    images: ['/beautiful-woman-portrait-professional-headshot.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emiliya - Exclusive Content',
    description: 'Welcome to Emiliya\'s exclusive content. Find all my spicy links here.',
    images: ['/beautiful-woman-portrait-professional-headshot.jpg'],
  },
}

export default function EmiliyaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
