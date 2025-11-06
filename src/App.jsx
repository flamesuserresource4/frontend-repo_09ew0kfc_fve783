import React from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import FreeTrial from './components/FreeTrial';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-[#0a1a44]/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between text-white">
        <a href="#home" className="font-extrabold text-lg">SkillBoost <span className="text-yellow-400">Academy</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-yellow-300">About Us</a>
          <a href="#courses" className="hover:text-yellow-300">Courses</a>
          <a href="#free-trial" className="hover:text-yellow-300">Free Trial</a>
          <a href="#reviews" className="hover:text-yellow-300">Student Reviews</a>
          <a href="#contact" className="rounded-md bg-yellow-400 px-3 py-1.5 font-semibold text-[#0a1a44] hover:bg-yellow-300">Contact</a>
        </nav>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a44]">Learn. Build. Earn.</h2>
          <p className="mt-4 text-[#0a1a44]/80">
            We create programs that turn beginners into confident earners. Our approach blends practical projects, step-by-step guidance, and mentor support—so you not only learn faster, you start monetizing sooner.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { label: 'Completion Rate', value: '92%' },
              { label: 'Avg. Rating', value: '4.9/5' },
              { label: 'Countries', value: '40+' },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-[#0a1a44]/10 p-4 text-center">
                <div className="text-2xl font-extrabold text-[#0a1a44]">{s.value}</div>
                <div className="text-sm text-[#0a1a44]/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-yellow-50 to-white p-8 border border-yellow-100"
        >
          <h3 className="text-xl font-bold text-[#0a1a44]">What makes us different?</h3>
          <ul className="mt-4 space-y-3 text-[#0a1a44]/80">
            <li>• Action-first lessons that build portfolio-ready projects</li>
            <li>• Step-by-step frameworks for income generation</li>
            <li>• Templates, checklists, and real-world case studies</li>
            <li>• Supportive community and mentor feedback</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Courses />
        <FreeTrial />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
