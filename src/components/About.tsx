import { Award, Users, Heart, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const features = [
    { icon: Award, title: 'Certified to Succeed', desc: 'Industry-recognised qualifications aligned with the Australian Qualifications Framework.' },
    { icon: Users, title: 'Expert Trainers', desc: 'Learn from experienced trainers with strong industry knowledge and practical skills focused on your success.' },
    { icon: Heart, title: 'Always Supported', desc: 'From orientation to graduation — LLND, wellbeing, disability support and student services at no extra cost.' },
    { icon: LayoutGrid, title: 'Skills That Work', desc: 'Face-to-face training in real or simulated workplace environments using industry-standard tools and materials.' }
  ];

  return (
    <section id="about" className="py-32 bg-gray-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
            
            <h3 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-6 tracking-tight">
              Train Hard <br className="sm:hidden" />
             . Build Smart. Lead Strong
            </h3>
            <p className="text-[16px] text-gray-500 font-sans leading-relaxed">
              Hands-on qualifications designed to launch your trade career with confidence, right in the heart of Melbourne.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((item, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-50 text-brand-red mb-6">
                    <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h4 className="text-[24px] font-bold text-brand-dark mb-3 leading-tight">{item.title}</h4>
                <p className="text-[16px] text-gray-500 leading-relaxed font-sans">
                {item.desc}
                </p>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
