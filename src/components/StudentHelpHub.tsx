import { motion } from 'motion/react';
import { LifeBuoy, FileText, HeadphonesIcon, GraduationCap } from 'lucide-react';

export default function StudentHelpHub() {
  const supports = [
    {
      title: 'Academic Support',
      description: 'One-on-one tutoring, study skills workshops, and language support to help you succeed in your courses.',
      icon: GraduationCap,
    },
    {
      title: 'Career Guidance',
      description: 'Resume building, interview preparation, and direct connections with industry placement partners.',
      icon: FileText,
    },
    {
      title: 'Wellbeing Services',
      description: 'Access to confidential counseling, mental health resources, and wellness programs designed for students.',
      icon: LifeBuoy,
    },
    {
      title: 'IT Help Desk',
      description: 'Technical assistance for campus Wi-Fi, student portals, software access, and device troubleshooting.',
      icon: HeadphonesIcon,
    },
  ];

  return (
    <section id="student-help-hub" className="bg-[#F8FAFC] py-20 lg:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mx-auto max-w-none">
          <dl className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {supports.map((support, index) => (
              <motion.div 
                key={support.title} 
                className="flex flex-col rounded-3xl bg-white border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(148,163,184,0.12)] hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex flex-col gap-y-4 text-xl font-bold leading-7 text-brand-dark font-display">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/[0.04] border border-brand-red text-brand-red shadow-sm shrink-0">
                    <support.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  {support.title}
                </dt>
                <dd className="mt-3 flex flex-auto flex-col text-[14px] leading-relaxed text-gray-500 font-sans">
                  <p className="flex-auto">{support.description}</p>
                  <p className="mt-6">
                    <a href="#" className="inline-flex items-center gap-1.5 text-[14px] font-bold tracking-tight text-brand-red hover:text-brand-dark transition-colors">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
