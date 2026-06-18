'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function VisualPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Back link */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8">
        <Link href="/#work" className="nav-link inline-block">&larr; Back to Work</Link>
      </div>

      {/* Hero */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="section-label mb-6">05 — Uncurtained Windows</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">Uncurtained Windows</h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 mt-8"
        >
          <img
            src="/work-visual.png"
            alt="Visual & Experimental"
            className="w-full aspect-video object-cover rounded-sm"
          />
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-6">
            Photography. Visual essays. Poems. Exhibition ideas. Short film scripts. Half-finished concepts. Pitches that never left the drafts folder.
          </p>
        </motion.div>

        {/* Long-form body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl pt-4"
        >
          <div className="quiet-rule mb-10" />

          <div className="space-y-7 text-[var(--tertiary-foreground)]">
            <p className="text-[0.9rem] font-light leading-[1.9]">
              This is the work that doesn&apos;t always have a client, a brief, or a clear outcome.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              It begins with noticing.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              A moment of looking at a sky full of stars from a train window at midnight. A moment on a rainy noon, when I just waited for a bus and nothing else. A moment of deep solitude while looking at a mighty river up close on a stormy dusk. A moment where my childhood and my present are in the same captive cell.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              I make these pieces to understand my own experience of being alive. They are often messy, unresolved, and unconcerned with polish. Some arrive as photographs. Others become poems, paragraphs, essays, scripts, or visual experiments.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              I have never belonged entirely to one medium. Perhaps this section is less about finding the right form and more about following an instinct wherever it leads.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9] italic text-[var(--muted-foreground)]">
              These fragments may feel familiar, perhaps remind you of a room you&apos;ve inhabited briefly in your own life.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
