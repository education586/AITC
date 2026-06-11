import { motion } from 'motion/react';
import { HardHat, BookOpen, Clock, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Certificate III in Bricklaying and Blocklaying',
    category: 'Construction',
    description: 'Master bricklaying, blocklaying, and masonry construction in real workplace environments using industry-standard tools and materials.',
    icon: HardHat,
    duration: '104 Weeks',
    code: 'CPC33020',
    qualification: 'Certificate III',
    tuitionFee: '$24,000',
    nonTuitionFee: '$1,000',
    image: 'https://images.pexels.com/photos/11429199/pexels-photo-11429199.jpeg?_gl=1*1br9du4*_ga*MjA1MjA2NTk2MS4xNzcwODgxNTQz*_ga_8JE65Q40S6*czE3ODA5OTg0NjMkbzEyJGcxJHQxNzgwOTk4NDc2JGo0NyRsMCRoMA..',
  },
  {
    title: 'Diploma of Building and Construction (Building)',
    category: 'Construction',
    description: 'Lead construction projects with confidence — covering planning, risk management, contractor selection, and site supervision.',
    icon: BookOpen,
    duration: '104 Weeks',
    code: 'CPC50220',
    qualification: 'Diploma',
    tuitionFee: '$31,000',
    nonTuitionFee: '$1,000',
    image: 'https://images.pexels.com/photos/18261218/pexels-photo-18261218.jpeg?_gl=1*1g9i9i8*_ga*MjA1MjA2NTk2MS4xNzcwODgxNTQz*_ga_8JE65Q40S6*czE3ODA5OTg0NjMkbzEyJGcxJHQxNzgwOTk4NTYzJGo1NCRsMCRoMA..',
  },
  {
    title: 'Graduate Diploma of Management (Learning)',
    category: 'Business',
    description: 'Build senior-level skills in organisational learning, strategic leadership, and workforce development across any industry.',
    icon: Award,
    duration: '52 Weeks',
    code: 'BSB80120',
    qualification: 'Graduate Diploma',
    tuitionFee: '$25,000',
    nonTuitionFee: '$1,000',
    image: 'https://images.pexels.com/photos/6814351/pexels-photo-6814351.jpeg?_gl=1*1cul3zz*_ga*MjA1MjA2NTk2MS4xNzcwODgxNTQz*_ga_8JE65Q40S6*czE3ODA5OTg0NjMkbzEyJGcxJHQxNzgwOTk4NzExJGo0NiRsMCRoMA..',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link
              key={course.title}
              to={`/courses/${course.code}`}
              className="flex flex-col h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col flex-1 overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:border-brand-red/10 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply group-hover:bg-brand-dark/10 transition-colors" />
                  
                  {/* Qualification tag */}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded text-[10px] uppercase font-bold text-slate-900 tracking-widest flex items-center gap-1.5 shadow-sm">
                    <course.icon className="h-3.5 w-3.5 text-brand-red" />
                    {course.qualification}
                  </div>

                  {/* Course Code tag */}
                  <div className="absolute bottom-4 left-4 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white tracking-widest rounded uppercase">
                    CODE: {course.code}
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-8">
                  <span className="text-[10px] font-bold text-brand-red tracking-wider uppercase mb-1">Course Name</span>
                  <h3 className="font-display text-[24px] font-bold text-gray-900 mb-6 group-hover:text-brand-red transition-colors min-h-[60px] flex items-center leading-snug">
                    {course.title}
                  </h3>

                  {/* Bottom Meta indicators */}
                  <div className="border-t border-gray-100 pt-5 flex items-center justify-between text-[11px] font-semibold text-gray-500 font-sans mt-auto">
                    <span className="text-gray-400 font-medium uppercase tracking-wider text-[10px]">{course.category} Department</span>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Award className="w-4 h-4 text-brand-red font-bold" />
                      <span>AITC Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded bg-white border border-slate-200 px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:bg-slate-50"
          >
            View All Courses <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
