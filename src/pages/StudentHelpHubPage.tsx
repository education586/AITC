import ResourceGrid from '../components/ResourceGrid';

export default function StudentHelpHubPage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-brand-red font-bold tracking-widest text-[12px] uppercase block mb-3">Student Support</span>
          <h1 className="text-[49px] font-extrabold tracking-tight mb-4">Student Help Hub</h1>
          <p className="text-gray-300 max-w-2xl text-[16px] font-sans leading-relaxed">
            Your success and wellbeing are our top priorities. Find academic tutoring, career services, wellbeing counselors, and technical support resources all in one place.
          </p>
        </div>
      </section>

      {/* Interactive Resources Grid Section */}
      <section className="bg-slate-50 border-b border-slate-100">
        <ResourceGrid />
      </section>
    </main>
  );
}
