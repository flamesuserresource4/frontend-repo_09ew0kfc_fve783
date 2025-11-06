import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const FreeTrial = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="free-trial" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1a44]">Book Your Free Demo Class</h2>
            <p className="mt-3 text-[#0a1a44]/70">Experience our teaching style, explore the curriculum, and get answers to all your questions. No obligation—just pure value.</p>
            <ul className="mt-6 space-y-3 text-[#0a1a44]/80">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-500"/> 30–45 minute live session</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-500"/> Personalized roadmap to your goal</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-500"/> Early-bird discounts for attendees</li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#0a1a44]/10 bg-white p-6 shadow-xl"
          >
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                <h3 className="text-xl font-semibold text-[#0a1a44]">Request Received!</h3>
                <p className="mt-1 text-[#0a1a44]/70">Our team will reach out shortly to schedule your session.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-[#0a1a44]">Full Name</label>
                    <input required type="text" className="mt-1 w-full rounded-lg border border-[#0a1a44]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0a1a44]">Email</label>
                    <div className="relative mt-1">
                      <Mail className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-[#0a1a44]/40" />
                      <input required type="email" className="w-full rounded-lg border border-[#0a1a44]/20 pl-9 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#0a1a44]">Phone</label>
                    <div className="relative mt-1">
                      <Phone className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-[#0a1a44]/40" />
                      <input required type="tel" className="w-full rounded-lg border border-[#0a1a44]/20 pl-9 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="+1 555 000 1234" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#0a1a44]">Course Interest</label>
                    <select className="mt-1 w-full rounded-lg border border-[#0a1a44]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                      <option>Forex Trading</option>
                      <option>YouTube Automation</option>
                      <option>2D Animation</option>
                      <option>Cartoon Creation</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0a1a44] px-4 py-2 font-semibold text-white hover:bg-[#0c245f]">
                  Request Free Demo <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
