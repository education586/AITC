import { motion } from 'motion/react';
import { Award, Users, Heart, LayoutGrid, CheckCircle2, Target, Calendar } from 'lucide-react';

export default function AboutPage() {
  const milestones = [
    { year: 'Industry-Experienced', title: 'Qualified Trainers', desc: 'Every instructor at AITC brings extensive real-world industry experience to the classroom.' },
    { year: 'Practical Learning', title: '80% Hands-On Ratio', desc: 'Our workshops are built to replicate actual site conditions, giving you genuine muscle memory.' },
    { year: 'Licensed Path', title: 'Accredited Qualification', desc: 'Graduates receive nationally recognized certificates, simplifying the path to professional licensing.' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-red font-bold tracking-widest text-[12px] uppercase block mb-3">Who We Are</span>
          <h1 className="text-[49px] font-extrabold tracking-tight mb-4">About AITC</h1>
          <p className="text-gray-300 max-w-2xl text-[16px] font-sans leading-relaxed">
            The Australian International Trades College (AITC) is dedicated to elevating vocational education standards, combining traditional excellence with modern digital learning.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[30px] font-extrabold text-brand-dark mb-6 tracking-tight">Our Mission & Training Philosophy</h2>
              <p className="text-gray-600 font-sans text-[16px] leading-relaxed">
                At AITC, we believe that high-quality tradesmanship is key to sustainable communities. We bridge the gap between technical blueprint theory and practical, self-assured performance on the construction site.
              </p>
              <br />
              <div className="space-y-4">
                {[
                  'Accredited, industry-aligned curriculums',
                  'Fostering safe, collaborative, and inclusive learning workspaces',
                  'Equipping future trade leaders with business and management intelligence'
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                    <p className="text-gray-700 font-sans text-[16px]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                alt="AITC Training Facility" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-brand-dark text-[24px] font-extrabold tracking-tight mb-4">Why Australia Trusts AITC</h2>
            <p className="text-gray-500 font-sans text-[16px]">We prepare you for the current and future demands of real-world trade careers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="border-l border-gray-200 pl-6 relative">
                <div className="absolute top-0 left-0 -translate-x-[1px] h-8 w-[2px] bg-brand-red"></div>
                <span className="text-brand-red font-bold text-[12px] uppercase block mb-2">{milestone.year}</span>
                <h4 className="font-bold text-[24px] text-brand-dark mb-2 font-display">{milestone.title}</h4>
                <p className="text-[16px] text-gray-500 font-sans leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
