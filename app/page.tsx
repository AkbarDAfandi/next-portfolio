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
                src="https://qbuilki0udhtacvb.public.blob.vercel-storage.com/profile-pic-GvnUYjQflaYkzEce5FBIGtaD3PJd9n.png"
                alt="Profile picture"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-4 text-left">
          	<h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Hi, I'm <span className="text-blue-600">Muhammad Akbar Dwi Afandi</span>.
           </h1>

            <div className="space-y-2 max-w-2xl leading-relaxed text-gray-700">
            <p className="text-2xl">
              Backend Developer & Student at <a href="https://smkn1lmj.sch.id/" className="text-black underline hover:no-underline">SMK Negeri 1 Lumajang</a>.
            </p>
            <p>
              I build scalable apps with <a href="https://laravel.com/" className="text-black underline hover:no-underline">PHP</a> & <a href="https://laravel.com/" className="text-black underline hover:no-underline">Laravel</a>.
              Previously interned at <a href="https://mascitra.com/" className="text-black underline hover:no-underline">MASCITRA.COM</a>, <br></br>where I optimized database architectures for local government projects.
            </p>
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
            <p className="text-gray-700"><a href="https://github.com/AkbarDAfandi/libtrackphp" className="text-gray-900 underline hover:no-underline">LibTrack</a> • <a href="https://jurnalistik.smkn1lmj.sch.id/bts-smk/" className="text-gray-900 underline hover:no-underline">Yearbook</a> • <a href="https://github.com/AkbarDAfandi/CloudyNotes" className="text-gray-900 underline hover:no-underline">CloudyNotes</a> • <a href="https://github.com/AkbarDAfandi/crud_sekolah" className="text-gray-900 underline hover:no-underline">school_management</a> • <a className="text-gray-900">and other project on my github</a></p>
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
