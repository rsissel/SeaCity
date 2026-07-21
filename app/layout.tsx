import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'

export const dynamic = 'force-dynamic'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Sea & City View Penthouse — Thessaloniki',
  description: 'Work from home with a view. A penthouse apartment in Thessaloniki for digital nomads, remote workers, and students.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Sea & City View Penthouse — Thessaloniki',
    description: 'Work from home with a view. A penthouse apartment in Thessaloniki for digital nomads, remote workers, and students.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-[#FAF6F1] text-[#3B2F2F] antialiased`}>
        {children}
        <ChunkLoadErrorHandler />
      </body>
    </html>
  )
}
