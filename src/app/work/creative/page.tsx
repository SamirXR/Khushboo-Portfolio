'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CreativeDirectionPage() {
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
          <div className="section-label mb-6">03 — Creative Direction</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">Creative Direction</h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 mt-8"
        >
          <a href="https://drive.google.com/file/d/1g0DMLgxC7PihjMilEjjLxQsdzZZxlhBQ/view" target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
            <img
              src="/work-creative.gif"
              alt="Creative Direction"
              className="w-full aspect-video object-cover rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <p className="text-[0.7rem] md:text-[0.75rem] font-light tracking-wide italic text-[#a0877a] mt-3">
              PSA for dengue season, commissioned by WHO for NVBDCP
            </p>
          </a>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            Over the past decade, I have led the development of campaigns, films, publications, animations, behaviour change communication initiatives, microsites, and social impact storytelling projects for organizations including UNICEF, WHO, UN Women, government institutions, and development sector partners.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            My work sits at the intersection of strategy, storytelling, and execution. I am most often brought in when a brief needs to be transformed into an idea that people can connect with, whether that audience is a policymaker, donor, community member, young person, or the general public.
          </p>
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
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            My creative process begins with understanding the problem.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            I combine research, narrative exploration, visual references, and instinct to identify the strongest creative direction. Rather than jumping straight to outputs, I focus on finding the core idea that can hold a campaign, film, publication, or communication product together.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            I am particularly interested in making complex social issues accessible, emotionally resonant, and actionable.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-16">
            Throughout the process, I frequently test concepts informally with colleagues, friends, and relevant audiences to understand how ideas land before they reach clients or the public.
          </p>
        </motion.div>

        {/* My Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="pt-16 md:pt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">My Role</h2>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-8">
                As a creative lead, I often act as the bridge between clients, creative teams, subject experts, and field realities.
              </p>
              <p className="text-[0.85rem] font-light leading-[1.8] text-[#8a8078] mb-4">
                My responsibilities have included:
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Concept development and creative strategy',
                  'Pitch creation and client presentations',
                  'Campaign and narrative development',
                  'Stakeholder and client management',
                  'Creative problem-solving across project stages',
                  'Story and script development',
                  'Guiding visual and narrative direction',
                  'Reviewing storyboards, illustrations, and animations',
                  'Collaborating closely with art directors and designers to refine creative outputs',
                  'Leading compact multidisciplinary teams',
                  'Supervising feedback cycles and final delivery',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a0877a] shrink-0 opacity-60 mt-2" />
                    <span className="text-[0.9rem] font-light leading-[1.7] text-[#8a8078]">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078]">
                While I collaborate closely with visual specialists, my primary contribution lies in identifying the right idea, shaping its expression, and ensuring creative coherence from concept to completion.
              </p>
            </div>
            <a href="https://www.youtube.com/watch?v=nIksllQcUwg" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-sm lg:max-w-sm lg:ml-auto block group">
              <img
                src="/work-creative-detail.gif"
                alt="Creative Direction Work"
                className="w-full object-contain rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <p className="text-[0.7rem] md:text-[0.75rem] font-light tracking-wide italic text-[#a0877a] mt-3">
                Video for UN Women for Textile Industry Coalition initiative
              </p>
            </a>
          </div>
        </motion.div>

        {/* Creative Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl pt-16 md:pt-24"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Creative Strengths</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            Across projects, I am known for asking the right questions, connecting unexpected dots, finding the story beneath the information, and translating complexity into compelling narratives.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            I enjoy the early stages of the creative process most: developing concepts, building pitches, finding fresh ways to express ideas, and crafting narratives that resonate with both clients and audiences.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-16">
            My approach combines strategic thinking with curiosity, empathy, and a strong understanding of how stories move people.
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
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            I bring together narrative thinking, stakeholder management, field experience, and creative leadership to develop ideas that are both imaginative and practical.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-16">
            Whether creating a public campaign, an advocacy film, a publication, or a behaviour change initiative, my role is to find the concept that audiences will connect with and clients will champion.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
