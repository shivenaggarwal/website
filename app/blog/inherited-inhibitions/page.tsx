"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ReflectionsJournals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#121212] text-white py-8 px-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-sm"
          >
            <ArrowLeft size={14} />
            <span>back to blog</span>
          </Link>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <header className="mb-8">
            <h1 className="text-2xl font-mono text-red-400 mb-2">
              inherited inhibitions
            </h1>
            <div className="text-sm text-gray-400 font-mono flex items-center gap-3">
              <time>july 20, 2025</time>
              <span className="text-gray-600">•</span>
              <span>by shiven</span>
            </div>
          </header>

          <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
            <p className="text-base">
              written at 3:47am with too much caffeine and not enough sleep.
              maybe it's the late hour talking, but i think we're all living
              inside{" "}
              <span className="text-red-400">
                invisible cages we built ourselves
              </span>
              .
            </p>

            <p className="text-base">
              everyone's obsessed with "best practices" and "industry standards"
              but who decided these were best? some committee of people who were
              probably wrong about half the things they believed? we treat these
              guidelines like gospel when they're really just opinions that got
              popular.
            </p>

            <p className="text-base">
              the whole education system is backwards. we spend years learning
              prerequisites for prerequisites, building foundations for
              buildings we might never construct. meanwhile, the kid who drops
              out and starts coding at 14 is shipping products that matter.
            </p>

            <div className="border-l-2 border-red-400 pl-4 my-6">
              <p className="text-base italic">
                "
                <span className="text-red-400">
                  prerequisites are a myth. try giving the problem a shot first,
                  dive headfirst."
                </span>
              </p>
            </div>

            <p className="text-base">
              i've been guilty of this too. spending months "preparing" to start
              a project instead of just starting. reading about machine learning
              for weeks before writing a single line of code. as if knowledge
              without application means anything.
            </p>

            <p className="text-base">
              <span className="text-red-400">
                speed matters more than we admit
              </span>
              . think about it, there are only 52 weeks in a year. how many do
              you spend talking about doing something instead of actually doing
              it?
            </p>

            <p className="text-base">
              when you move fast, you hit reality constantly. you figure out
              what actually works instead of what sounds good in theory. the
              fluff disappears because there's no time for it.
            </p>

            <p className="text-base">
              we've gotten so used to comfort that we can't handle even
              productive discomfort. the moment something feels hard, we retreat
              to "learning more" instead of just pushing through the confusion.
              but confusion is where the real learning happens.
            </p>

            <p className="text-base">
              markets aren't nearly as smart as we pretend they are. if everyone
              was really processing information efficiently, you wouldn't have
              teenagers building billion-dollar companies that "experts" said
              would never work. the biggest wins happen where everyone else
              thinks there's nothing to see.
            </p>

            <p className="text-base">
              <span className="text-red-400">most people are other people</span>
              , as wilde said. they're performing a character they think they
              should be instead of figuring out who they actually are. they
              optimize for external validation instead of internal satisfaction.
            </p>

            <p className="text-base">
              we've stopped asking what actually matters. what creates real
              value versus what just feels good in the moment? it's easier to
              follow someone else's script than to write your own.
            </p>

            <h3 className="text-lg font-mono text-red-400 mt-8 mb-4">
              where do you get your dopamine?
            </h3>

            <p className="text-base">
              think about what actually gets you excited. what makes you lose
              track of time?
            </p>

            <p className="text-base">
              is it scrolling through social media? getting praised by your
              boss? buying something new? we're constantly jumping from one
              quick hit to the next the latest app, the newest gadget, the next
              notification.
            </p>

            <p className="text-base">
              or is it that moment when something you built actually works? when
              you solve a problem that was driving you crazy? when you create
              something that didn't exist before?
            </p>

            <div className="border-l-2 border-red-400 pl-4 my-6">
              <p className="text-base italic">
                "the source of your highs shapes everything you do. chase the
                feeling of making things better, not the feeling of being told
                you're good."
              </p>
            </div>

            <h3 className="text-lg font-mono text-red-400 mt-8 mb-4">
              small teams always win
            </h3>

            <p className="text-base">
              give me three people who actually care over thirty people going
              through the motions. every time. less bureaucracy, quicker
              decisions, everyone actually contributes. plus you can afford to
              pay the good people what they're worth when you're not carrying
              dead weight.
            </p>

            <h3 className="text-lg font-mono text-red-400 mt-8 mb-4">
              what's actually possible
            </h3>

            <p className="text-base">
              we underestimate what's possible. not just technologically, but
              personally. that voice saying "you can't do that" isn't based on
              your actual limits, it's based on everyone else's excuses.
            </p>

            <p className="text-base">
              most of our constraints are just rules someone made up. the only
              real boundaries are the ones physics gives us.
            </p>

            <p className="text-base">
              <span className="text-red-400">
                your ambition should scare people
              </span>
              . if your goals don't make others uncomfortable, they're probably
              too small. the universe is vast and mostly empty and there's room
              for your wildest ideas.
            </p>

            <h3 className="text-lg font-mono text-red-400 mt-8 mb-4">
              breaking free
            </h3>

            <p className="text-base">
              we all know these things somewhere deep down, but we've been
              trained to ignore them. time to stop ignoring them.
            </p>

            <p className="text-base">
              look, we're here with these incredible brains and all this
              technology. why wouldn't we use them to build the world we
              actually want instead of just accepting what's already here? every
              piece of knowledge is a tool for reshaping reality.
            </p>

            <p className="text-base">
              most of us are drifting without any real direction, filling time
              instead of using it. but you get to decide what's worth pursuing.
              you get to choose what kind of person to become.
            </p>

            <p className="text-base">
              stop trying to fix what's broken. start building something
              completely new.
            </p>

            <p className="text-base">
              don't optimize for avoiding failure. optimize for doing something
              so good in one dimension that people can't ignore it, even if
              you're terrible at everything else.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500 font-mono">
              this has been obvious to me for quite some time now, but it's
              always good to have a reminder. perhaps should have kept this in
              my private notes, but here we are.
            </p>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
