import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emiliya - Exclusive Content',
  description: 'Welcome to Emiliya\'s exclusive content. Find all my spicy links here.',
  keywords: 'Emiliya, exclusive content, Fansly, F2F, Telegram',
  openGraph: {
    title: 'Emiliya - Exclusive Content',
    description: 'Welcome to Emiliya\'s exclusive content. Find all my spicy links here.',
    images: ['/5F7AF329-9471-4DB4-877A-D8C183CAFB59.JPG'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emiliya - Exclusive Content',
    description: 'Welcome to Emiliya\'s exclusive content. Find all my spicy links here.',
    images: ['/5F7AF329-9471-4DB4-877A-D8C183CAFB59.JPG'],
  },
}

export default function EmiliyaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
