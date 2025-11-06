import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const data = [
  {
    name: 'Ayesha M.',
    role: 'YouTube Automation Graduate',
    quote: 'My faceless channel hit 10k subscribers in 6 weeks. The systems and templates saved me months of trial and error.',
  },
  {
    name: 'Daniel K.',
    role: 'Forex Trader',
    quote: 'Finally learned risk the right way. I now follow a plan and withdraw profits consistently every month.',
  },
  {
    name: 'Rina S.',
    role: '2D Animator',
    quote: 'The project-based lessons helped me build a portfolio that landed my first freelance clients.',
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-[#0a1a44] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Student Success Stories</h2>
          <p className="mt-3 text-white/80">Real transformations from real learners worldwide.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {data.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/70">— {t.name}, {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
