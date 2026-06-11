import { motion } from 'motion/react';
import { Monitor, Award, BookOpen, Send, User } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-[#FAF9F6] overflow-hidden">
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 flex items-center min-h-[85vh]">
        {/* Background glow */}
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-yellow-50/60 rounded-full blur-[100px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/4"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mb-6">
                <div className="absolute -left-12 top-0 w-3 h-3 bg-[#FC5F5F] rounded-full hidden sm:block"></div>
                <h1 className="font-display text-5xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05] text-[#1A1A1A]">
                  Build Your Future, Brick by Brick.
                </h1>
              </div>
              
              <p className="text-base sm:text-lg leading-relaxed text-gray-500 mb-10 font-sans max-w-lg">
                AITC equips students with hands-on skills, experienced trainers, and industry-aligned qualifications to launch a confident trade career in Australia.
              </p>
              
              {/* Search Bar */}
             
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block ml-auto w-full max-w-[480px]"
            >
              {/* Decorative yellow squiggle */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-12 -left-8 text-[#FFBE00] z-20">
                <path d="M5 25L15 5L25 30L35 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
              {/* Organic shape image container */}
              <div className="relative w-full aspect-[4/4.8] shadow-2xl z-10 bg-white" style={{ borderRadius: '35% 65% 55% 45% / 45% 40% 60% 55%' }}>
                <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: 'inherit' }}>
                  <img 
                    src="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemvhmbykqfl2hwgghibglifp3zurfmopk7u6yszdojlnndkn7hdm" 
                    alt="image" 
                    className="w-full h-full object-cover scale-[1.1] transform translate-y-4"
                  />
                  {/* Subtle interior glow/shadow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.05)] pointer-events-none" style={{ borderRadius: 'inherit' }}></div>
                  {/* Bottom fade into background color */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Feature band */}
      <section className="border-b border-gray-100 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { icon: Monitor, title: 'Trade Foundations', desc: 'Master bricklaying, blocklaying, and masonry construction in real workplace environments using industry-standard tools and materials.' },
                { icon: Award, title: 'Build Smart', desc: 'Lead construction projects with confidence — covering planning, risk management, contractor selection, and site supervision.' },
                { icon: BookOpen, title: 'Lead & Grow', desc: 'Build senior-level skills in organisational learning, strategic leadership, and workforce development across any industry.' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded bg-gray-50 border border-gray-100 shrink-0">
                    <feature.icon className="w-5 h-5 text-brand-red" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[24px] text-brand-dark mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-500 font-sans text-[16px] leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
           </div>
         </div>
      </section>
    </div>
  );
}
