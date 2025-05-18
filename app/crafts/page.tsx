import type React from "react"
import Link from "next/link"
import { ArrowUpRight, CastleIcon as ChessKnight, Layers, Beaker, Palette, Heart, Activity } from "lucide-react"

type ProjectProps = {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
}

function Project({ title, description, icon, link = "#" }: ProjectProps) {
  return (
    <li>
      <div className="flex items-baseline justify-between">
        <div className="flex items-center">
          {icon}
          <h3 className="text-white">{title}</h3>
        </div>
        <Link
          href={link}
          className="text-zinc-500 hover:text-zinc-300 ml-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View project"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
      <p className="text-zinc-400 text-sm mt-0.5 ml-6">{description}</p>
    </li>
  )
}

export default function Crafts() {
  const seriousProjects = [
    {
      title: "PocketGrad",
      description:
        "Lightweight autograd engine built with NumPy and Python, designed to mimic PyTorch's core differentiation functionality.",
      icon: <Layers className="h-4 w-4 text-zinc-500 mr-2" />,
      link: "https://github.com/shivenaggarwal/PocketGrad",
    },
    {
      title: "VanGogh Colorizer",
      description:
        "Advanced CNN-cGAN architecture that transforms monochrome images into vivid colorizations mimicking VanGogh's distinctive palette and brushwork techniques.",
      icon: <Palette className="h-4 w-4 text-zinc-500 mr-2" />,
      link: "https://github.com/shivenaggarwal/vangogh-image-colorizer",
    },
    {
      title: "PaperToCode",
      description:
        "Ongoing implementation of important research papers and deep learning concepts, with clean code and detailed explanations.",
      icon: <Beaker className="h-4 w-4 text-zinc-500 mr-2" />,
      link: "https://github.com/shivenaggarwal/PaperToCode",
    },
  ]

  const funProjects = [
    {
      title: "MindfulAI",
      description:
        "Fine-tuned Falcon-7B model using QLoRA on curated mental health datasets to create an empathetic conversational AI for psychological support.",
      icon: <Heart className="h-4 w-4 text-zinc-500 mr-2" />,
      link: "https://github.com/shivenaggarwal/MindfulAI",
    },
    {
      title: "CourtTracker",
      description:
        "Tennis analysis using YOLO and CNNs to track players and ball, with game-like overlay and performance metrics displayed beneath match footage.",
      icon: <Activity className="h-4 w-4 text-zinc-500 mr-2" />,
      link: "https://github.com/shivenaggarwal/tennis-analysis",
    },
    {
      title: "Chess Engine",
      description:
        "Python chess engine with PvP gameplay and AI opponents using minimax and alpha-beta pruning, featuring an aesthetically refined Pygame interface.",
      icon: <ChessKnight className="h-4 w-4 text-zinc-500 mr-2" />,
      link: "https://github.com/shivenaggarwal/chess-engine",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-zinc-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center min-h-[800px]">
        <main className="container max-w-3xl mx-auto px-4 py-12 my-auto">
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-1">Shiven Aggarwal</h1>
            <p className="text-zinc-400 mb-4">Mathematics | Machine Learning | Software Engineer</p>
            <nav className="flex text-sm">
              <Link href="/" className="text-zinc-400 hover:text-white mr-6">
                About
              </Link>
              <Link href="/crafts" className="text-white border-b border-white pb-0.5">
                Crafts
              </Link>
            </nav>
          </header>

          <section className="mb-8">
            <h2 className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-wider">Serious Projects</h2>
            <ul className="space-y-5">
              {seriousProjects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  link={project.link}
                />
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-wider">Fun Projects</h2>
            <ul className="space-y-5">
              {funProjects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  link={project.link}
                />
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
