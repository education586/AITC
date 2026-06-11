import { motion } from 'motion/react';
import { MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:col-span-6 lg:pt-8"
          >
            <div className="space-y-8">
              {/* Campus Address */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-red/[0.04] rounded-2xl border border-brand-red flex items-center justify-center shrink-0 text-brand-red shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-extrabold text-slate-400 tracking-wider uppercase mb-1 font-sans">CAMPUS ADDRESS</span>
                  <span className="text-[18px] font-bold text-brand-dark leading-snug font-display">
                    Level 9, Collin’s Street, Melbourne, VIC 3000
                  </span>
                </div>
              </div>

              {/* Workshop Address */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-red/[0.04] rounded-2xl border border-brand-red flex items-center justify-center shrink-0 text-brand-red shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-extrabold text-slate-400 tracking-wider uppercase mb-1 font-sans">WORKSHOP ADDRESS</span>
                  <span className="text-[18px] font-bold text-brand-dark leading-snug font-display">
                    101 Davies Avenue, Sunshine North, VIC 3020
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-red/[0.04] rounded-2xl border border-brand-red flex items-center justify-center shrink-0 text-brand-red shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[11px] font-extrabold text-slate-400 tracking-wider uppercase mb-1 font-sans">EMAIL</span>
                  <a href="mailto:learnataitc@gmail.com" className="text-[18px] font-bold text-brand-dark hover:text-brand-red transition-colors leading-snug font-display">
                    learnataitc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 bg-white rounded-[2.5rem] p-8 sm:p-12 border border-gray-100 shadow-[0_20px_50px_rgba(148,163,184,0.12)] w-full max-w-xl lg:ml-auto"
          >
            <form action="#" method="POST" className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullname" className="block text-[11px] font-extrabold text-slate-500 tracking-widest uppercase mb-2 font-sans">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="block w-full rounded-2xl border border-gray-150/70 py-4 px-5 text-brand-dark placeholder:text-slate-400/85 focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-sans outline-none transition-all"
                    placeholder="full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-extrabold text-slate-500 tracking-widest uppercase mb-2 font-sans">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-2xl border border-gray-150/70 py-4 px-5 text-brand-dark placeholder:text-slate-400/85 focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-sans outline-none transition-all"
                    placeholder="email address"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[11px] font-extrabold text-slate-500 tracking-widest uppercase mb-2 font-sans">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full rounded-2xl border border-gray-150/70 py-4 px-5 text-brand-dark placeholder:text-slate-400/85 focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-sans outline-none transition-all"
                  placeholder="Inquiry about Carpentry III"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-extrabold text-slate-500 tracking-widest uppercase mb-2 font-sans">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-2xl border border-gray-150/70 py-4 px-5 text-brand-dark placeholder:text-slate-400/85 focus:border-brand-red focus:ring-1 focus:ring-brand-red text-sm font-sans outline-none min-h-[140px] resize-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-dark text-white py-4 px-8 rounded-2xl text-[13px] font-extrabold tracking-widest uppercase transition-all shadow-[0_4px_14px_rgba(210,33,41,0.25)] hover:shadow-[0_6px_20px_rgba(210,33,41,0.35)] mt-3 duration-200"
              >
                SEND MESSAGE
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
