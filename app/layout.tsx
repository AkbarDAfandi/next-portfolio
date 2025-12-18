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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammad Akbar Dwi Afandi",
  "jobTitle": "Backend Developer",
  "url": "https://www.akbarafandi.my.id",
  "image": "https://avatars.githubusercontent.com/u/AkbarDAfandi",
  "affiliation": [
    {
      "@type": "Organization",
      "name": "SMK Negeri 1 Lumajang Theater Club",
      "roleName": "Chairman (2024-2025)"
    },
    {
      "@type": "Organization",
      "name": "SMK Negeri 1 Lumajang Journalism Club",
      "roleName": "Vice Chairman (2024-2025)"
    }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "SMK Negeri 1 Lumajang"
  },
  "knowsAbout": ["Laravel", "PHP", "Flutter", "Supabase", "IoT", "MySQL"],
  "sameAs": [
    "https://www.linkedin.com/in/akbar-afandi/",
    "https://github.com/AkbarDAfandi",
    "https://instagram.com/rexec.png",
    "https://akbardafandi.github.io/akbardafandi/"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {children}
      </body>
    </html>
  )
}
