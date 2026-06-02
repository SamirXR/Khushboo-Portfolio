'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BintiCampaign() {
  return (
    <main className="min-h-screen bg-[#f8f5f1]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8">
        <Link href="/#work" className="nav-link inline-block">&larr; Back to Work</Link>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="section-label mb-6">01 — Campaign Strategy</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-8">Binti</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <img
            src="/binti.png"
            alt="Binti Campaign"
            className="w-full aspect-video object-cover rounded-sm"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Campaign Overview</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            Binti is a groundbreaking campaign dedicated to menstrual dignity and education in Tanzania. The campaign works to break taboos around menstruation, ensure access to sanitary products, and empower women and girls through education and advocacy.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-8">
            Through community-driven approaches and strategic partnerships, Binti has created a movement that transforms how communities understand and support menstrual health, creating lasting change in attitudes and access.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="border-t border-[#d9d0c7] pt-4">
              <p className="text-2xl md:text-3xl font-extralight tracking-tight mb-1">153,987+</p>
              <p className="text-[0.7rem] font-mono tracking-[0.15em] uppercase text-[#a0877a]">Pledge signers</p>
            </div>
            <div className="border-t border-[#d9d0c7] pt-4">
              <p className="text-2xl md:text-3xl font-extralight tracking-tight mb-1">#2</p>
              <p className="text-[0.7rem] font-mono tracking-[0.15em] uppercase text-[#a0877a]">Tanzania ranking for menstrual hygiene in East Africa</p>
            </div>
            <div className="border-t border-[#d9d0c7] pt-4">
              <p className="text-2xl md:text-3xl font-extralight tracking-tight mb-1">Nationwide</p>
              <p className="text-[0.7rem] font-mono tracking-[0.15em] uppercase text-[#a0877a]">Campaign reach</p>
            </div>
          </div>

          <div className="mb-12">
            <div className="section-label mb-4">Role</div>
            <p className="text-[0.85rem] font-light leading-[1.8] text-[#8a8078]">
              Creative strategy and campaign development — shaping the narrative, visual identity, and strategic direction to build awareness and drive meaningful engagement around menstrual dignity in Tanzania.
            </p>
          </div>

          <a
            href="https://binti.tz/en"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-btn inline-block mt-4"
          >
            Visit binti.tz ↗
          </a>
        </motion.div>
      </div>
    </main>
  )
}
