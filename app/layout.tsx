import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';

import './globals.css'


export const metadata: Metadata = {
  title: 'Mochamad Ilham Alwi Rifa',
  description: 'mochamad ilham alwi rifa portfolio, portofolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}
