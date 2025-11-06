import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#071432] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-extrabold">SkillBoost Academy</h3>
          <p className="mt-2 text-white/80">We help creators and professionals master high-income skills to build sustainable digital incomes.</p>
        </div>
        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@skillboost.academy</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Remote • Worldwide</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#courses" className="hover:text-yellow-400">Courses</a></li>
            <li><a href="#free-trial" className="hover:text-yellow-400">Free Trial</a></li>
            <li><a href="#reviews" className="hover:text-yellow-400">Student Reviews</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">© {new Date().getFullYear()} SkillBoost Academy. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
