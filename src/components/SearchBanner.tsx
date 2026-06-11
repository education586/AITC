import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, CheckCircle, Sparkles } from 'lucide-react';

const coursesList = [
  {
    title: 'Certificate III in Bricklaying and Blocklaying',
    code: 'CPC33020',
    category: 'Construction',
  },
  {
    title: 'Diploma of Building and Construction (Building)',
    code: 'CPC50220',
    category: 'Construction',
  },
  {
    title: 'Graduate Diploma of Management (Learning)',
    code: 'BSB80120',
    category: 'Business',
  }
];

export default function SearchBanner() {
  const [query, setQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/courses?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/courses');
    }
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const matchingCourses = query.trim()
    ? coursesList.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.code.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="py-20 lg:py-28 bg-[#D22129] relative overflow-hidden">
      {/* Dynamic background dot-grid detail */}
      <div 
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay" 
        style={{ 
          backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>
      
      {/* Modern abstract glowing accent rings */}
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-black/15 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column: Fully Left-Aligned with customized headings and body */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Build Your Destiny
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.1] mb-6 tracking-tight font-display">
              Let's find the <br className="hidden sm:inline" />
              right course for you.
            </h2>
            
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-xl font-sans leading-relaxed">
              Enter a course name, trade path, or code to search nationally recognized qualifications and get your professional certification started instantly.
            </p>

            {/* Premium quick indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                'Nationally Accredited',
                'Expert Face-to-Face Mentoring',
                'Melbourne Campus Location'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-4 h-4 text-white shrink-0" strokeWidth={3} />
                  <span className="text-[11px] font-semibold tracking-wider uppercase font-display">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Search Input Card Column */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 font-display">
                Quick Course Finder
              </h3>
              
              <div className="relative" ref={dropdownRef}>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setIsDropdownOpen(true);
                      }}
                      onFocus={() => setIsDropdownOpen(true)}
                      className="block w-full rounded-2xl border border-gray-100 py-4 pl-11 pr-4 text-gray-900 bg-gray-50 placeholder:text-gray-400 focus:ring-2 focus:ring-[#D22129] focus:bg-white text-sm sm:text-base font-sans outline-none transition-all shadow-inner"
                      placeholder="e.g. CPC50220 / Building"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-4 bg-[#2B2A2E] text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-2xl hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg font-display"
                  >
                    SEARCH COURSES
                  </button>
                </form>

                {/* Dropdown Results Overlay */}
                {isDropdownOpen && query.trim().length > 0 && (
                  <div className="absolute top-[60px] left-0 right-0 bg-white rounded-2xl border border-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden z-50 text-left">
                    {matchingCourses.length > 0 ? (
                      <div className="max-h-[250px] overflow-y-auto divide-y divide-slate-50">
                        {matchingCourses.map((course) => (
                          <button
                            key={course.code}
                            type="button"
                            onClick={() => {
                              navigate(`/courses/${course.code}`);
                              setQuery('');
                              setIsDropdownOpen(false);
                            }}
                            className="w-full flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors text-left group"
                          >
                            <div className="p-2 bg-red-50 text-[#D22129] rounded-lg shrink-0 group-hover:bg-[#D22129]/5 transition-colors">
                              <Search className="h-3.5 w-3.5 stroke-[2.5]" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5 flex-wrap mb-1">
                                <span className="font-extrabold text-[9px] text-[#D22129] font-mono uppercase bg-red-50 px-1.5 py-0.5 rounded-md">
                                  {course.code}
                                </span>
                                <span className="font-extrabold text-[9px] text-slate-400 font-mono tracking-wider uppercase bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded-md">
                                  {course.category}
                                </span>
                              </div>
                              <h4 className="font-display text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#D22129] transition-colors line-clamp-1 leading-snug">
                                {course.title}
                              </h4>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-slate-400 font-sans">
                        No courses match "{query}"
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <p className="mt-4 text-[10px] text-gray-400 text-center font-sans">
                Search accredited qualifications and trade training options.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
