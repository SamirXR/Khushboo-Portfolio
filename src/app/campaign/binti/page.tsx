'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
}

export default function BintiCampaign() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Back link */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 pt-8">
        <Link href="/#work" className="nav-link inline-block">&larr; Back to Work</Link>
      </div>

      {/* Hero */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <motion.div {...fadeUp}>
          <div className="section-label mb-6">01 — Campaign Strategy</div>
          <h1 className="text-3xl md:text-5xl font-extralight tracking-tight mb-4">Binti</h1>
          <p className="text-lg md:text-xl font-light tracking-tight text-[var(--muted-foreground)] mb-8">
            Giving Every Girl a Chance to Grow
          </p>
        </motion.div>

        {/* Campaign Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <img
            src="/binti.png"
            alt="Binti Campaign"
            className="w-full aspect-video object-cover rounded-sm"
          />
        </motion.div>

        {/* Campaign Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Campaign Overview</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-6">
            In Tanzania, girls can legally be married as young as 14, often forcing them to leave school and limiting their health, safety, and future opportunities. UNICEF Tanzania wanted a public campaign capable of shifting the social narrative around child marriage and building widespread public support for change.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-16">
            I led the development of the campaign concept, presented multiple creative directions to the client, and ultimately pitched Binti — the idea that was selected for execution.
          </p>
        </motion.div>

        {/* The Idea */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">The Idea</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-6">
            I created Binti — meaning daughter in Swahili — as a symbolic character representing every school-going girl in Tanzania.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-6">
            The intention was to move the conversation away from statistics and toward emotional connection. Binti embodied possibility: a girl with dreams, education, curiosity, and a future still unfolding.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-16">
            Rather than framing girls as passive victims, the campaign positioned them as individuals whose potential deserved protection and investment.
          </p>
        </motion.div>

        {/* My Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">My Role</h2>
          <ul className="space-y-3 mb-16">
            {[
              'Developed and pitched the campaign concept to UNICEF Tanzania',
              'Presented multiple creative routes, with Binti selected as the lead direction',
              'Served as the primary point of contact between the agency and client throughout the project',
              'Led the design and animation teams during execution',
              'Oversaw the visual storytelling, character development, and creative consistency across campaign assets',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 opacity-60 mt-2" />
                <span className="text-[0.9rem] font-light leading-[1.7] text-[var(--muted-foreground)]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Design & Narrative Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Design &amp; Narrative Approach</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-8">
            A major focus of the campaign was ensuring Binti felt culturally authentic and instantly recognizable to Tanzanian audiences.
          </p>

          <div className="space-y-8 mb-16">
            <div>
              <h3 className="text-[0.85rem] font-normal tracking-tight mb-3">Cultural Identity Through Design</h3>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)]">
                Binti&apos;s clothing palette and ribbon were inspired by the Tanzanian national flag, connecting the character to national identity and collective responsibility.
              </p>
            </div>
            <div>
              <h3 className="text-[0.85rem] font-normal tracking-tight mb-3">Symbolism</h3>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)]">
                Her school satchel became a recurring visual symbol of education, aspiration, and the future child marriage interrupts.
              </p>
            </div>
            <div>
              <h3 className="text-[0.85rem] font-normal tracking-tight mb-3">Visual Language</h3>
              <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)]">
                The illustrations, environments, and storytelling motifs were designed to reflect everyday Tanzanian life, creating familiarity and emotional resonance across audiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Execution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Execution</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-6">
            The campaign launched through an animated film supported by a dedicated microsite experience.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-6">
            The microsite was designed as an immersive storytelling journey that introduced audiences to Binti&apos;s world before inviting them to pledge support against child marriage.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-16">
            I worked closely with the design and animation teams to ensure the emotional tone and narrative remained consistent across all touchpoints.
          </p>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6">Impact</h2>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-8">
            The campaign gained significant traction across Tanzania within months of launch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="border-t border-[var(--border)] pt-4">
              <p className="text-2xl md:text-3xl font-extralight tracking-tight mb-1">100,000+</p>
              <p className="text-[0.7rem] font-mono tracking-[0.15em] uppercase text-[var(--accent)]">Pledges on microsite</p>
            </div>
            <div className="border-t border-[var(--border)] pt-4">
              <p className="text-2xl md:text-3xl font-extralight tracking-tight mb-1">Nationwide</p>
              <p className="text-[0.7rem] font-mono tracking-[0.15em] uppercase text-[var(--accent)]">Social &amp; community reach</p>
            </div>
            <div className="border-t border-[var(--border)] pt-4">
              <p className="text-2xl md:text-3xl font-extralight tracking-tight mb-1">Open-source</p>
              <p className="text-[0.7rem] font-mono tracking-[0.15em] uppercase text-[var(--accent)]">Binti became a participatory initiative</p>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              'The microsite crossed 100,000 pledges',
              'The campaign spread widely through social and community engagement',
              'UNICEF Tanzania later made Binti an open-source initiative, enabling NGOs, educators, influencers, and community leaders to create their own advocacy materials using the character',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 opacity-60 mt-2" />
                <span className="text-[0.9rem] font-light leading-[1.7] text-[var(--muted-foreground)]">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-6">
            What began as a campaign evolved into a broader participatory movement against child marriage.
          </p>
          <p className="text-[0.9rem] font-light leading-[1.8] text-[var(--muted-foreground)] mb-12">
            The Binti campaign, led on-ground by UNICEF Tanzania, was later selected for the Inspire Awards 2024.
          </p>
        </motion.div>

        {/* Visit link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="quiet-rule mb-8" />
          <a
            href="https://binti.tz/en"
            target="_blank"
            rel="noopener noreferrer"
            className="soft-btn inline-block"
          >
            Visit binti.tz ↗
          </a>
        </motion.div>
      </div>
    </main>
  )
}
