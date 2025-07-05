import Image from "next/image"
import Link from "next/link"
import { ContactButton } from "@/components/ContactButton"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with social links */}
      <header className="flex justify-end p-6 md:p-8">
        <nav className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/akbar-afandi/"
            target="_blank"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/AkbarDAfandi"
            target="_blank"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Github
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 flex px-6 sm:px-8 md:pl-12 items-center md:ml-72 lg:ml-[21.5rem]">
        <div className="max-w-2xl space-y-8">
          {/* Profile image */}
          <div className="flex justify-start">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/img/profile-pic.png"
                alt="Profile picture"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Hi, I'm Akbar.</h1>

            <div className="space-y-1 text-gray-700 leading-relaxed max-w-lg">
              <p>An aspiring software engineer and enthusiastic learner.</p>
              <p>I am passionate about technology and its potential to create value.</p>
              <p>Currently doing an internship at </p><p><a href="https://mascitra.com/">MASCITRA.COM</a></p>              
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-gray-900">My skills</h2>
            <p className="text-gray-700">PHP • Laravel • JavaScript • CSS • Design Software • Linux</p>
          </div>

          {/* Contact button */}
          <div className="pt-4 flex justify-start">
            <ContactButton />
          </div>
        </div>
      </main>
    </div>
  )
}
