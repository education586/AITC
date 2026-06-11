import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  FileText
} from 'lucide-react';

interface PolicyItem {
  id: string;
  title: string;
  downloadUrl: string;
}

export default function PoliciesPage() {
  const [downloadedPolicy, setDownloadedPolicy] = useState<string | null>(null);

  const handleDownloadPolicy = (policyName: string) => {
    setDownloadedPolicy(policyName);
    setTimeout(() => {
      setDownloadedPolicy(null);
    }, 3000);
  };

  const policies: PolicyItem[] = [
    {
      id: 'academic-misconduct',
      title: 'Academic Misconduct Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Academic%20Misconduct%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'assessment',
      title: 'Assessment Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Assessment%20Policy%20and%20Procedure_V.2.0.pdf'
    },
    {
      id: 'complaints-appeals',
      title: 'Complaints and Appeals Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Complaints%20and%20Appeals%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'credit-transfer',
      title: 'Credit Transfer Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Credit%20Transfer%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'critical-incident',
      title: 'Critical Incident Management Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Critical%20Incident%20Management%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'course-progress',
      title: 'Monitoring Course Progress and Student Attendance Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Monitoring%20Course%20Progress%20and%20Student%20Attendance%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'overseas-transfer',
      title: 'Overseas Student Transfer Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Overseas%20Student%20Transfer%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'rpl',
      title: 'Recognition of Prior Learning (RPL) Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Recognition%20of%20Prior%20Learning%20(RPL)%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'pre-enrolment',
      title: 'Pre Enrolment Policy',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeiamt2zb2wo7r3aw4hns235ctcgzyfjb5nlmsz47xxxczugce4bkva'
    },
    {
      id: 'refund-policy',
      title: 'Refund Policy and Procedure',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Refund%20Policy%20and%20Procedure_V2.0.pdf'
    },
    {
      id: 'conduct-rules',
      title: 'Student Conduct Rules',
      downloadUrl: 'https://tan-occasional-flamingo-688.mypinata.cloud/ipfs/bafybeie6lujhmha7er3b32hy5gfi257kx6trbm5rh75gu66i2wyjkqplu4/Student%20Conduct%20Rules_V1.0.pdf'
    }
  ];

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
            Pdf Policies
          </h1>
          <p className="text-gray-300 max-w-2xl text-[16px] font-sans leading-relaxed">
            AITC operations comply directly with Australian vocational standards and the National Code of Practice.
          </p>
        </div>
      </section>

      {/* Grid Layout of Policy Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-8">
          
          {/* Policy cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {policies.map((policy) => (
                <motion.div
                  key={policy.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between items-center bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 hover:border-brand-red/10 group relative animate-in fade-in-50 duration-500"
                >
                  {/* Centered Title */}
                  <h3 className="font-display text-base font-extrabold text-slate-900 text-center leading-snug group-hover:text-brand-red transition-colors flex items-center justify-center max-w-[240px] mb-6 min-h-[50px]">
                    {policy.title}
                  </h3>

                  {/* Centered PDF Policy Black Link */}
                  <a
                    href={policy.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleDownloadPolicy(policy.title)}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold font-sans tracking-wide transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98] ${
                      downloadedPolicy === policy.title
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                        : 'bg-black text-white hover:bg-brand-red border border-black hover:border-brand-red'
                    }`}
                  >
                    {downloadedPolicy === policy.title ? (
                      <>
                        <CheckCircle className="h-3.5 w-3.5" />
                        Downloaded
                      </>
                    ) : (
                      <>
                        <FileText className="h-3.5 w-3.5" />
                        PDF Policy
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
