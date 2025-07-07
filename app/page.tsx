import Image from "next/image"
import Link from "next/link"
import { ContactButton } from "@/components/ContactButton"

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header with social links */}
      <header className="flex justify-end p-6 md:p-8">
        <nav className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/akbar-afandi/"
            target="_blank"
            className="text-gray-700 underline transition-colors hover:no-underline hover:text-gray-900"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/AkbarDAfandi"
            target="_blank"
            className="text-gray-700 underline transition-colors hover:no-underline hover:text-gray-900"
          >
            Github
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 flex px-6 sm:px-8 md:pl-12 items-center md:ml-72 lg:ml-[21.5rem]">
        <div className="space-y-8 max-w-2xl">
          {/* Profile image */}
          <div className="flex justify-start">
            <div className="flex justify-center items-center w-24 h-24 bg-gray-300 rounded-full shadow-md">
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
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Hi, I'm Akbar.</h1>

            <div className="space-y-1 max-w-lg leading-relaxed text-gray-700">
              <p>An aspiring software engineer and enthusiastic learner.</p>
              <p>I am passionate about technology and its potential to create value.</p>
              <p>Currently doing an internship at <a href="https://mascitra.com/" className="text-gray-900 underline hover:no-underline">MASCITRA.COM</a></p>              
            </div>
          </div>

          {/* Skills section */}
          <div className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-gray-900">My skills</h2>
            <p className="text-gray-700">PHP • Laravel • JavaScript • CSS • Design Software • Linux</p>
          </div>

          {/* Projects section */}
          <div className="space-y-3 text-left">
            <h2 className="text-xl font-semibold text-gray-900">Projects i've worked on</h2>
            <p className="text-gray-700"><a href="https://github.com/AkbarDAfandi/libtrackphp" className="text-gray-900 underline hover:no-underline">LibTrack</a> • <a href="https://jurnalistik.smkn1lmj.sch.id/bts-smk/" className="text-gray-900 underline hover:no-underline">Yearbook</a> • <a href="https://github.com/AkbarDAfandi/CloudyNotes" className="text-gray-900 underline hover:no-underline">CloudyNotes</a></p>
          </div>

          {/* Contact button */}
          <div className="flex justify-start pt-4">
            <ContactButton />
          </div>
        </div>
      </main>
    </div>
  )
}
