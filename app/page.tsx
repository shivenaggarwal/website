"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center py-8 px-4 relative">
      <div className="w-full max-w-3xl px-4">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <Link href="/" className="text-red-400 hover:text-red-300 transition-colors">
            <span className="font-bold text-xl">s.</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-base">
              projects
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-base">
              blog
            </Link>
          </nav>
        </header>

        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative h-[190px]"
          >
            <Image
              src="/images/glitch-art.jpeg"
              alt="abstract glitch art"
              fill
              className="object-cover"
              style={{ border: "1px solid rgba(239, 68, 68, 0.2)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0"
          >
            <motion.h1
              className="text-2xl mb-2 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            >
              <span className="text-red-400">hi, i&apos;m shiven!</span>
            </motion.h1>
            <p className="text-gray-300 text-base font-mono mb-2">
              i&apos;m a researcher and engineer who likes to tinker with algorithms like lego bricks.
            </p>
            <p className="text-gray-400 text-sm font-mono">
              i love working on fun/challenging engineering problems. i write low-level code to build high-level ideas.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-mono text-red-400 mb-2">inspired by</h2>
            <p className="text-base text-gray-300 font-mono">melancholic music, elegant math, good coffee.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-sm font-mono text-red-400 mb-2">open questions</h2>
            <div className="space-y-1 text-base text-gray-300 font-mono">
              <p>how do we align ai with human values?</p>
              <p>is intelligence just compression over time?</p>
              <p>can we formalize creativity?</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-sm font-mono text-red-400 mb-2">current quests</h2>
            <div className="space-y-3 text-base text-gray-300 font-mono">
              <div className="border-l-2 border-red-400 pl-3">exploring reinforcement learning</div>
              <div className="border-l-2 border-red-400 pl-3">diving into LLM & LLMOps</div>
              <div className="border-l-2 border-red-400 pl-3">building cool stuff</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-sm font-mono text-red-400 mb-2">contact</h2>
            <p className="text-base text-gray-300 font-mono mb-2">
              if you&apos;re building something wild or just want to say what&apos;s up, hit me up at{" "}
              <a href="mailto:aggarwalshiven0@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">
                aggarwalshiven0@gmail.com
              </a>
            </p>
            <div className="flex gap-3 text-base text-gray-400 font-mono">
              <a href="https://github.com/shivenaggarwal" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                github
              </a>
              <a href="https://x.com/shivenaggarwal_" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                twitter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
