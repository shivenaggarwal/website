"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return null;

  /* const posts = [
    {
      title: "inherited inhibitions",
      excerpt: "mental backchannel i forgot to keep private",
      date: "july 20, 2025",
      slug: "inherited-inhibitions",
    },
  ];

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
            <span className="text-red-400">blog</span>
          </motion.h1>
          <div className="w-16 hidden sm:block"></div>
        </div>

        {/* Commented out coming soon message
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-16"
        >
          <h2 className="text-2xl font-mono text-red-400 mb-4">coming soon!</h2>
          <p className="text-base text-gray-300 font-mono text-center max-w-md">
            thoughts on reinforcement learning, language models, and more will appear here soon.
          </p>
        </motion.div>
        */}

        /*<div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="border-l border-gray-800 pl-4 hover:border-red-400 transition-colors group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-base font-medium mb-1.5 group-hover:text-red-400 transition-colors font-mono">
                  {post.title}
                </h2>
                <div className="text-sm text-gray-400 mb-2 font-mono">
                  <span>{post.date}</span>
                </div>
                <p className="text-base text-gray-300 font-mono mb-2">
                  {post.excerpt}
                </p>
                <div className="text-sm text-red-400 group-hover:text-red-300 transition-colors font-mono">
                  read →
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  ); 
}*/
