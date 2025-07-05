import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akbar Afandi | Portfolio',
  description: 'Personal portfolio of Akbar Afandi, Software Engineer',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
