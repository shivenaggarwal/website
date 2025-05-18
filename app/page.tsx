import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center min-h-[800px]">
        <main className="container max-w-3xl mx-auto px-4 py-12 my-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-1">Shiven Aggarwal</h1>
            <p className="text-zinc-400 mb-4">Mathematics | Machine Learning | Software Engineer</p>
            <nav className="flex text-sm">
              <Link href="/" className="text-white mr-6 border-b border-white pb-0.5">
                About
              </Link>
              <Link href="/crafts" className="text-zinc-400 hover:text-white">
                Crafts
              </Link>
            </nav>
          </header>

          <section className="mb-8">
            <h2 className="text-lg font-medium text-white mb-3">こんにちは！</h2>
            <p className="text-zinc-300 mb-4">
              I'm a researcher and engineer fascinated by how machines learn language and make decisions.
            </p>
            <p className="text-zinc-300 mb-4">
              I love working on fun/challenging engineering problems. I believe the most interesting breakthroughs
              happen when we combine ideas from different disciplines.
            </p>

            <div className="text-sm text-zinc-400 space-y-1.5">
              <p>
                <span className="text-zinc-500">Reading</span> The Portrait of Dorian Gray, The Stranger, Wuthering
                Heights, The Metamorphosis, The Secret History, The Great Gatsby
              </p>
              <p>
                <span className="text-zinc-500">Inspired by</span> melancholic music, elegant math, good coffee
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-medium text-white mb-3">Current Quests</h2>
            <ul className="space-y-3">
              <li className="border-l-2 border-white pl-3">
                <span className="text-zinc-400">Mastering the mathematical foundations of ML</span>
              </li>
              <li className="border-l-2 border-white pl-3">
                <span className="text-zinc-400">
                  Implementing research papers and exploring theoretical foundations
                </span>
              </li>
              <li className="border-l-2 border-white pl-3">
                <span className="text-zinc-400">Building projects with thoughtful documentation</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-medium text-white mb-3">Contact</h2>
            <p className="text-zinc-400 text-sm">
              If you're building something wild or just want to say what's up, hit me up at{" "}
              <Link
                href="mailto:aggarwalshiven0@gmail.com"
                className="text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aggarwalshiven0@gmail.com
              </Link>
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="https://github.com/shivenaggarwal"
                className="text-zinc-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/shivenaggarwal_"
                className="text-zinc-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
