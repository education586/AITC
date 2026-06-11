import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Award, 
  DollarSign, 
  CheckCircle, 
  HelpCircle, 
  Briefcase, 
  MapPin, 
  Laptop, 
  Check, 
  X, 
  MessageSquare,
  Send,
  Download
} from 'lucide-react';

export default function BricklayingPage() {
  const [activeAnchor, setActiveAnchor] = useState('overview');
  const [selectedDate, setSelectedDate] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  
  // Modal Question state
  const [questionForm, setQuestionForm] = useState({
    name: '',
    email: '',
    phone: '',
    question: ''
  });
  const [modalSuccess, setModalSuccess] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setActiveAnchor(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);

    const element = document.createElement("a");
    const file = new Blob([
      `Official Brochure & Syllabus for Course Code: CPC33020\n` +
      `Course Name: Certificate III in Bricklaying and Blocklaying\n` +
      `CRICOS Registered: 108342C\n` +
      `Course Duration: 104 weeks (88 weeks tuition + 16 weeks break)\n` +
      `Delivery Mode: Face to face physical hands-on training combined with core theoretical modules in fully-equipped workshops (20 hours study per week).`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `AITC_Brochure_CPC33020.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setIsQuestionModalOpen(false);
      setQuestionForm({ name: '', email: '', phone: '', question: '' });
    }, 3000);
  };

  const coreUnits = [
    { code: 'CPCCBL2001*', name: 'Handle and prepare bricklaying and blocklaying materials' },
    { code: 'CPCCBL2002*', name: 'Use bricklaying and blocklaying tools and equipment' },
    { code: 'CPCCBL3002*', name: 'Carry out masonry veneer construction' },
    { code: 'CPCCBL3003*', name: 'Carry out cavity brick construction' },
    { code: 'CPCCBL3005*', name: 'Lay masonry walls and corners' },
    { code: 'CPCCBL3006*', name: 'Lay multi-thickness walls and piers' },
    { code: 'CPCCBL3009*', name: 'Install flashings and damp proof course' },
    { code: 'CPCCBL3010*', name: 'Construct masonry arches' },
    { code: 'CPCCBL3011*', name: 'Construct curved walls' },
    { code: 'CPCCBL3013*', name: 'Construct masonry structural systems' },
    { code: 'CPCCCA3002*', name: 'Carry out setting out' },
    { code: 'CPCCCM2006', name: 'Apply basic levelling procedures' },
    { code: 'CPCCCM2008*', name: 'Erect and dismantle restricted height scaffolding' },
    { code: 'CPCCCM2012*', name: 'Work safely at heights' },
    { code: 'CPCCOM1012', name: 'Work effectively and sustainably in the construction industry' },
    { code: 'CPCCOM1013', name: 'Plan and organise work' },
    { code: 'CPCCOM1014', name: 'Conduct workplace communication' },
    { code: 'CPCCOM1015', name: 'Carry out measurements and calculations' },
    { code: 'CPCCOM2001*', name: 'Read and interpret plans and specifications' },
    { code: 'CPCCWHS2001', name: 'Apply WHS requirements, policies, and procedures in the construction industry' }
  ];

  const electiveUnits = [
    { code: 'CPCCCM2009*', name: 'Carry out basic demolition' },
    { code: 'CPCCCO2013', name: 'Carry out concreting to simple forms' },
    { code: 'CPCWHS1001', name: 'Prepare to work safely in the construction industry' },
    { code: 'CPCCPA3001', name: 'Prepare subgrade, base and bedding course' },
    { code: 'CPCCPA3002*', name: 'Lay segmental paving' },
    { code: 'CPCCPA3003*', name: 'Cut segmental paving' },
    { code: 'CPCCPA3004*', name: 'Finish segmental paving' },
    { code: 'CPCCPA3005*', name: 'Maintain and repair segmental paving' }
  ];

  const hardwareRequirements = [
    'Laptop: Processor 2.5–2.9 GHz, Memory 8 GB, Disk Space 100 GB',
    'Microsoft Windows 10/11 or Apple macOS Sequoia/Sonoma/Ventura',
    'Webcam (built-in or USB)',
    'Audio input/output suitable for video conferencing',
    'Headset or earbuds with microphone (recommended)',
    'Camera/mobile phone for scanning handwritten materials'
  ];

  const softwareRequirements = [
    'Web browser: Microsoft Edge, Firefox, Google Chrome, or Safari',
    'Microsoft Office 365 (Outlook, Teams, Word, Excel, PowerPoint, Planner)'
  ];

  const internetRequirements = [
    'Reliable high-speed broadband internet connection with sufficient upload and download capacity',
    'Wi-Fi or mobile connection acceptable',
    'Access to college wireless connection whilst on campus'
  ];

  const otherSkillsRequired = [
    'Install and maintain internet browser and software updates',
    'Connect to wireless networks at campus, library, or other locations',
    'Use web camera and headset/microphone',
    'Use cloud storage (e.g. Office 365 OneDrive)',
    'Proficiency in Microsoft Word and related software packages'
  ];

  const entryRequirements = [
    'Successful completion of equivalent of Australian Year 12 and must be 18 years old and above.',
    'A student is required to have their own laptop prior to the commencement of the course. The minimum requirements for the specification of laptops can be found in the “Student Equipment required: Hardware requirements, and Software requirements” section.',
    'Is required to successfully complete LLND test level 4.',
    'English requirement of a minimum of IELTS 6.0 or equivalent.'
  ];

  const occupations = [
    'Bricklayer',
    'Blocklayer',
    'Paver'
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-28 text-slate-800">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#1a191c] text-white pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FFF 1.2px, transparent 1.2px)', backgroundSize: '16px 16px' }} />
        <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Link 
            to="/courses" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-red text-xs font-bold font-display uppercase tracking-widest mb-8 transition-all hover:translate-x-[-4px]"
          >
            <ArrowLeft className="h-4 w-4 text-brand-red" />
            Back to Qualifications
          </Link>

          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-6 select-none">
              <span className="px-4 py-1.5 bg-white/5 text-slate-200 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-white/10 shadow-sm">
                Course Code: <span className="text-brand-red font-mono font-black ml-1 text-sm">CPC33020</span>
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-8 leading-tight max-w-4xl">
              Certificate III in Bricklaying and Blocklaying
            </h1>

            <Link 
              to="/student-help-hub"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-black text-white text-xs font-extrabold uppercase tracking-widest px-10 py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all font-display duration-200 shadow-lg shadow-brand-red/25 cursor-pointer"
            >
              Enrol Now <span className="ml-1 text-[13px] font-mono font-bold">↗</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. STICKY SUBMENU */}
      <section className="sticky top-20 bg-[#121113] text-[15px] text-slate-300 font-bold uppercase font-display select-none shadow-md z-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto space-x-1 py-0 no-scrollbar items-center justify-start font-sans">
          {[
            { id: 'overview', label: 'Qualification Description' },
            { id: 'entry-requirements', label: 'Entry Requirements' },
            { id: 'qualification-issued', label: 'Qualification Issued' },
            { id: 'occupations', label: 'Related Occupations' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-5 sm:px-6 py-4.5 border-b-4 hover:text-white cursor-pointer tracking-wider shrink-0 transition-all font-bold ${
                activeAnchor === tab.id 
                  ? 'border-brand-red text-white bg-white/[0.04]' 
                  : 'border-transparent text-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. MAIN LAYOUT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* SECTION 1: Overview */}
            <div id="overview" className="scroll-mt-36 space-y-8 bg-white p-8 md:p-10 rounded-3xl border border-slate-150 shadow-sm">
              <div className="border-l-4 border-brand-red pl-4">
                <h2 className="font-display font-extrabold text-[25px] text-slate-900 tracking-tight uppercase">
                 Qualification Description

                </h2>
              </div>
              <p className="text-[16px] text-slate-600 leading-relaxed font-sans">
             This qualification reflects the trade qualified role of a bricklayer, blocklayer or paver who may have responsibility for undertaking heritage bricklaying, refractory bricklaying, bricklaying, blocklaying and paving work in residential, industrial and commercial contexts, in both existing and new constructions.
</p>

<p className="text-[16px] text-slate-600 leading-relaxed font-sans">Occupational titles could include:</p>

<ul className="list-disc pl-[30px] text-[16px] text-slate-600 space-y-1 font-sans">
    <li>Bricklayer</li>
    <li>Blocklayer</li>
    <li>Paver</li>
</ul>

<p className="text-[16px] text-slate-600 leading-relaxed font-sans">
    The bricklaying, blocklaying and paving industry strongly affirms that training and assessment leading to recognition of skills must be undertaken in a real or closely simulated workplace environment and this qualification requires all units of competency to be delivered and assessed in this context.
</p>

<p className="text-[16px] text-slate-600 leading-relaxed font-sans">
    Licensing, legislative, regulatory and certification requirements vary between states. Relevant state and territory regulatory authorities should be consulted to confirm those requirements.
</p>

<p className="text-[16px] text-slate-600 leading-relaxed font-sans">
    Completion of the general construction induction training program, specified in the Safe Work Australia model
    <em>Code of Practice: Construction Work</em>, is required by anyone carrying out construction work.
    Achievement of
    <a href="https://training.gov.au/training/details/CPCWHS1001" target="_blank" rel="noopener noreferrer" className="text-brand-red underline hover:text-black font-semibold">
        CPCWHS1001
    </a>
    <em>Prepare to work safely in the construction industry</em> meets this requirement.
</p>


            </div>

            {/* SECTION 2: Entry Requirements */}
            <div id="entry-requirements" className="scroll-mt-36 space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-150 shadow-sm animate-fade-in">
              <div className="border-l-4 border-brand-red pl-4">
                <h2 className="font-display font-extrabold text-[25px] text-slate-900 tracking-tight uppercase">
                  Entry Requirements
                </h2>
              </div>
              
              <div className="space-y-4 pr-3 font-sans text-[16px] text-slate-600 leading-relaxed">
                {entryRequirements.map((req, idx) => (
                  <p key={idx} className="flex gap-3 items-start">
                    <span className="shrink-0 h-2 w-2 bg-brand-red rounded-full mt-2" />
                    <span className="font-medium text-slate-700">{req}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* SECTION 3: Language, Literacy, Numeracy, and Digital skills (LLND) */}
            <div id="llnd" className="scroll-mt-36 space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-150 shadow-sm animate-fade-in">
              <div className="border-l-4 border-brand-red pl-4">
                <h2 className="font-display font-extrabold text-[25px] text-slate-900 tracking-tight uppercase">
                  Language, Literacy, Numeracy, and Digital skills (LLND)
                </h2>
              </div>
              <div className="space-y-4 text-[16px] text-slate-600 leading-relaxed font-sans">
                <p>
                  Literacy, Numeracy and Digital (LLND) assessment. This assessment is completed as part of the pre-enrolment process. The LLND assessment helps identify whether a student may need additional support during their studies and ensures they are placed in a course that is appropriate for their skill level. Assessments are aligned with the Australian Core Skills Framework (ACSF) and include language, literacy, numeracy and digital skills. Students must complete their LLND assessment via the LLND Portal before they can be formally enrolled.
                   Further instructions on how to access and complete the assessment will be provided to prospective students as part of the pre-enrolment process.
                </p>
                
              </div>
            </div>

            {/* SECTION 5: Packaging Rules */}
            <div id="packaging-rules" className="scroll-mt-36 space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-150 shadow-sm animate-fade-in">
              <div className="border-l-4 border-brand-red pl-4">
                <h2 className="font-display font-extrabold text-[25px] text-slate-900 tracking-tight uppercase">
                  Packaging Rules
                </h2>
              </div>

              <div className="border border-slate-200 rounded-2xl overflow-hidden font-sans shadow-xs">
                <div className="bg-[#2C3E50] text-white px-6 py-4 grid grid-cols-12 gap-4 items-center font-display">
                  <div className="col-span-3 text-[16px] font-extrabold tracking-widest uppercase">Unit Code</div>
                  <div className="col-span-7 text-[16px] font-extrabold tracking-widest uppercase">Unit Name</div>
                  <div className="col-span-2 text-[16px] font-extrabold tracking-widest uppercase text-right">Type</div>
                </div>

                <div className="divide-y divide-slate-100 bg-white">
                  {/* Core List */}
                  {coreUnits.map((u) => (
                    <div key={u.code} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-slate-50 transition-colors group">
                      <div className="col-span-3 font-extrabold text-slate-700 text-[14px]">{u.code}</div>
                      <div className="col-span-7 font-medium text-slate-600 text-[14px] leading-relaxed group-hover:text-slate-800 transition-colors">{u.name}</div>
                      <div className="col-span-2 text-right">
                        <span className="inline-flex items-center justify-center px-3 py-1 bg-slate-100/80 text-slate-500 text-[14px] font-bold uppercase tracking-widest rounded-full">Core</span>
                      </div>
                    </div>
                  ))}

                  {/* Elective List */}
                  {electiveUnits.map((u) => (
                    <div key={u.code} className="px-6 py-4 grid grid-cols-12 gap-4 items-center hover:bg-slate-50 transition-colors group">
                      <div className="col-span-3 font-extrabold text-slate-700 text-[14px]">
                        {u.code === 'CPCWHS1001' ? (
                          <a href="https://training.gov.au/training/details/CPCWHS1001" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red hover:underline transition-colors">
                            {u.code}
                          </a>
                        ) : (
                          u.code
                        )}
                      </div>
                      <div className="col-span-7 font-medium text-slate-600 text-[14px] leading-relaxed group-hover:text-slate-800 transition-colors">{u.name}</div>
                      <div className="col-span-2 text-right">
                         <span className="inline-flex items-center justify-center px-3 py-1 bg-slate-100/80 text-slate-500 text-[14px] font-bold uppercase tracking-widest rounded-full">Elective</span>
                      </div>
                    </div>
                  ))}

                  {/* Description of Licensing */}
                  <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-t border-slate-100 hover:bg-slate-50 transition-colors">
                     <div className="md:col-span-3 font-extrabold text-slate-900 text-[16px] leading-snug pr-4">Description of licensing requirements</div>
                     <div className="md:col-span-9 text-slate-600 text-[14px] leading-relaxed font-medium">
                        State and territory jurisdictions may have different licensing, legislative, regulatory or certification requirements. Relevant state and territory regulatory authorities should be consulted to confirm those requirements.
                     </div>
                  </div>

                  {/* Additional Requirements */}
                  <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start border-t border-slate-100 hover:bg-slate-50 transition-colors">
                     <div className="md:col-span-3 font-extrabold text-slate-900 text-[16px] leading-snug pr-4">Additional requirements</div>
                     <div className="md:col-span-9 text-slate-600 text-[14px] leading-relaxed font-medium">
                        <p className="mb-2">
                           Completion of the general construction induction training program, specified in the Safe Work Australia model <em>Code of Practice: Construction Work</em>, is required by anyone carrying out construction work. 
                        </p>
                        <p>
                           Achievement of <a href="https://training.gov.au/training/details/CPCWHS1001" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-brand-red hover:underline transition-colors">CPCWHS1001</a> Prepare to work safely in the construction industry meets this requirement.
                        </p>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Equipment Required */}
            <div className="space-y-6 bg-white p-8 md:p-10 rounded-3xl border border-slate-150 shadow-sm font-sans">
              <div className="border-l-4 border-brand-red pl-4">
                <h2 className="font-display font-extrabold text-[25px] text-slate-900 tracking-tight uppercase">
                  Student Equipment Required
                </h2>
              </div>
              <p className="text-[16px] text-slate-500 leading-relaxed">
                Students MUST have the following IT equipment prior to enrolling with the college and will require a suitable study space for self-study, assessment activities, or to participate in online live streaming.
              </p>

              <div className="space-y-6 text-[16px] text-slate-600 border-t border-slate-100 pt-6">
                <div>
                  <h4 className="font-black text-slate-800 text-[16px] uppercase tracking-widest mb-3.5 text-brand-red flex items-center gap-1.5 font-display">
                    HARDWARE REQUIREMENTS:
                  </h4>
                  <ul className="space-y-2.5 pl-5 list-disc text-slate-600 font-medium font-sans">
                    {hardwareRequirements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100/50 pt-5">
                  <h4 className="font-black text-slate-800 text-[16px] uppercase tracking-widest mb-3.5 text-brand-red flex items-center gap-1.5 font-display">
                    SOFTWARE REQUIREMENTS:
                  </h4>
                  <ul className="space-y-2.5 pl-5 list-disc text-slate-600 font-medium">
                    {softwareRequirements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100/50 pt-5">
                  <h4 className="font-black text-slate-800 text-[16px] uppercase tracking-widest mb-3.5 text-brand-red flex items-center gap-1.5 font-display">
                    INTERNET REQUIREMENTS:
                  </h4>
                  <ul className="space-y-2.5 pl-5 list-disc text-slate-600 font-medium">
                    {internetRequirements.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-100/50 pt-5">
                  <h4 className="font-black text-slate-800 text-[16px] uppercase tracking-widest mb-3.5 text-brand-red flex items-center gap-1.5 font-display">
                    OTHER SKILLS REQUIRED:
                  </h4>
                  <ul className="space-y-2.5 pl-5 list-disc text-slate-600 font-medium">
                    {otherSkillsRequired.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* SECTION 6: Qualification Issued */}
            <div id="qualification-issued" className="scroll-mt-36 bg-white p-8 md:p-10 rounded-3xl border border-slate-150 shadow-sm space-y-6 animate-fade-in">
              <div className="border-l-4 border-brand-red pl-4">
                <h2 className="font-display font-extrabold text-[25px] text-slate-900 tracking-tight uppercase">
                  Qualification Issued
                </h2>
              </div>
              <p className="text-[16px] text-slate-600 leading-relaxed font-sans pr-4">
                Once the units of competency required in the training package for this qualification have been successfully completed, the student will be issued with the CPC33020 – Certificate III in Bricklaying and Blocklaying. and an academic transcript of all completed units within 30 calendar days. Students who successfully complete individual units of competency within the qualification, but not the qualification in its entirety will be eligible to receive a Statement of Attainment. This document contains a record of all completed units and will be available to students by the end of their course.
              </p>

              <div className="border border-brand-red/20 bg-red-50/20 p-6 rounded-2xl space-y-3.5 font-sans text-[16px] leading-relaxed text-slate-700 shadow-3xs">
                <h4 className="font-display font-black text-brand-red text-[16px] uppercase tracking-widest border-b border-brand-red/10 pb-2">
                  AITC does not guarantee:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 font-bold text-[16px]">
                  <li>a student will successfully complete a training product on its scope of registration; or</li>
                  <li>a training product can be completed in a manner that does not meet the relevant requirements set out in an instrument made under section 185 of the National Vocational Education and Training Regulator Act 2011; or</li>
                  <li>a student will obtain a particular employment outcome where this is outside the control of the RTO.</li>
                </ul>
                
                <p className="text-[16px] font-semibold text-slate-600">
                  AITC qualifications only fulfil the academic requirement, not a licensed trade qualification, traineeship or apprenticeship.
                </p>
                
                <div className="border-t border-slate-200/50 pt-3 space-y-2">
                  <p className="text-[16px] font-semibold text-slate-600">
                    AITC does not: claim to commit to secure for, or on the student or intending student’s behalf, a migration outcome from undertaking any course offered by the College.
                  </p>
                  <p className="text-[16px] text-slate-500  font-sans animate-fade-in pt-1">
                    We strongly advise that students consult with a registered migration agent if they require more specific information. For the most up to date information please refer to the Australian Government’s Home Affairs website: <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="text-brand-red underline hover:text-black font-semibold">immi.homeaffairs.gov.au</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 7: Occupations */}
            <div id="occupations" className="scroll-mt-36 bg-white p-8 md:p-10 rounded-3xl border border-slate-150 shadow-sm space-y-4 animate-fade-in font-sans">
              <div className="border-l-4 border-brand-red pl-4">
                <h2 className="font-display font-extrabold text-[25px] text-slate-900 tracking-tight uppercase">
                  Related Occupations
                </h2>
              </div>
              

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {occupations.map((occupation) => (
                  <div key={occupation} className="flex items-center gap-2.5 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100/70 font-bold text-[16px] text-slate-800 transition-colors shadow-2xs">
                    <Briefcase className="h-4 w-4 text-brand-red shrink-0" />
                    <span>{occupation}</span>
                  </div>
                ))}
              </div>

             
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 space-y-8">
            

            {/* Sticky contact and specifications container */}
            <div className="space-y-4 sticky top-32">
              

              {/* Specifications panel */}
              <div className="bg-white rounded-3xl border border-slate-150 p-6 md:p-8 shadow-sm text-slate-800 space-y-6">
                
                <h4 className="font-display font-black text-[18px] uppercase tracking-widest text-[#d22129] border-b border-slate-100 pb-3">
                  Course Specifications
                </h4>

                <div className="space-y-5 font-sans">
                  
                  <div className="space-y-1.5">
                    <span className="text-[12px] uppercase font-black text-slate-400 tracking-wider block">DELIVERY MODE</span>
                    <p className="text-[15px] text-slate-700 leading-relaxed font-semibold">
                      Face to Face
                    </p>
                    <button onClick={() => setIsDeliveryModalOpen(true)} className="inline-flex items-center gap-1 text-[11px] text-brand-red font-bold uppercase tracking-wider hover:underline mt-1 pt-0.5 cursor-pointer">
                      Learn More <span className="text-[12px]">↗</span>
                    </button>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-slate-100">
                    <span className="text-[12px] uppercase font-black text-slate-400 tracking-wider block">DURATION</span>
                    <p className="text-[15px] text-slate-900 font-extrabold font-display leading-relaxed">
                      104 weeks
                    </p>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                      (88 weeks tuition + 16 weeks scheduled break)
                    </p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-slate-100">
                    <span className="text-[12px] uppercase font-black text-slate-400 tracking-wider block">LOCATIONS</span>
                    <p className="text-[15px] text-slate-900 font-extrabold font-display leading-relaxed">
                      VIC
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-slate-100">
                    <span className="text-[12px] uppercase font-black text-slate-400 tracking-wider block">STUDY PATHWAY UNITS</span>
                    <p className="text-[15px] text-slate-900 font-extrabold font-display leading-snug">
                      28 of competency
                    </p>
                    <p className="text-[14px] text-slate-500 font-mono font-medium">
                      (20 core units + 8 elective units)
                    </p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-slate-100">
                    <span className="text-[12px] uppercase font-black text-slate-400 tracking-wider block">COURSE CODE</span>
                    <p className="text-[15px] text-slate-900 font-extrabold font-display leading-relaxed">
                      CPC33020
                    </p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-slate-100">
                    <span className="text-[12px] uppercase font-black text-slate-400 tracking-wider block">TUITION FEES</span>
                    <p className="text-[15px] text-slate-900 font-extrabold font-display leading-relaxed">
                      AUD $24,000
                    </p>
                  </div>

                  <div className="space-y-1 pt-4 border-t border-slate-100">
                    <span className="text-[12px] uppercase font-black text-slate-400 tracking-wider block">NON-TUITION FEES</span>
                    <p className="text-[15px] text-slate-900 font-extrabold font-display leading-relaxed">
                      $1,000
                    </p>
                  </div>

                </div>

                <a 
                  href="https://training.gov.au/Training/Details/CPC33020"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-brand-red text-white hover:bg-[#b0131a] text-[10px] font-extrabold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-1.5 font-display shadow-md cursor-pointer"
                >
                  View on training.gov.au <span className="text-[11px] font-mono">↗</span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>



      {/* 6. INTERACTIVE MODAL popup for "Ask a question" */}
      {/* Delivery Mode Modal */}
      <AnimatePresence>
        {isDeliveryModalOpen && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl border border-slate-100 w-full max-w-lg p-6 md:p-8 relative shadow-2xl overflow-hidden font-sans"
            >
              <button 
                onClick={() => setIsDeliveryModalOpen(false)}
                className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg shrink-0 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                Mode of Delivery
              </h3>

              <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 font-sans">
                <p>
                  The college uses a face-to-face (in class or virtual) delivery for this qualification. All in-class training through face-to-face delivery will take place at the college training facilities. The delivery of training and assessment— face-to-face (whether in class or virtual)—is structured with at least 20 scheduled course contact hours per week.
                </p>
                
                <h4 className="font-bold text-slate-900 pt-2">Note:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-500">1</span>
                    <p>The college will not deliver more than one-third of the units (or equivalent) of any course by online or distance learning to an overseas student.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-500">2</span>
                    <p>The college will ensure that in each compulsory study period for a course, the overseas student is studying at least one unit that is not by distance or online learning, unless the student is completing the last unit of their course.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isQuestionModalOpen && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl border border-slate-100 w-full max-w-lg p-6 md:p-8 relative shadow-2xl overflow-hidden font-sans"
            >
              <button 
                onClick={() => setIsQuestionModalOpen(false)}
                className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg shrink-0 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="font-display font-extrabold text-[#D22129] text-xl tracking-tight mb-2">
                Ask a Question
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-medium font-sans">
                Syllabus details or admissions requirements. Answers forwarded directly.
              </p>

              {modalSuccess ? (
                <div className="py-8 text-center space-y-4 font-sans">
                  <div className="inline-flex p-4 bg-red-50 text-[#D22129] rounded-full">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-slate-800">Question Logged Successfully</h4>
                    <p className="text-xs text-slate-400 font-medium max-w-xs mx-auto mt-1">
                      Thanks for expressing interest. Support team will respond via email within 12 working hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4 font-sans">
                  
                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                      Your Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Liam Smith"
                      value={questionForm.name}
                      onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#D22129] focus:outline-none focus:bg-white text-xs text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                        Email Address
                      </label>
                      <input 
                        required
                        type="email" 
                        placeholder="e.g. name@domain.com"
                        value={questionForm.email}
                        onChange={(e) => setQuestionForm({...questionForm, email: e.target.value})}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#D22129] focus:outline-none focus:bg-white text-xs text-slate-800 placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                        Phone Contact
                      </label>
                      <input 
                        required
                        type="type" 
                        placeholder="e.g. +61 400 000 000"
                        value={questionForm.phone}
                        onChange={(e) => setQuestionForm({...questionForm, phone: e.target.value})}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#D22129] focus:outline-none focus:bg-white text-xs text-slate-800 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 font-mono">
                      Your Question
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe your inquiry (e.g. credit transfers, study plans, virtual hybrid schedule details)..."
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-1 focus:ring-[#D22129] focus:outline-none focus:bg-white text-xs text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-[#D22129] hover:bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all font-display shadow-lg shadow-[#D22129]/15 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    SUBMIT INQUIRY
                  </button>

                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
