"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calculator, Palette, BookOpen, Terminal } from 'lucide-react'

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const projects = [
    {
      title: "pocketgrad",
      description:
        "lightweight autograd engine built with NumPy and Python, designed to mimic PyTorch's core differentiation functionality.",
      tags: ["python", "numpy"],
      link: "https://github.com/shivenaggarwal/pocketgrad",
      icon: <Calculator size={16} className="text-red-400" />,
    },
    {
      title: "arxivist",
      description:
        "ongoing implementation of important research papers and deep learning concepts, with clean code and detailed explanations.",
      tags: ["python", "deep learning", "research"],
      link: "https://github.com/shivenaggarwal/arxivist",
      icon: <BookOpen size={16} className="text-red-400" />,
    },
    {
      title: "vangogh-colorizer",
      description:
        "advanced CNN-cGAN architecture that transforms monochrome images into vivid colorizations mimicking VanGogh's distinctive palette and brushwork techniques.",
      tags: ["python", "pytorch", "gan"],
      link: "https://github.com/shivenaggarwal/vangogh-image-colorizer",
      icon: <Palette size={16} className="text-red-400" />,
    },
    {
      title: "lsp",
      description: "A tiny language server protocol implementation built in Go.",
      tags: ["go", "lsp", "dev-tools"],
      link: "https://github.com/shivenaggarwal/lsp",
      icon: <Terminal size={16} className="text-red-400" />,
    },
  ]

  return (
    <main className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center py-8 px-4 relative">
      <div className="w-full max-w-3xl px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm"
          >
            <ArrowLeft size={14} />
            <span>back</span>
          </Link>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-mono self-center"
          >
            <span className="text-red-400">projects</span>
          </motion.h1>
          <div className="w-16 hidden sm:block"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="border-l border-gray-800 pl-4 hover:border-red-400 transition-colors group"
            >
              {/* <h2 className="text-base font-medium mb-1.5 font-mono group-hover:text-red-400 transition-colors">
                {project.title}
              </h2> */}
              <div className="flex items-center gap-2 mb-1.5">
                {project.icon}
                <h2 className="text-base font-medium font-mono group-hover:text-red-400 transition-colors">
                  {project.title}
                </h2>
              </div>
              <p className="text-base text-gray-400 mb-2 font-mono">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-sm text-gray-300 font-mono">
                    {tag}
                    {i < project.tags.length - 1 && " · "}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-base text-red-400 hover:text-red-300 transition-colors font-mono">
                view →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
