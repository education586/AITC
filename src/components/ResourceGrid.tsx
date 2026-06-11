import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  HelpCircle, 
  MapPin, 
  FileText, 
  Shield, 
  Mail, 
  Lock, 
  DollarSign, 
  BookOpen, 
  Presentation, 
  Book, 
  Heart, 
  GraduationCap, 
  User, 
  RefreshCw, 
  Gavel,
  X,
  ChevronDown,
  Download,
  Upload,
  Send,
  Sparkles,
  Search,
  CheckCircle,
  FileCheck,
  Building,
  Plane,
  HeartHandshake
} from 'lucide-react';

// Resource Item interface
interface Resource {
  id: string;
  title: string;
  icon: any;
  color: string;
}

export default function ResourceGrid() {
  const navigate = useNavigate();
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Digital Mail Simulator State
  const [mailFilter, setMailFilter] = useState<'inbox' | 'sent'>('inbox');
  const [selectedMail, setSelectedMail] = useState<any>(null);
  const [composeTo, setComposeTo] = useState('administration@aitc.edu.au');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');
  const [sentMails, setSentMails] = useState<any[]>([]);
  const [showMailSuccess, setShowMailSuccess] = useState(false);

  // LMS form simulator
  const [lmsUsername, setLmsUsername] = useState('');
  const [lmsPassword, setLmsPassword] = useState('');
  const [lmsLoggedIn, setLmsLoggedIn] = useState(false);

  // Orientation viewer slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Well-being breathing exercise state
  const [isBreathingIn, setIsBreathingIn] = useState(true);

  // Complaints form submit state
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  // Financial request form
  const [financeFormSubmitted, setFinanceFormSubmitted] = useState(false);

  // Search filter for resources
  const [searchQuery, setSearchQuery] = useState('');

  // Student handbook search state
  const [handbookSearch, setHandbookSearch] = useState('');

  const resources: Resource[] = [
    { id: 'faqs', title: "FAQ's", icon: HelpCircle, color: 'text-brand-red' },
    { id: 'locations', title: 'Campus & Training Facility Locations', icon: MapPin, color: 'text-brand-red' },
    { id: 'forms', title: 'PDF Forms', icon: FileText, color: 'text-brand-red' },
    { id: 'policies', title: 'PDF Policies', icon: Shield, color: 'text-brand-red' },
    { id: 'mail', title: 'Student Digital Mail', icon: Mail, color: 'text-brand-red' },
    { id: 'lms', title: 'LMS Login', icon: Lock, color: 'text-brand-red' },
    { id: 'finance', title: 'Finance Support', icon: DollarSign, color: 'text-brand-red' },
    { id: 'learning', title: 'Learning and Assessment Support', icon: BookOpen, color: 'text-brand-red' },
    { id: 'orientation', title: 'Orientation Slides', icon: Presentation, color: 'text-brand-red' },
    { id: 'handbook', title: 'Student Handbook', icon: Book, color: 'text-brand-red' },
    { id: 'wellbeing', title: 'Counselling & Wellbeing', icon: Heart, color: 'text-brand-red' },
    { id: 'graduation', title: 'Graduation Ceremonies', icon: GraduationCap, color: 'text-brand-red' },
    { id: 'career', title: 'Student Career Management', icon: User, color: 'text-brand-red' },
    { id: 'pathways', title: 'Academic/Articulation Pathways', icon: RefreshCw, color: 'text-brand-red' },
    { id: 'appeals', title: 'Complaints & Appeals', icon: Gavel, color: 'text-brand-red' },
  ];

  const filteredResources = resources.filter(res => 
    res.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fake Mail Data
  const mockMails = [
    {
      id: 1,
      sender: 'academic.dean@aitc.edu.au',
      subject: 'Confirmation of Enrolment & Induction Program',
      date: 'Today, 09:14 AM',
      body: 'Dear Student,\n\nWelcome to Australian International Trades College! This email confirms your registration for the upcoming semester starting next Monday. Please review the Student Handbook and make sure you complete your pre-induction tasks prior to your first practical session.\n\nWarm regards,\nAcademic Registry Office',
    },
    {
      id: 2,
      sender: 'finance@aitc.edu.au',
      subject: 'Tuition Fee Invoice Receipt (Installment #1)',
      date: 'Yesterday, 02:45 PM',
      body: 'Hello,\n\nThank you for making the outstanding payment for your first tuition installment. A formal PDF receipt has been sent to your primary mobile and uploaded directly to your Student Digital Profile.\n\nCheers,\nAccounts Team',
    }
  ];



  // Helper trigger breathing animation toggle
  const toggleBreathing = () => {
    setIsBreathingIn(!isBreathingIn);
  };

  const handleSendMail = (e: FormEvent) => {
    e.preventDefault();
    if (!composeSubject || !composeBody) return;

    const newMail = {
      id: Date.now(),
      sender: 'learnataitc@gmail.com',
      subject: composeSubject,
      date: 'Just Now',
      body: composeBody
    };

    setSentMails([newMail, ...sentMails]);
    setComposeSubject('');
    setComposeBody('');
    setShowMailSuccess(true);
    setTimeout(() => {
      setShowMailSuccess(false);
      setMailFilter('sent');
    }, 1200);
  };

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {filteredResources.map((res) => {
            const IconComponent = res.icon;
            const isClickable = ['locations', 'mail', 'forms', 'policies', 'handbook', 'orientation'].includes(res.id);

            if (!isClickable) {
              return (
                <motion.div
                  id={`resource-card-${res.id}`}
                  key={res.id}
                  className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl shadow-sm min-h-[170px] hover:shadow-[0_12px_30px_rgba(43,42,46,0.06)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4 p-3 rounded-xl bg-brand-red/5 transition-colors duration-300 group-hover:bg-brand-red/10">
                    <IconComponent className="h-6 w-6 text-brand-red stroke-[1.5]" />
                  </div>
                  <span className="text-center text-[14px] font-bold tracking-tight text-slate-850 leading-snug group-hover:text-brand-red transition-colors font-display max-w-[210px]">
                    {res.title}
                  </span>
                </motion.div>
              );
            }

            return (
              <motion.button
                id={`resource-button-${res.id}`}
                key={res.id}
                onClick={() => {
                  if (res.id === 'locations') {
                    navigate('/contact');
                    return;
                  }
                  if (res.id === 'mail') {
                    window.location.href = 'mailto:learnataitc@gmail.com';
                    return;
                  }
                  if (res.id === 'forms') {
                    navigate('/forms');
                    return;
                  }
                  if (res.id === 'policies') {
                    navigate('/policies');
                    return;
                  }
                  if (res.id === 'handbook') {
                    window.open('https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeihmyweo7qtspxls7ot2xvvody3dk4zygylg3uaq3dwrkhx5n7c5wu', '_blank', 'noopener,noreferrer');
                    return;
                  }
                  if (res.id === 'orientation') {
                    window.open('https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeicawan6bddd6i2c5jx4irrlw7vaqe5k6hhh6q74gghvt2orjsacue', '_blank', 'noopener,noreferrer');
                    return;
                  }
                  setSelectedResourceId(res.id);
                  // Reset states
                  setOpenFaq(null);
                  setSelectedMail(null);
                  setLmsLoggedIn(false);
                  setCurrentSlide(0);
                  setComplaintSubmitted(false);
                  setFinanceFormSubmitted(false);
                }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-[0_12px_30px_rgba(43,42,46,0.06)] hover:-translate-y-0.5 transition-all duration-300 min-h-[170px] focus:outline-none focus:ring-2 focus:ring-brand-red/20 group cursor-pointer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 p-3 rounded-xl bg-brand-red/5 transition-colors duration-300 group-hover:bg-brand-red/10">
                  <IconComponent className="h-6 w-6 text-brand-red stroke-[1.5]" />
                </div>
                <span className="text-center text-[14px] font-bold tracking-tight text-slate-850 leading-snug group-hover:text-brand-red transition-colors font-display max-w-[210px]">
                  {res.title}
                </span>

              </motion.button>
            );
          })}
        </div>

        {/* Empty Search feedback */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200 max-w-lg mx-auto">
            <HelpCircle className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-slate-700 mb-1">No matching student resources found</p>
            <p className="text-xs text-slate-400">Please try custom keywords such as FAQ, LMS, Mail, or Policies.</p>
          </div>
        )}
      </div>

      {/* Dynamic Popover/Modal Screen Integration */}
      <AnimatePresence>
        {selectedResourceId && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-3xl w-full overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-[#D22129]/[0.04] border border-[#D22129]/15 rounded-xl flex items-center justify-center text-brand-red">
                    {(() => {
                      const activeRes = resources.find(r => r.id === selectedResourceId);
                      if (!activeRes) return null;
                      const Icon = activeRes.icon;
                      return <Icon className="h-6 w-6 stroke-[1.8]" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-slate-900 leading-snug">
                      {resources.find(r => r.id === selectedResourceId)?.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D22129] tracking-wider uppercase mt-0.5">
                      AITC Student Support Portal
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedResourceId(null)}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Core Contents */}
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto font-sans text-slate-700">
                
                {/* 1. FAQs MODAL */}
                {selectedResourceId === 'faqs' && (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 font-medium mb-6">Find quick structural answers on academic regulations, practical work requirements, and AITC guidelines below:</p>
                    {[
                      {
                        q: 'How do I log my practical session workshop hours?',
                        a: 'Practical skills assessments require students to log hours via standard Log Sheets co-signed by an AITC qualified trades trainer. Digital log systems are synced at the end of each session.'
                      },
                      {
                        q: 'What should I do if I am unable to attend a scheduled assessment?',
                        a: 'Please complete an Academic Extension / Deferral Request Form at least 48 hours prior to your assessment, accompanied by standard professional documentation (e.g., medical certificates).'
                      },
                      {
                        q: 'Are safety clothes (PPE) included in the student tuition fee?',
                        a: 'First-semester starter packages include basic safety glasses, an AITC trade shirt, and workshop guidelines. Students must supply their own certified protective steel-toe work boots.'
                      },
                      {
                        q: 'How does credit transfer or RPL recognition work?',
                        a: 'Recognition of Prior Learning (RPL) can grant credit points toward your vocational qualification based on proven industry experience or preceding study structures. Enquire via AITC student advisors.'
                      }
                    ].map((item, index) => (
                      <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                        >
                          <span className="font-bold text-sm text-slate-800">{item.q}</span>
                          <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === index && (
                          <div className="p-5 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-white">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. LOCATIONS MODAL */}
                {selectedResourceId === 'locations' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium">AITC holds modern, state-of-the-art training spaces and campuses in key locations:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50/50">
                        <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider block mb-1">State Head Office</span>
                        <h4 className="font-bold text-sm text-slate-800 mb-2">Brisbane Campus Hub</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">Level 4, 115 Queen Street, Brisbane City, QLD 4000</p>
                        <div className="flex gap-2">
                          <span className="px-2.5 py-1 bg-white text-slate-600 rounded-lg text-[10px] font-semibold border border-slate-200">Public Transit Accessible</span>
                          <span className="px-2.5 py-1 bg-white text-slate-600 rounded-lg text-[10px] font-semibold border border-slate-200">Enquiry Center</span>
                        </div>
                      </div>
                      <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50/50">
                        <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider block mb-1">Heavy Workspaces</span>
                        <h4 className="font-bold text-sm text-slate-800 mb-2">Salisbury Engineering Workshop</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">Unit 3, 226 Evans Road, Salisbury, QLD 4107</p>
                        <div className="flex gap-2">
                          <span className="px-2.5 py-1 bg-white text-slate-600 rounded-lg text-[10px] font-semibold border border-slate-200">Heavy Brick Workbay</span>
                          <span className="px-2.5 py-1 bg-white text-slate-600 rounded-lg text-[10px] font-semibold border border-slate-200">On-Site Parking</span>
                        </div>
                      </div>
                    </div>
                    {/* Simulated Map Visual */}
                    <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200/60 shadow-inner">
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-300 via-emerald-100 to-slate-200"></div>
                      {/* Grid representation */}
                      <div className="absolute inset-0 size-full" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                      <div className="relative z-10 text-center px-4">
                        <MapPin className="h-8 w-8 text-[#D22129] mx-auto mb-1 animate-bounce" />
                        <span className="text-xs font-bold text-slate-800 block">Australian International Trades College Facilities Map</span>
                        <p className="text-[10px] text-slate-500 mt-1">Queensland Rail lines Salisbury station is 400m walk directly. Transit route planner is fully operational.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. PDF FORMS MODAL */}
                {selectedResourceId === 'forms' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium">Download standard structural student forms to adjust enrolment details or submit claims:</p>
                    
                    <div className="space-y-3">
                      {[
                        { name: 'AITC Enrolment Variation Form', size: '184 KB', type: 'PDF Document' },
                        { name: 'Recognition of Prior Learning (RPL) Guide Pack', size: '1.2 MB', type: 'ZIP Bundle' },
                        { name: 'Medical/Compassionate Leave Deferral Form', size: '122 KB', type: 'PDF Document' },
                        { name: 'Student Refund Request Application Form', size: '144 KB', type: 'PDF Document' }
                      ].map((doc, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <FileText className="h-6 w-6 text-brand-red shrink-0" />
                            <div>
                              <span className="font-bold text-xs text-slate-800 block">{doc.name}</span>
                              <span className="text-[10px] uppercase font-semibold text-slate-400 font-mono inline-flex gap-1.5 mt-0.5">
                                <span>{doc.type}</span>
                                <span>•</span>
                                <span>{doc.size}</span>
                              </span>
                            </div>
                          </div>
                          <button className="mt-3 sm:mt-0 flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 text-[#D22129] rounded-lg text-xs font-bold hover:bg-[#D22129] hover:text-white transition-all">
                            <Download className="h-3.5 w-3.5" /> Download
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border border-dashed border-slate-200 bg-slate-50/40 rounded-3xl p-6 text-center">
                      <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                      <span className="text-xs font-bold text-slate-800 block mb-1">Upload Completed Document Form</span>
                      <p className="text-[10px] text-slate-500 mb-4 max-w-sm mx-auto">Forms must be signed clearly. Supports PDF, JPEG formats up to 10MB.</p>
                      <button className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl text-xs font-bold shadow-sm transition-all">
                        Choose Signed File
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. PDF POLICIES MODAL */}
                {selectedResourceId === 'policies' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium font-sans">AITC is committed under the National Code of Practice & Australian Standards. View student guidelines:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Academic Progress Policy', desc: 'Detailing competence assessment standards, failure policies, and review procedures.', update: 'Amended Nov 2025' },
                        { title: 'Refund and Cancellation Policy', desc: 'Full terms regarding deposit return, course fee write-offs, and exceptional grounds.', update: 'Amended Oct 2025' },
                        { title: 'Student Safety and PPE Guidelines', desc: 'Mandatory work clothing, site code of conduct, and physical emergency steps.', update: 'Amended Jan 2026' },
                        { title: 'Complaints Policy and Charter', desc: 'Process timeline and resolution mechanics for operational or personal grievances.', update: 'Amended Aug 2025' }
                      ].map((policy, idx) => (
                        <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-white hover:border-brand-red/35 transition-colors shadow-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <FileCheck className="h-4.5 w-4.5 text-brand-red" />
                              <span className="font-bold text-xs text-slate-800">{policy.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">{policy.desc}</p>
                          </div>
                          <div className="flex items-center justify-between mt-auto border-t border-slate-50 pt-3">
                            <span className="text-[9px] font-bold text-slate-400 font-mono tracking-wider block uppercase">{policy.update}</span>
                            <button className="text-[11px] font-bold text-brand-red hover:underline cursor-pointer">View Policy</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. STUDENT DIGITAL MAIL */}
                {selectedResourceId === 'mail' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium">Your formal student communications mailbox and induction channels for <strong className="text-brand-red font-mono">learnataitc@gmail.com</strong>:</p>
                    
                    {/* Inbox Nav headers */}
                    <div className="flex gap-2 border-b border-slate-100 pb-3">
                      <button 
                        onClick={() => { setMailFilter('inbox'); setSelectedMail(null); }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${mailFilter === 'inbox' ? 'bg-brand-red/5 text-brand-red border border-brand-red/20' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        Inbox ({mockMails.length})
                      </button>
                      <button 
                        onClick={() => { setMailFilter('sent'); setSelectedMail(null); }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${mailFilter === 'sent' ? 'bg-brand-red/5 text-brand-red border border-brand-red/20' : 'text-slate-500 hover:bg-slate-50'}`}
                      >
                        Sent ({sentMails.length})
                      </button>
                      <button 
                        onClick={() => { setMailFilter('compose'); setSelectedMail(null); }}
                        className="ml-auto px-3.5 py-1.5 bg-brand-red hover:bg-[#B51C22] text-white rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-1 font-display"
                      >
                        Compose Mail
                      </button>
                    </div>

                    {showMailSuccess && (
                      <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl text-xs font-bold text-center">
                        Message sent successfully to AITC Academic Administration!
                      </div>
                    )}

                    {/* Mail View screen split */}
                    {mailFilter === 'compose' ? (
                      <form onSubmit={handleSendMail} className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">To</label>
                          <input 
                            type="text" 
                            value={composeTo} 
                            disabled 
                            className="w-full p-2.5 bg-slate-100 border border-slate-200 text-slate-500 text-xs rounded-xl cursor-not-allowed" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Subject</label>
                          <input 
                            type="text" 
                            required
                            placeholder="Enter message subject..."
                            value={composeSubject}
                            onChange={(e) => setComposeSubject(e.target.value)}
                            className="w-full p-2.5 bg-white border border-slate-200 text-xs rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-slate-800" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Body Text</label>
                          <textarea 
                            required
                            rows={4}
                            placeholder="Describe your enquiry to administrative trainers..."
                            value={composeBody}
                            onChange={(e) => setComposeBody(e.target.value)}
                            className="w-full p-2.5 bg-white border border-slate-200 text-xs rounded-xl focus:border-brand-red focus:ring-1 focus:ring-brand-red text-slate-800 font-sans" 
                          />
                        </div>
                        <div className="flex justify-end">
                          <button 
                            type="submit"
                            className="px-5 py-2.5 bg-brand-red hover:bg-[#B51C22] text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 font-display"
                          >
                            <Send className="h-3.5 w-3.5" /> Send Message
                          </button>
                        </div>
                      </form>
                    ) : selectedMail ? (
                      <div className="border border-slate-150 rounded-2xl p-5 bg-white space-y-4">
                        <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                          <div>
                            <span className="font-bold text-xs text-slate-800 block">{selectedMail.subject}</span>
                            <span className="text-[10px] text-slate-500 block mt-0.5">From: {selectedMail.sender}</span>
                          </div>
                          <span className="text-[9px] font-semibold text-slate-400 uppercase font-mono">{selectedMail.date}</span>
                        </div>
                        <p className="text-xs text-slate-600 whitespace-pre-line leading-relaxed font-sans">{selectedMail.body}</p>
                        <button 
                          onClick={() => setSelectedMail(null)}
                          className="pt-3 text-[11px] font-bold text-brand-red hover:underline flex items-center gap-1 font-display"
                        >
                          ← Back to list
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {mailFilter === 'inbox' ? (
                          mockMails.map((mail) => (
                            <div 
                              key={mail.id} 
                              onClick={() => setSelectedMail(mail)}
                              className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-brand-red/5 hover:border-brand-red/20 cursor-pointer transition-all flex justify-between items-center"
                            >
                              <div className="min-w-0 flex-1 pr-4">
                                <span className="font-bold text-xs text-brand-red block truncate">{mail.sender}</span>
                                <span className="text-xs font-semibold text-slate-800 block truncate mt-0.5">{mail.subject}</span>
                                <span className="text-[10px] text-slate-400 block truncate font-sans mt-0.5">{mail.body}</span>
                              </div>
                              <span className="text-[9px] font-bold text-slate-400 font-mono text-right shrink-0">{mail.date}</span>
                            </div>
                          ))
                        ) : (
                          sentMails.length === 0 ? (
                            <div className="text-center py-8 text-xs text-slate-400 font-sans">No sent communications yet.</div>
                          ) : (
                            sentMails.map((mail) => (
                              <div 
                                key={mail.id} 
                                onClick={() => setSelectedMail(mail)}
                                className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-brand-red/5 hover:border-brand-red/20 cursor-pointer transition-all flex justify-between items-center"
                              >
                                <div className="min-w-0 flex-1 pr-4">
                                  <span className="font-bold text-xs text-brand-red block">sent to: {composeTo}</span>
                                  <span className="text-xs font-semibold text-slate-800 block truncate mt-0.5">{mail.subject}</span>
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 font-mono text-right shrink-0">{mail.date}</span>
                              </div>
                            ))
                          )
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* 6. LMS LOGIN */}
                {selectedResourceId === 'lms' && (
                  <div className="space-y-6 max-w-md mx-auto py-4">
                    <p className="text-xs text-slate-500 text-center mb-6 leading-relaxed">Enter your registered AITC student identification credentials to access the online Learning Management System portal:</p>
                    
                    {lmsLoggedIn ? (
                      <div className="text-center space-y-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto" />
                        <div>
                          <span className="font-bold text-base text-slate-800 block">Authenticated Successfully!</span>
                          <p className="text-xs text-slate-500 mt-1">Connecting to AITC LMS secure cloud environments...</p>
                        </div>
                        <div className="p-3.5 bg-white rounded-xl border border-emerald-100 inline-block">
                          <span className="text-xs font-semibold text-slate-700 block">Redirecting to:</span>
                          <span className="text-[11px] font-bold text-[#D22129] font-mono select-all">https://lms.aitc.edu.au/dashboard</span>
                        </div>
                        <button 
                          onClick={() => setLmsLoggedIn(false)}
                          className="block text-slate-400 text-xs font-semibold underline mx-auto mt-4"
                        >
                          Sign out of session
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={(e) => { e.preventDefault(); setLmsLoggedIn(true); }} className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Student Username / Email</label>
                          <input 
                            type="text" 
                            required
                            placeholder="e.g. s30669@aitc.edu.au"
                            value={lmsUsername}
                            onChange={(e) => setLmsUsername(e.target.value)}
                            className="w-full p-3 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-brand-red focus:border-brand-red font-sans text-slate-800 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-display">Password</label>
                          <input 
                            type="password" 
                            required
                            placeholder="••••••••••••"
                            value={lmsPassword}
                            onChange={(e) => setLmsPassword(e.target.value)}
                            className="w-full p-3 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-brand-red focus:border-brand-red font-sans text-slate-800 bg-white"
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-3 bg-brand-red hover:bg-[#B51C22] text-white rounded-xl font-bold text-xs shadow-sm transition-all uppercase tracking-wider font-display"
                        >
                          Login to LMS Portal
                        </button>
                        <p className="text-center text-[10px] text-slate-400 leading-relaxed font-medium">By loggin in, you abide by the IT Security Charter and Code of Conduct. Default login details are in your initial Induction email.</p>
                      </form>
                    )}
                  </div>
                )}

                {/* 7. FINANCE SUPPORT */}
                {selectedResourceId === 'finance' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium">Manage tuition payments, direct debit programs, or schedule payment extensions:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-slate-100 bg-slate-50 p-5 rounded-2xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Standard Tuition Installments</span>
                        <h4 className="font-bold text-sm text-slate-800 mb-2">Flexible Payment Plans</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">AITC sets flexible plans allowing monthly or term-based direct draws. Consult the accounts office to adjust default frequencies.</p>
                        <span className="text-xs font-bold text-slate-700">Service Hours: Mon - Fri (9:00 AM - 4:00 PM)</span>
                      </div>
                      
                      <div className="border border-slate-100 bg-slate-50 p-5 rounded-2xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Accounts Lodgement</span>
                        <h4 className="font-bold text-sm text-slate-800 mb-2">Request Fee Extension</h4>
                        {financeFormSubmitted ? (
                          <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-xl text-[11px] font-bold">
                            Extension request registered. Support staff will respond via Student Digital Mail within 24 hours.
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <input 
                              type="text" 
                              placeholder="Describe justification briefly..."
                              className="w-full p-2.5 bg-white border border-slate-200 text-xs rounded-lg" 
                            />
                            <button 
                              onClick={() => setFinanceFormSubmitted(true)}
                              className="w-full py-2 bg-brand-red hover:bg-[#B51C22] text-white rounded-lg text-xs font-bold tracking-wide transition-all font-display cursor-pointer"
                            >
                              Submit Extension Lodge
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-2xl flex gap-3">
                      <div className="text-amber-600 shrink-0 select-none">⚠️</div>
                      <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
                        Ensure you maintain active direct account status. Overdue installments exceeding 14 academic days without formal extensions can restrict your active training workshops and assessment log submissions.
                      </p>
                    </div>
                  </div>
                )}

                {/* 8. LEARNING AND ASSESSMENT SUPPORT */}
                {selectedResourceId === 'learning' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium">AITC holds dedicated academic support workshops for technical numeracy, LLN (Language, Literacy, and Numeracy), and blueprint structural theory:</p>
                    <div className="space-y-4">
                      {[
                        { title: 'LLN - Academic Writing & Language Training', timing: 'Every Tuesday 3:30 PM - 5:00 PM', location: 'Brisbane City Hub Room 402', coach: 'Dr. Evelyn Carter' },
                        { title: 'Trade Mathematics & Blueprint Foundations', timing: 'Every Thursday 4:00 PM - 5:30 PM', location: 'Salisbury Training Workshop Bay B', coach: 'Mark Davidson' },
                        { title: 'Assessment Portfolio Prep Review', timing: 'Friday 1:00 PM - 3:00 PM', location: 'Online Zoom Class Platform', coach: 'Sarah Jenkins (Adviser Team)' }
                      ].map((workshop, idx) => (
                        <div key={idx} className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-brand-red/5 hover:border-brand-red/25 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <span className="font-bold text-xs text-slate-800 block mb-1">{workshop.title}</span>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500 uppercase font-semibold font-mono tracking-wide">
                              <span>Timing: {workshop.timing}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>Venue: {workshop.location}</span>
                            </div>
                          </div>
                          <div>
                            <button className="px-3.5 py-1.5 bg-brand-red hover:bg-[#B51C22] text-white rounded-lg text-xs font-bold transition-all shrink-0 shadow-sm font-display cursor-pointer">
                              Book Slot
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 10. STUDENT HANDBOOK */}
                {selectedResourceId === 'handbook' && (
                  <div className="space-y-6">
                    {/* Official Pinata Link Banner */}
                    <div className="p-4 rounded-2xl bg-brand-red/[0.03] border border-brand-red/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-brand-red/5">
                          <FileText className="h-8 w-8 text-brand-red shrink-0" />
                        </div>
                        <div>
                          <span className="font-bold text-sm text-slate-850 block">Official Student Handbook PDF</span>
                          <span className="text-[11px] text-slate-500 block leading-tight">Complete academic rules, student codes, and compliance guidelines.</span>
                        </div>
                      </div>
                      <a 
                        href="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeihmyweo7qtspxls7ot2xvvody3dk4zygylg3uaq3dwrkhx5n7c5wu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-4 py-2 bg-brand-red hover:bg-[#B51C22] text-white rounded-xl text-xs font-bold shadow-sm transition-all text-center shrink-0 cursor-pointer"
                      >
                        <Download className="h-3.5 w-3.5" /> View / Download PDF
                      </a>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-2">Search chapters inside the comprehensive AITC Student Handbook rules:</p>
                      <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="Search handbook index (e.g. attendance, PPE, academic)..."
                          value={handbookSearch}
                          onChange={(e) => setHandbookSearch(e.target.value)}
                          className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-red focus:border-brand-red" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3 font-sans">
                      {[
                        {
                          num: 'Chapter 1: Enrollment Rules & Attendance Standards',
                          desc: 'Students must maintain a scheduled attendance average of minimum 80% over active educational semesters. Attendance records are updated at the close of every study session.'
                        },
                        {
                          num: 'Chapter 2: Academic Integrity & Deferral Charters',
                          desc: 'Plagiarism on theory assessments leads to warning protocols. For complete terms regarding application re-submissions, view AITC guidelines.'
                        },
                        {
                          num: 'Chapter 3: Work Health & Safety (WHS) codes on Live Sites',
                          desc: 'Safety is our primary objective. Strictly implement physical equipment procedures. PPE violations risk student induction status.'
                        }
                      ].filter(chapter => 
                        chapter.num.toLowerCase().includes(handbookSearch.toLowerCase()) || 
                        chapter.desc.toLowerCase().includes(handbookSearch.toLowerCase())
                      ).map((chapter, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <span className="font-bold text-xs text-slate-800 block">{chapter.num}</span>
                          <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{chapter.desc}</p>
                        </div>
                      ))}
                      {[
                        {
                          num: 'Chapter 1: Enrollment Rules & Attendance Standards',
                          desc: 'Students must maintain a scheduled attendance average of minimum 80% over active educational semesters. Attendance records are updated at the close of every study session.'
                        },
                        {
                          num: 'Chapter 2: Academic Integrity & Deferral Charters',
                          desc: 'Plagiarism on theory assessments leads to warning protocols. For complete terms regarding application re-submissions, view AITC guidelines.'
                        },
                        {
                          num: 'Chapter 3: Work Health & Safety (WHS) codes on Live Sites',
                          desc: 'Safety is our primary objective. Strictly implement physical equipment procedures. PPE violations risk student induction status.'
                        }
                      ].filter(chapter => 
                        chapter.num.toLowerCase().includes(handbookSearch.toLowerCase()) || 
                        chapter.desc.toLowerCase().includes(handbookSearch.toLowerCase())
                      ).length === 0 && (
                        <p className="text-center text-xs text-slate-400 py-4 font-medium">No chapters matched your search query. Try searching 'PPE' or 'attendance'.</p>
                      )}
                    </div>

                    <div className="flex justify-center border-t border-slate-50 pt-4">
                      <a 
                        href="https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeihmyweo7qtspxls7ot2xvvody3dk4zygylg3uaq3dwrkhx5n7c5wu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
                      >
                        <Download className="h-4 w-4" /> Download Complete Handbook (PDF • 4.8MB)
                      </a>
                    </div>
                  </div>
                )}

                {/* 11. COUNSELLING & WELLBEING */}
                {selectedResourceId === 'wellbeing' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium font-sans">We prioritize your mental health & emotional wellbeing on and off-campus. Connect with confidential support counseling services:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 border border-slate-100 bg-brand-red/[0.02] rounded-2xl relative overflow-hidden">
                        <HeartHandshake className="h-5 w-5 text-brand-red mb-2" />
                        <h4 className="font-bold text-sm text-slate-800 mb-2">Schedule Free Session</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed mb-4">AITC provides 3 free direct counseling sessions every year for full-time trade students with registered clinical practitioners.</p>
                        <button className="px-3.5 py-1.5 bg-brand-red hover:bg-[#B51C22] text-white rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition-all shadow-sm font-display cursor-pointer">
                          Request Callback
                        </button>
                      </div>

                      <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-2xl relative">
                        <Sparkles className="h-5 w-5 text-brand-red mb-2" />
                        <h4 className="font-bold text-sm text-slate-800 mb-2 font-display">Calming Mind Check-In</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed mb-4 font-sans">Take a 10-second moment. Adjust focus. Follow the paced visual expansion breathing bubble indicators below.</p>
                        
                        {/* Breathing Bubble Simulator */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={toggleBreathing}
                            className="px-3 py-1.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[10px] font-bold rounded-lg uppercase tracking-wide shrink-0 transition-all font-sans cursor-pointer"
                          >
                            {isBreathingIn ? 'Inhale...' : 'Exhale...'}
                          </button>
                          <div className="grow flex items-center justify-center">
                            <motion.div 
                              animate={{ scale: isBreathingIn ? 1.4 : 0.8 }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                              className="h-7 w-7 bg-brand-red/25 rounded-full flex items-center justify-center opacity-70 border border-brand-red/40"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100">
                      <span className="font-bold text-xs text-slate-800 block mb-1">National 24/7 Crisis Channels in Australia</span>
                      <p className="text-[11px] text-slate-500 leading-relaxed">Lifeline Helpline: <span className="font-bold text-slate-800">13 11 14</span> • Beyond Blue Support: <span className="font-bold text-slate-800">1300 22 4636</span></p>
                    </div>
                  </div>
                )}

                {/* 12. GRADUATION CEREMONIES */}
                {selectedResourceId === 'graduation' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium">Track standard graduation induction terms, date releases, and sizing charts:</p>
                    
                    <div className="border border-slate-100 bg-slate-50 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Annual Gala Assembly</span>
                        <h4 className="font-bold text-sm text-slate-800 mb-1">AITC Cohort Graduation Spring 2026</h4>
                        <p className="text-xs text-slate-500">Date slot: November 18, 2026 • Brisbane Convention & Exhibition Center</p>
                      </div>
                      <button className="px-4 py-2 bg-[#D22129] hover:bg-[#B51C22] text-white text-xs font-bold rounded-xl shadow-sm transition-all shrink-0">
                        Register Attendance
                      </button>
                    </div>

                    <div className="space-y-3 font-sans">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block tracking-wider">Frequently Asked Ceremonies Task:</span>
                      {[
                        { q: 'When do I obtain my physical certificate documents?', a: 'Certificates, diplomas, and official academic records (Testamur & Record of Results) are generated within 30 days of completing academic requirements successfully.' },
                        { q: 'Who is eligible to purchase academic entry tickets?', a: 'Students receive 2 non-transferable guest tickets with graduation registration packages. Additional allocations are requested in August.' }
                      ].map((item, id) => (
                        <div key={id} className="p-4 bg-white border border-slate-100 rounded-xl relative">
                          <span className="font-bold text-xs text-slate-800 block mb-1">{item.q}</span>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-sans">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 13. STUDENT CAREER MANAGEMENT */}
                {selectedResourceId === 'career' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium">Establishment connections directly linking trades graduates to Australian builders, developers, and trade agencies:</p>
                    
                    <div className="space-y-3">
                      {[
                        { title: 'Assistant Construction Project Manager (Grad Level)', company: 'Hutchinson Builders Pty Ltd', loc: 'Brisbane City, QLD', type: 'Full-Time • Entry Level' },
                        { title: 'First-Year Bricklaying Apprenticeship Slot', company: 'BuildGroup QLD', loc: 'Wacol, South West QLD', type: 'Apprenticeship • Paid' },
                        { title: 'Vocational Office Administration Support Coordinator', company: 'Excel Group Business', loc: 'Gold Coast, QLD', type: 'Part-Time' }
                      ].map((job, id) => (
                        <div key={id} className="p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                          <div>
                            <span className="font-bold text-xs text-slate-800 block mb-0.5">{job.title}</span>
                            <p className="text-[11px] text-slate-500 font-medium inline-flex gap-1.5 flex-wrap">
                              <span>Company: {job.company}</span>
                              <span>•</span>
                              <span>Location: {job.loc}</span>
                            </p>
                          </div>
                          <span className="px-2 py-1 bg-white border border-slate-200 text-slate-650 text-[9px] font-bold uppercase rounded-lg shadow-sm font-mono tracking-wider text-center shrink-0">
                            {job.type}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-150 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div>
                        <span className="font-bold text-xs text-brand-dark block mb-1 font-display">Resume & Interview Coaching Service</span>
                        <p className="text-[11px] text-slate-500 leading-relaxed max-w-md font-sans">Schedule a personal 30-minute review session with our career adviser to tailor your CV to local Australian employer preferences.</p>
                      </div>
                      <button className="px-3.5 py-2 bg-brand-red hover:bg-[#B51C22] text-white rounded-xl text-xs font-bold transition-all shadow-sm shrink-0 uppercase tracking-wider font-display cursor-pointer">
                        Book Advisors
                      </button>
                    </div>
                  </div>
                )}

                {/* 14. ACADEMIC/ARTICULATION PATHWAYS */}
                {selectedResourceId === 'pathways' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium leading-relaxed font-sans">AITC designs clear learning pipelines. Review academic options mapping qualifications into advanced industrial structures:</p>
                    
                    {/* Diagram container */}
                    <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100/60 relative space-y-6">
                      <div className="flex flex-col md:flex-row gap-4 justify-between items-center relative">
                        {/* Box 1 */}
                        <div className="w-full md:w-1/3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center relative z-10 hover:border-[#D22129] transition-all">
                          <span className="px-2 py-0.5 bg-red-50 text-brand-red text-[9px] uppercase font-bold tracking-widest rounded-md border border-red-100 inline-block mb-2 font-display">Primary Phase</span>
                          <h4 className="font-bold text-xs text-slate-800 mb-1 font-display">Certificate III Level</h4>
                          <p className="text-[10px] text-slate-400">Core Practical Trade Knowledge (e.g. Bricklaying, Blocklaying)</p>
                        </div>

                        <div className="hidden md:block text-slate-350 select-none text-lg">➔</div>

                        {/* Box 2 */}
                        <div className="w-full md:w-1/3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center relative z-10 hover:border-[#D22129] transition-all">
                          <span className="px-2 py-0.5 bg-slate-100 text-brand-dark text-[9px] uppercase font-bold tracking-widest rounded-md border border-slate-200 inline-block mb-2 font-display">Supervisor Level</span>
                          <h4 className="font-bold text-xs text-slate-800 mb-1 font-display">Diploma Level</h4>
                          <p className="text-[10px] text-slate-400">Construction Supervision, Managing Projects & Safety (Building)</p>
                        </div>

                        <div className="hidden md:block text-slate-350 select-none text-lg">➔</div>

                        {/* Box 3 */}
                        <div className="w-full md:w-1/3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center relative z-10 hover:border-[#D22129] transition-all">
                          <span className="px-2 py-0.5 bg-red-50 text-brand-red text-[9px] uppercase font-bold tracking-widest rounded-md border border-red-100 inline-block mb-2 font-display">Director Level</span>
                          <h4 className="font-bold text-xs text-slate-800 mb-1 font-display">Graduate Diploma</h4>
                          <p className="text-[10px] text-slate-400">Strategic Leadership, Business Strategy (Learning/Management)</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                      <span className="font-bold text-xs text-slate-800 block mb-1">University Pathways</span>
                      <p className="text-[11px] text-slate-500 leading-relaxed">Successful qualification graduates who hold AITC diplomas can apply for direct entry credit structures with partnering Australian universities to gain credit points into degrees of Construction Management or Commerce.</p>
                    </div>
                  </div>
                )}

                {/* 15. COMPLAINTS & APPEALS */}
                {selectedResourceId === 'appeals' && (
                  <div className="space-y-6">
                    <p className="text-xs text-slate-500 font-medium leading-relaxed font-sans">AITC establishes transparent, ethical avenues for resolution under strict vocational training guidelines. Submit formal incident forms directly below:</p>
                    
                    {complaintSubmitted ? (
                      <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center space-y-3">
                        <CheckCircle className="h-10 w-10 text-emerald-500 mx-auto" />
                        <h4 className="font-bold text-sm text-slate-800">Formal Lodge Registered</h4>
                        <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">The Student Advocacy Adviser is notified. Your complaint ID is #AITC-6699. Investigations and contact calls occur strictly within 5 academic working days.</p>
                      </div>
                    ) : (
                      <form onSubmit={(e) => { e.preventDefault(); setComplaintSubmitted(true); }} className="space-y-4 font-sans">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Grievance Category</label>
                            <select className="w-full p-2.5 bg-white border border-slate-200 text-xs rounded-xl focus:ring-1 focus:ring-brand-red focus:border-brand-red">
                              <option>Academic Grading Appeals</option>
                              <option>Infrastructure/Safety Concern</option>
                              <option>Staff/Student Code Incident</option>
                              <option>Finance Terms Objection</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Student ID reference</label>
                            <input 
                              type="text" 
                              required
                              placeholder="e.g. s30669"
                              className="w-full p-2.5 bg-white border border-slate-200 text-xs rounded-xl focus:ring-1 focus:ring-brand-red focus:border-brand-red" 
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Grievance Detail & Evidence</label>
                          <textarea 
                            required
                            rows={3} 
                            placeholder="Provide dates, locations, description, and key facts clearly..."
                            className="w-full p-2.5 bg-white border border-slate-200 text-xs rounded-xl focus:ring-1 focus:ring-brand-red focus:border-brand-red font-sans text-slate-800" 
                          />
                        </div>
                        <button 
                          type="submit"
                          className="w-full py-2.5 bg-brand-red hover:bg-[#B51C22] text-white font-bold text-xs rounded-xl transition-all shadow-sm uppercase tracking-wider font-display cursor-pointer"
                        >
                          Lodge Formal Charter Appeal
                        </button>
                        <p className="text-center text-[9px] text-slate-400 leading-relaxed font-semibold">Your grievance is handled confidentially and complies entirely with administrative privacy codes inside Australia.</p>
                      </form>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 md:p-8 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/50">
                <button
                  onClick={() => setSelectedResourceId(null)}
                  className="px-5 py-2.5 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors bg-white focus:outline-none"
                >
                  Close Panel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
