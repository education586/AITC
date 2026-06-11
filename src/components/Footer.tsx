import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center mb-6">
              <img 
                src="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafkreieyfiylspsgl2l5rj2ukxujc55ge4ayzijxkzuttyb6j2lpcxhq3u" 
                alt="AITC - Australian International Trades College Logo" 
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[14px] text-gray-400 font-sans pr-12 leading-relaxed max-w-sm">
              Australian International Trades College is a specialist institute delivering expert, industry-aligned training focused exclusively on the art and science of manual trades.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all">
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[16px] font-bold text-white font-display mb-6 tracking-widest uppercase">Quick Links</h3>
            <ul className="space-y-4 text-[15px] text-gray-400 font-sans">
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/student-help-hub" className="hover:text-white transition-colors">Student Support</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/forms" className="hover:text-white transition-colors">Pdf Forms</Link></li>
              <li><Link to="/policies" className="hover:text-white transition-colors">Pdf Policies</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[16px] font-bold text-white font-display mb-6 tracking-widest uppercase">Qualifications</h3>
            <ul className="space-y-4 text-[15px] text-gray-400 font-sans flex flex-col gap-3">
              <li><Link to="/courses/CPC33020" className="hover:text-white transition-colors block w-full">CPC33020 – Certificate III in Bricklaying and Blocklaying</Link></li>
              <li><Link to="/courses/CPC50220" className="hover:text-white transition-colors block w-full">CPC50220 – Diploma of Building and Construction (Building)</Link></li>
              <li><Link to="/courses/BSB80120" className="hover:text-white transition-colors block w-full">BSB80120 – Graduate Diploma of Management (Learning)</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[14px] uppercase tracking-widest text-gray-400 font-sans">
          <div className="flex flex-col gap-2 relative">
            <p className="font-bold text-white tracking-widest">© 2026 AITC. ESTABLISHMENT PHASE.</p>
            <p className="font-bold text-white tracking-widest">DEDICATED TO TRADES EXCELLENCE.</p>
            <p className="mt-4 max-w-xl text-gray-300 tracking-normal normal-case leading-relaxed font-sans">We acknowledge Aboriginal and Torres Strait Islander peoples as the First Australians and Traditional Custodians of the lands where we live, learn and work.</p>
          </div>
          <div className="flex flex-wrap gap-6 font-bold text-gray-400">
            <span>RTO: AWAITED</span>
            <span>ABN: 30 669 995 591</span>
            <span>CRICOS: AWAITED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
