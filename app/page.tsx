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
    <main className="min-h-screen bg-[#121212] text-white relative">
      <div className="w-[750px] mx-auto pt-24 pb-8 px-8 max-[1510px]:w-auto max-[1510px]:mx-0 max-[1510px]:ml-0 max-[1510px]:mr-0 max-[1510px]:px-4 max-[1510px]:pt-8">
        <header className="mb-8">
          <Link href="/" className="text-red-400 hover:text-red-300 transition-colors">
            <span className="font-bold text-xl">s.</span>
          </Link>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.h1
            className="text-lg mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          >
            <span className="text-red-400">yoo wsg!!</span>
          </motion.h1>
          <p className="text-gray-300 text-base font-mono mb-3 leading-relaxed">
            i&apos;m shiven - a researcher and engineer who likes to tinker with algorithms like lego bricks.
          </p>
          <p className="text-gray-400 text-base font-mono leading-relaxed">
            i love working on fun/challenging engineering problems. i like to code and experiment with new architectures.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base font-mono text-red-400 mb-2">inspired by</h4>
            <p className="text-base text-gray-300 font-mono leading-relaxed">melancholic music, elegant math, good coffee.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h4 className="text-base font-mono text-red-400 mb-2">posts</h4>
            <div className="text-base text-gray-300 font-mono leading-relaxed">
              2025-07-20 ::{" "}
              <Link href="/blog/inherited-inhibitions" className="text-gray-400 hover:text-white transition-colors">
                inherited inhibitions
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base font-mono text-red-400 mb-2">current quests</h4>
            <div className="space-y-2 text-base text-gray-300 font-mono">
              <div className="border-l-2 border-red-400 pl-3 leading-relaxed">language models</div>
              <div className="border-l-2 border-red-400 pl-3 leading-relaxed">rl and control theory</div>
              <div className="border-l-2 border-red-400 pl-3 leading-relaxed">world models</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-base font-mono text-red-400 mb-2">contact</h4>
            <p className="text-base text-gray-300 font-mono mb-3 leading-relaxed">
              appreciate you coming this far, wanna say what&apos;s up, hit me up at{" "}
              <a href="mailto:aggarwalshiven0@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">
                aggarwalshiven0@gmail.com
              </a>
            </p>
            <div className="text-base font-mono leading-relaxed">
              <a href="https://github.com/shivenaggarwal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                github
              </a>
              <span className="text-gray-400">    </span>
              <a href="https://x.com/shivenaggarwal_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                twitter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
