'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BrandVoicePage() {
  return (
    <main className="min-h-screen bg-[transparent]">
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
          <div className="section-label mb-6">06 — Brand &amp; Voice</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">Brand &amp; Voice</h1>
          <p className="text-lg md:text-xl font-light tracking-tight text-[#f0f0f0] mb-8">
            Shaping how organisations speak, sound, and show up.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 mt-8"
        >
          <img
            src="/work-brand-v3.png"
            alt="Brand & Voice"
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
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            Over the years, I have helped campaigns, social enterprises, NGOs, startups, and public programmes find the language that connects their intentions with their audiences.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            My work spans naming, messaging, campaign language, storytelling, and verbal identity. Whether developing a campaign title, a programme name, a narrative framework, or a film script, I focus on creating language that feels human, memorable, and easy to connect with.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-16">
            I am particularly interested in translating complexity into clarity, turning technical, academic, policy-driven, or institutional communication into stories and messages that people can immediately understand and relate to.
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">What I Do</h2>
          <p className="text-[0.85rem] font-light leading-[1.8] text-[#f0f0f0] mb-4">
            My work has included:
          </p>
          <ul className="space-y-3 mb-16">
            {[
              'Naming campaigns, initiatives, organisations, publications, and startups',
              'Developing campaign slogans and key messaging',
              'Creating verbal frameworks and narrative structures',
              'Writing scripts, stories, reports, and communication materials',
              'Translating technical information into audience-friendly language',
              'Building language systems that remain consistent across touchpoints',
              'Collaborating with designers and creative teams to align verbal and visual expression',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4ea4] shrink-0 opacity-60 mt-2" />
                <span className="text-[0.9rem] font-light leading-[1.7] text-[#f0f0f0]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* How I Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">How I Work</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            My process combines research, cultural observation, language exploration, metaphor, and instinct.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            I often begin by understanding the audience, context, and communication challenge before exploring word associations, narratives, cultural references, and alternative ways of framing an idea.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            The goal is not simply to make something sound good. It is to make it understandable, memorable, and emotionally resonant.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-16">
            I pay particular attention to the gap between what organisations want to say and what audiences actually hear.
          </p>
        </motion.div>

        {/* Turning Complexity into Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Turning Complexity into Connection</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            A significant part of my work has involved translating highly technical content into accessible narratives.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            One example was the development of a training film based on a nearly 200-page technical document on Antara, a contraceptive programme. Beginning with field research at local health centres, I drew inspiration from real healthcare workers, community dynamics, and lived experiences to create a story that felt authentic to rural Rajasthan while retaining the accuracy of the source material.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-16">
            The resulting film transformed dense technical information into a relatable learning experience for frontline health workers.
          </p>
        </motion.div>

        {/* What I Bring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">What I Bring</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-6">
            I bring together storytelling, strategy, cultural sensitivity, and linguistic clarity to help organisations communicate with greater relevance and impact.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#f0f0f0] mb-16">
            Whether naming a campaign, shaping a narrative, or developing a messaging framework, my goal is always the same: to create language that people remember, understand, and trust.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
