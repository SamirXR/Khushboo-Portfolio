'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'

/* ─── Section Divider ─── */
function Divider() {
  return (
    <div className="section-divider py-16 md:py-20">
      <div className="divider-dot" />
    </div>
  )
}

/* ─── Navigation ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[var(--background)]/90 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <span className="font-extralight text-[0.8rem] tracking-[0.2em] uppercase opacity-0 select-none" style={{ fontFamily: 'var(--font-geist-sans)' }}>KG</span>

        <div className="hidden md:flex items-center gap-10">
          {['About', 'Work', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden nav-link mr-12"
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-[var(--background)] px-6 pb-8 pt-2"
          >
            {['About', 'Work', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="block py-3 nav-link text-xs"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

/* ─── Section Wrapper ─── */
function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`section-reveal ${isInView ? 'visible' : ''} ${className}`}
    >
      {children}
    </section>
  )
}

/* ─── Hero ─── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <div ref={ref} id="hero" className="relative min-h-screen flex flex-col justify-center">
      <motion.div style={{ y, opacity }} className="px-6 md:px-10 pt-32 pb-20 md:pb-28">
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="section-label mb-14 md:mb-20"
          >
            Creative strategist, storyteller, cultural observer
          </motion.p>

          <h1 className="hero-name">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Khushboo
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Gautam
            </motion.span>
          </h1>

          <motion.div
            className="max-w-md mt-14 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            <p className="text-[0.95rem] md:text-base font-light leading-[1.8] text-[var(--muted-foreground)]">
              Creative strategist, storyteller, and documentation expert working at the intersection of social impact and narrative.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

/* ─── About ─── */
function About() {
  return (
    <Section id="about">
      <div className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="section-label mb-12 md:mb-16">002 — About</div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-stretch">
            {/* Left */}
            <div className="lg:col-span-8 flex flex-col justify-between max-w-2xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-[1.4] mb-10">
                  I come from a background in creative strategy and communication work across social impact and culture.
                </h2>
                <div className="quiet-rule mb-8" />
                <p className="text-[0.7rem] font-mono tracking-[0.2em] uppercase text-[var(--accent)] mb-6">
                  Over the last decade, I&apos;ve worked across
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  'Communication Strategy',
                  'Campaign Ideation',
                  'Digital Storytelling',
                  'Social Impact Narratives',
                  'Advocacy',
                  'Creative Direction',
                  'Visual Language',
                  'Creative/Vendor Ecosystems',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 opacity-60" />
                    <span className="text-[0.75rem] font-light tracking-wide text-[var(--tertiary-foreground)]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Clients and collaborators */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-20 md:mt-28 max-w-3xl"
          >
            <div className="quiet-rule mb-10" />
            <div className="section-label mb-6">Clients and Collaborators</div>
            <p className="text-[0.8rem] md:text-[0.85rem] font-light leading-[2.4] text-[var(--tertiary-foreground)]">
              {[
                'UNICEF (India Office and State Offices)',
                'WHO (Country Office and SEARO)',
                'UN Women',
                'International Labour Organisation (Delhi office)',
                'Government departments (notably DDWS and NVBDCP)',
                'Social Enterprises',
                'Startups',
              ].map((client, i, arr) => (
                <span key={i}>
                  {client}{i < arr.length - 1 && <span className="text-[var(--accent)] mx-2">&middot;</span>}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

/* ─── Work ─── */
function Work() {
  const workItems = [
    {
      number: '01',
      category: 'Campaign Strategy',
      description: 'Focused on awareness, audience resonance, and cultural relevance. Building stories that move people to think, feel, and act.',
      clients: ['Binti'],
      link: '/campaign/binti' as string | undefined,
      externalLink: 'https://binti.tz/en' as string | undefined,
      image: '/work-campaign.gif',
    },
    {
      number: '02',
      category: 'Documentation',
      description: 'Capturing the essence of social impact programmes through video and written storytelling. Preserving truth and emotion in every frame.',
      clients: ['Lixil', 'BMGF', 'Ahmedabad', 'Rajasthan', 'Chhindwara'],
      link: '/work/documentation' as string | undefined,
      externalLink: undefined as string | undefined,
      image: '/work-documentation.gif',
    },
    {
      number: '03',
      category: 'Creative Direction',
      description: 'Developing concepts, story architecture, emotional tone, and guiding visual language for ideas that need both strategy and feeling.',
      clients: ['UN Women', 'Dengue'],
      link: '/work/creative' as string | undefined,
      externalLink: undefined as string | undefined,
      image: '/work-creative.gif',
    },
    {
      number: '04',
      category: 'Brand & Voice',
      description: 'Shaping how organisations speak, sound, and show up. Naming, tone, language systems, and verbal identity for brands that want to feel alive, not automated.',
      clients: [] as string[],
      link: '/work/brand' as string | undefined,
      externalLink: undefined as string | undefined,
      image: '/work-brand-v3.png',
    },
    {
      number: '05',
      category: 'Uncurtained Windows',
      description: 'Photography. Visual essays. Poems. Exhibition ideas. Short film scripts. Half-finished concepts. Pitches that never left the drafts folder.',
      clients: [] as string[],
      link: '/work/visual' as string | undefined,
      externalLink: undefined as string | undefined,
      image: '/work-visual.png',
    },
    {
      number: '06',
      category: 'Shapes of Feelings',
      description: 'Writings and thought pieces on belonging, becoming, and the ordinary moments that quietly reveal us.',
      clients: ['Substack'],
      link: '/work/writing' as string | undefined,
      externalLink: undefined as string | undefined,
      image: '/work-writing.png',
    },
  ]

  return (
    <Section id="work">
      <div className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="section-label mb-12 md:mb-16">003 — Work</div>

          <div className="mb-14 md:mb-18">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-tight mb-6">Work</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['Social impact communication', 'Digital campaigns', 'Advocacy'].map((area, i) => (
                <span key={i} className="work-area-item">{area}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10px' }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="work-card-v2 group">
                  {item.link && item.link.startsWith('http') ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <div className="relative overflow-hidden rounded-sm mb-5">
                        <img
                          src={item.image}
                          alt={item.category}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    </a>
                  ) : (
                    <Link href={item.link || '#'} className={item.link ? 'cursor-pointer' : 'cursor-default'}>
                      <div className="relative overflow-hidden rounded-sm mb-5">
                        <img
                          src={item.image}
                          alt={item.category}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    </Link>
                  )}

                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="section-label shrink-0">{item.number}</span>
                    <h3 className="work-heading transition-colors duration-500">{item.category}</h3>
                  </div>

                  <p className="text-[0.8rem] font-light leading-[1.7] text-[var(--muted-foreground)] mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center">
                    {item.link && (
                      <React.Fragment key="see-more">
                        {item.link.startsWith('http') ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="warm-tag hover:text-[var(--foreground)] cursor-pointer">See more ↗</a>
                        ) : (
                          <Link href={item.link} className="warm-tag hover:text-[var(--foreground)] cursor-pointer">See more ↗</Link>
                        )}
                      </React.Fragment>
                    )}
                    {item.externalLink && (
                      <React.Fragment key="external">
                        <span className="text-[var(--accent)] mx-2 text-[0.55rem]">&middot;</span>
                        <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="warm-tag hover:text-[var(--foreground)] cursor-pointer">{new URL(item.externalLink).hostname.replace('www.', '')} ↗</a>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ─── Contact ─── */
function Contact() {
  return (
    <Section id="contact">
      <div className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto">
          <div className="section-label mb-12 md:mb-16">004 — Contact</div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight mb-8">
            Let&apos;s talk.
          </h2>

          <p className="text-[0.85rem] font-light leading-[1.8] max-w-sm text-[var(--muted-foreground)] mb-14">
            For collaborations, creative projects, strategy work, or conversations.
          </p>

          <div className="max-w-md space-y-5">
            <a href="mailto:khushboo.workspace33@gmail.com" className="flex items-center gap-4 group">
              <svg className="w-5 h-5 text-[var(--accent)] group-hover:text-[var(--foreground)] transition-colors duration-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13L2 4" />
              </svg>
              <span className="contact-link">khushboo.workspace33@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/khushboogautam-1548847b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <svg className="w-5 h-5 text-[var(--accent)] group-hover:text-[var(--foreground)] transition-colors duration-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="contact-link">LinkedIn</span>
            </a>
          </div>

          <div className="mt-20 quiet-rule mb-6" />
          <p className="font-mono text-[0.5rem] tracking-[0.3em] uppercase text-[var(--accent)]">
            Less interested in perfection; more interested in thoughtfulness
          </p>
        </div>
      </div>
    </Section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-[var(--rule)]">
      <div className="max-w-[1100px] mx-auto flex items-center justify-center">
        <span className="font-mono text-[0.5rem] tracking-[0.25em] uppercase text-[var(--accent)]">
          Khushboo Gautam &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Work />
      <Divider />
      <Contact />
      <Footer />
    </main>
  )
}
