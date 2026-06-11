import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  Upload, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';

interface FormItem {
  name: string;
  code: string;
  size: string;
  type: string;
  description: string;
  category: 'Enrolment' | 'Academic' | 'Finance' | 'General';
  downloadUrl: string;
}

export default function FormsPage() {
  const [downloadedForm, setDownloadedForm] = useState<string | null>(null);
  
  // Upload States
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [formData, setFormData] = useState({
    studentId: '',
    notes: '',
    formType: 'AITC Enrolment Variation Form'
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const forms: FormItem[] = [
    { 
      name: 'Enrolment Extension Request Form', 
      code: 'FORM-EER-2026',
      size: '134 KB', 
      type: 'PDF Document',
      category: 'Enrolment',
      description: 'Request to extend the duration of your current enrolment to complete outstanding practical or theory modules.',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemamgnaiqinak3qb26n4cd5tvw3enpkfxawaj6b6gwnvnrkd2ubq/Enrolment%20Extension%20Request%20Form_V2.0.pdf'
    },
    {
      name: 'Complaint and Appeal Form',
      code: 'FORM-CAF-2026',
      size: '120 KB',
      type: 'PDF Document',
      category: 'General',
      description: 'Formally lodge academic or non-academic complaints, service grievances, or assessment outcome appeals.',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemamgnaiqinak3qb26n4cd5tvw3enpkfxawaj6b6gwnvnrkd2ubq/Complaint%20and%20Appeal%20Form_V2.0.pdf'
    },
    {
      name: 'Critical Record Form',
      code: 'FORM-CR-2026',
      size: '110 KB',
      type: 'PDF Document',
      category: 'General',
      description: 'Official template for registering vital student updates, major health disclosures, or official institutional requests.',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemamgnaiqinak3qb26n4cd5tvw3enpkfxawaj6b6gwnvnrkd2ubq/Critical%20Incident%20Record%20Form_V2.0.pdf'
    },
    {
      name: 'ISP Request Form',
      code: 'FORM-ISP-2026',
      size: '128 KB',
      type: 'PDF Document',
      category: 'Academic',
      description: 'Individual Study Plan request form to adjust course scheduling, customize practical training milestones, or defer active blocks.',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemamgnaiqinak3qb26n4cd5tvw3enpkfxawaj6b6gwnvnrkd2ubq/ISP%20Request%20Form_V2.0.pdf'
    },
    {
      name: 'Refund Application Form',
      code: 'FORM-RAF-2026',
      size: '145 KB',
      type: 'PDF Document',
      category: 'Finance',
      description: 'Apply for course fee refunds, tuition balance reconciliations, or cancellation credit transfers.',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemamgnaiqinak3qb26n4cd5tvw3enpkfxawaj6b6gwnvnrkd2ubq/Refund%20Application%20Form_V2.0.pdf'
    },
    {
      name: 'Special Consideration Form',
      code: 'FORM-SCF-2026',
      size: '135 KB',
      type: 'PDF Document',
      category: 'Academic',
      description: 'Apply for assessment extensions, alternative trade testing blocks, or study allowances due to illness or special circumstances.',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemamgnaiqinak3qb26n4cd5tvw3enpkfxawaj6b6gwnvnrkd2ubq/Special%20Consideration%20Form%20V2.0.pdf'
    },
    {
      name: 'Withdrawal and Release Form',
      code: 'FORM-WRF-2026',
      size: '150 KB',
      type: 'PDF Document',
      category: 'Enrolment',
      description: 'Lodge formal applications for course withdrawals, program transitions, or official institutional release certificates.',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiemamgnaiqinak3qb26n4cd5tvw3enpkfxawaj6b6gwnvnrkd2ubq/Withdrawal%20and%20Release%20Form_V2.0.pdf'
    }
  ];

  const filteredForms = forms;

  const handleDownload = (formName: string) => {
    setDownloadedForm(formName);
    // Auto-clear success state after a few seconds
    setTimeout(() => {
      setDownloadedForm(null);
    }, 3000);
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds the 10MB limit.");
      return;
    }
    setUploadedFile(file);
    setUploadProgress(0);
    setUploadSuccess(false);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadSuccess(true);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      alert("Please upload a completed signed document first.");
      return;
    }
    if (!formData.studentId) {
      alert("Please enter a valid student ID.");
      return;
    }

    setUploadSuccess(true);
    // Success flow finishes complete
  };

  const handleResetUpload = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setUploadSuccess(false);
    setFormData({
      studentId: '',
      notes: '',
      formType: 'AITC Enrolment Variation Form'
    });
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/student-help-hub" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-display text-xs font-bold mb-6 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Student Help Hub
          </Link>
          
         
          <h1 className="text-3xl sm:text-4xl lg:text-[49px] font-extrabold tracking-tight mb-4 leading-none sm:leading-tight">
            Pdf Forms
          </h1>
          <p className="text-gray-300 max-w-2xl text-[16px] font-sans leading-relaxed">
            Download current AITC request templates, make enrolment changes, or submit files securely to academic registrars.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-8">
          
          {/* Form list container in a clean decorative grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredForms.map((form) => (
                <motion.div
                  key={form.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between items-center bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 hover:border-brand-red/10 group relative"
                >
                  {/* Centered Title */}
                  <h3 className="font-display text-base font-extrabold text-slate-900 text-center leading-snug group-hover:text-brand-red transition-colors flex items-center justify-center max-w-[240px] mb-6">
                    {form.name}
                  </h3>

                  {/* Centered PDF Form Black Link */}
                  <a
                    href={form.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleDownload(form.name)}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold font-sans tracking-wide transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                      downloadedForm === form.name
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                        : 'bg-black text-white hover:bg-brand-red border border-black hover:border-brand-red'
                    }`}
                  >
                    {downloadedForm === form.name ? (
                      <>
                        <CheckCircle className="h-3.5 w-3.5" />
                        Downloaded
                      </>
                    ) : (
                      <>
                        <FileText className="h-3.5 w-3.5" />
                        PDF Form
                      </>
                    )}
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </main>
  );
}
