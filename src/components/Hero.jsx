import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Award, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-[#0a1a44] via-[#0a1a44] to-[#0c245f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6qUQe1uQm4uI7P4G/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.12),rgba(10,26,68,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-28 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-gold-300 ring-1 ring-white/20">
            <Shield className="h-4 w-4 text-yellow-300" /> Trusted by 10,000+ learners
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            SkillBoost Academy
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Master In-Demand Skills. Earn With Confidence.</span>
          </h1>
          <p className="max-w-xl text-lg text-white/85">
            Premium, beginner-friendly programs in Forex Trading, YouTube Automation, 2D Animation, and Cartoon Creation.
            Learn step-by-step, build real projects, and unlock new income streams in weeks — not years.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#free-trial" className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-[#0a1a44] shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-300">
              <PlayCircle className="h-5 w-5" /> Free Demo Class
            </a>
            <a href="#courses" className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              <Rocket className="h-5 w-5" /> Explore Courses
            </a>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 max-w-lg">
            <div className="rounded-lg bg-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-yellow-300">4</p>
              <p className="text-sm text-white/80">Premium Tracks</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-yellow-300">100% </p>
              <p className="text-sm text-white/80">Beginner-Friendly</p>
            </div>
            <div className="rounded-lg bg-white/10 p-4 text-center">
              <p className="text-2xl font-bold text-yellow-300">Mentor</p>
              <p className="text-sm text-white/80">Support</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award className="h-5 w-5 text-yellow-300" />, title: 'Forex Trading', desc: 'Smart risk, real strategies, live analysis.' },
                { icon: <Award className="h-5 w-5 text-yellow-300" />, title: 'YouTube Automation', desc: 'Go faceless, scale content, monetize fast.' },
                { icon: <Award className="h-5 w-5 text-yellow-300" />, title: '2D Animation', desc: 'Create stunning visuals with industry tools.' },
                { icon: <Award className="h-5 w-5 text-yellow-300" />, title: 'Cartoon Creation', desc: 'Design characters that audiences love.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-[#0a1a44]/40 p-4 ring-1 ring-white/10">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
