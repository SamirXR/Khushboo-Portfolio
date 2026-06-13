'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#f8f5f1]">
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
          <div className="section-label mb-6">06 — Writing &amp; Thought Pieces</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">Writing &amp; Thought Pieces</h1>
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
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            Long-form pieces around identity, modern intimacy, emotional culture, gender, burnout, internet behavior, freedom and selfhood.
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
