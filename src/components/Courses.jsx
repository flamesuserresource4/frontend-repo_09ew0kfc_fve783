import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    slug: 'forex-trading',
    title: 'Forex Trading Mastery',
    intro: 'Trade the world’s biggest financial market with confidence. Learn chart patterns, risk management, and profitable systems from scratch.',
    benefits: ['Live market analysis', 'Risk & money management', 'Scalable strategies', 'Community support'],
  },
  {
    slug: 'youtube-automation',
    title: 'YouTube Automation Blueprint',
    intro: 'Launch faceless channels that generate revenue 24/7. From niche research to outsourcing and monetization—step-by-step.',
    benefits: ['Niche & content systems', 'AI-assisted workflows', 'Monetization roadmap', 'Hiring templates'],
  },
  {
    slug: '2d-animation',
    title: '2D Animation Essentials',
    intro: 'Design dynamic scenes and motion graphics using industry-standard tools. Build a portfolio that lands clients and jobs.',
    benefits: ['Project-based learning', 'Pro workflow shortcuts', 'Export & delivery best practices', 'Portfolio building'],
  },
  {
    slug: 'cartoon-creation',
    title: 'Cartoon Creation Studio',
    intro: 'Create lovable characters from sketch to screen. Master storytelling, expression, and production-ready assets.',
    benefits: ['Character design', 'Storyboarding', 'Rigging basics', 'Production pipeline'],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a44]">Popular Programs</h2>
          <p className="mt-3 text-[#0a1a44]/70">Beginner-friendly, action-focused, and designed to help you earn online with real skills.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((c, idx) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-[#0a1a44]/10 bg-gradient-to-br from-white to-white p-6 shadow-lg shadow-[#0a1a44]/5"
            >
              <h3 className="text-xl font-bold text-[#0a1a44]">{c.title}</h3>
              <p className="mt-2 text-[#0a1a44]/70">{c.intro}</p>
              <ul className="mt-4 space-y-2">
                {c.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-[#0a1a44]/80">
                    <CheckCircle2 className="h-4 w-4 text-yellow-500" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href={`#/courses/${c.slug}`} className="inline-flex items-center gap-2 rounded-lg bg-[#0a1a44] px-4 py-2 font-semibold text-white transition hover:bg-[#0c245f]">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
