import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-red font-bold tracking-widest text-[12px] uppercase block mb-3">Get In Touch</span>
          <h1 className="text-[49px] font-extrabold tracking-tight mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl text-[16px] font-sans leading-relaxed">
            Have questions about our courses, entry requirements, or admissions? Reach out to our Melbourne support team today.
          </p>
        </div>
      </section>
      <Contact />
    </main>
  );
}
