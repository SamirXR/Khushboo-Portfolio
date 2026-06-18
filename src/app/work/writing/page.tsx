'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WritingPage() {
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
          <div className="section-label mb-6">06 — Shapes of Feelings</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">Shapes of Feelings</h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 mt-8"
        >
          <img
            src="/work-writing.png"
            alt="Writing & Thought Pieces"
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
            Writings and thought pieces on belonging, becoming, and the ordinary moments that quietly reveal us.
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
              I write about the shapes feelings take, as an ongoing attempt to map the interior landscapes we often assume we inhabit alone.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              The ones that don&apos;t have neat names. The quiet recognitions, private contradictions, and ordinary moments that alter the landscape within us. A rainy afternoon. The relief of solitude. The ache of not fitting in. The strange experience of arriving, almost accidentally, at a different version of your life.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              I don&apos;t write to tell people what to think. I write to understand what I felt. To examine experiences that seemed small from the outside but carried unexpected meaning beneath the surface.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              I am interested in the distance between who we are and who we believe we should be. In the stories we inherit about belonging, success, love, and identity, and what happens when those stories fail to hold us. I wonder why some social structures feel like homes to some people and cages to others, and how we might build communities rooted instead in care.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9]">
              I care less about polished conclusions and more about recognition. If someone reads a piece and finds language for something they have carried for years, or laughs at an uncomfortable truth they had never admitted aloud, then the words have done their work.
            </p>

            <p className="text-[0.9rem] font-light leading-[1.9] italic text-[var(--muted-foreground)]">
              These essays are my way of paying attention. Of connecting seemingly unrelated moments until a different shape of understanding begins to emerge.
            </p>
          </div>
        </motion.div>

        {/* What I care about */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="pt-12 max-w-2xl"
        >
          <div className="quiet-rule mb-10" />

          <div className="section-label mb-5">What I care about</div>
          <div className="space-y-2.5 mb-14">
            {[
              'Work that makes people pause',
              'Saying difficult things honestly',
              'Creating emotional connection',
              'Work that feels aesthetically alive',
              'Has emotional honesty',
              'Has psychological nuance',
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5"
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 opacity-60" />
                <span className="text-[0.85rem] md:text-[0.9rem] font-light text-[var(--foreground)]">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="section-label mb-5">Currently exploring the intersection of</div>
          <p className="text-[0.75rem] font-light tracking-wide text-[var(--tertiary-foreground)] leading-[2.2]">
            {['Emotional Culture', 'Identity', 'Gender', 'Visual Narrative', 'Human Contradiction'].map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
              >
                {tag}{i < 4 && <span className="text-[var(--accent)] mx-2">&middot;</span>}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* External Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="pt-8"
        >
          <div className="quiet-rule mb-8" />
          <a
            href="https://substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-btn inline-block"
          >
            Read on Substack ↗
          </a>
        </motion.div>
      </div>
    </main>
  )
}
