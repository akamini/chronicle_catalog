import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'Chronicle Hub',
  description: 'Discover the goods and bike in the Chronicle. ',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" data-theme="light">

      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
