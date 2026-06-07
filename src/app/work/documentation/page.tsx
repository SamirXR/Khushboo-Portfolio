'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DocumentationPage() {
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
          <div className="section-label mb-6">02 — Documentation</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">Documentation &amp; Storytelling for Social Impact</h1>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 mt-8"
        >
          <a href="https://drive.google.com/file/d/1auLyxW2RBea_F1_6eI9yd1QoR5JDc7zb/view" target="_blank" rel="noopener noreferrer" className="block cursor-pointer group">
            <img
              src="/work-documentation.gif"
              alt="Documentation & Storytelling"
              className="w-full aspect-video object-cover rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </a>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Overview</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            For over eight years, I have worked across India documenting social impact programmes for organizations including UNICEF, WHO, and UN Women.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            My work has spanned both written and audiovisual documentation across sectors such as public health, gender, education, community development, and behaviour change communication.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-16">
            What began as documentation evolved into end-to-end narrative building: translating complex grassroots realities into stories, films, reports, and communication products that institutions could use for advocacy, visibility, training, and public engagement.
          </p>
        </motion.div>

        {/* Field-Based Storytelling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Field-Based Storytelling</h2>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
                A large part of my work involved extensive field travel and on-ground coordination across diverse geographies and communities.
              </p>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
                Beyond capturing stories, I was also involved in pretesting communication materials directly with communities to understand how messaging was being received in real contexts. These insights often informed improvements in campaign products, narrative approaches, and visual communication strategies.
              </p>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078]">
                This process strengthened my ability to balance institutional objectives with emotional authenticity and cultural sensitivity.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-sm lg:max-w-sm lg:ml-auto">
              <img
                src="/work-fieldstorytelling.gif"
                alt="Field-Based Storytelling"
                className="w-full object-contain rounded-sm"
              />
            </div>
          </div>
        </motion.div>

        {/* End-to-End Documentation Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="pt-16 md:pt-24"
        >
          {/* Video Documentation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">End-to-End Documentation Leadership</h2>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-8">
                Over the years, I have independently handled multiple stages of the documentation pipeline, from concept development to final delivery.
              </p>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-4">
                My work included:
              </p>
              <ul className="space-y-3">
                {[
                  'Scriptwriting and narrative structuring',
                  'Interviewing stakeholders across levels, from district collectors and government officials to frontline workers and community members',
                  'Client communication and stakeholder management',
                  'Shoot planning and field logistics',
                  'Vendor and production coordination',
                  'On-ground finance management',
                  'Leading compact creative teams in high-pressure field environments',
                  'Maintaining creative continuity during fast-moving shoots',
                  'Supervising editing and post-production',
                  'Managing feedback cycles and delivering final films',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a0877a] shrink-0 opacity-60 mt-2" />
                    <span className="text-[0.9rem] font-light leading-[1.7] text-[#8a8078]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-sm lg:max-w-sm lg:ml-auto">
              <img
                src="/work-documentation-video.gif"
                alt="Video Documentation"
                className="w-full object-contain rounded-sm"
              />
            </div>
          </div>

          {/* Written Documentation */}
          <div className="mb-16 pt-12 md:pt-16">
            <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-4">
              Alongside films, I also worked extensively on written documentation and publication projects. This included:
            </p>
            <ul className="space-y-3">
              {[
                'Writing impact stories and human-interest narratives',
                'Documentation reports and communication material',
                'Photography and visual storytelling',
                'Overseeing illustration and publication design',
                'Coordinating directly with clients and creative vendors to ensure narrative and visual consistency',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a0877a] shrink-0 opacity-60 mt-2" />
                  <span className="text-[0.9rem] font-light leading-[1.7] text-[#8a8078]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl pt-16 md:pt-24"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Approach</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            My approach to documentation combines journalistic observation, creative storytelling, and production management.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-6">
            I am particularly drawn to work that requires navigating complexity: building trust with communities, translating field realities into compelling narratives, and managing creative execution without losing emotional nuance.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[#8a8078] mb-8">
            Across projects, my role often became a bridge between institutions, creative teams, and the people whose stories were being told.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
