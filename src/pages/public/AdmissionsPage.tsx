import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Calendar,
  CheckCircle2,
  Award,
  HelpCircle,
  Phone,
  Mail,
  Send,
  ArrowRight,
  ShieldAlert,
  Download
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const AdmissionsPage: React.FC = () => {
  const { showToast } = useToast();

  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('B.E. Computer Science & Engineering');
  const [examType, setExamType] = useState('KCET');
  const [rankScore, setRankScore] = useState('');

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) {
      showToast('Please fill out all required personal details', 'warning');
      return;
    }
    showToast(
      `Application submitted successfully for ${applicantName}! Your application reference is SDIT-2026-${Math.floor(
        1000 + Math.random() * 9000
      )}.`,
      'success'
    );
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setRankScore('');
  };

  const timelineSteps = [
    {
      num: '01',
      title: 'Explore Programs',
      desc: 'Review B.E., M.Tech, MBA, and MCA course structures, specialization options, and laboratory capabilities.'
    },
    {
      num: '02',
      title: 'Check Eligibility',
      desc: 'Verify academic cutoff marks (10+2 PCM minimum 45% / 40% for reserved categories) and valid entrance scores.'
    },
    {
      num: '03',
      title: 'Submit Application',
      desc: 'Complete the online application form or visit the campus admissions office with academic credentials.'
    },
    {
      num: '04',
      title: 'Document Verification',
      desc: 'Present original 10th & 12th marks cards, transfer certificate, caste/income certificates, and entrance rank cards.'
    },
    {
      num: '05',
      title: 'Admission Confirmation',
      desc: 'Receive provisional admission offer letter and complete admission formalities under VTU norms.'
    },
    {
      num: '06',
      title: 'Begin Your SDIT Journey',
      desc: 'Attend the campus orientation, receive institutional credentials, and join academic sessions.'
    }
  ];

  const requiredDocuments = [
    'SSLC / 10th Standard Marks Card (Original & 3 sets of photocopies)',
    '12th / 2nd PUC Equivalent Marks Card',
    'KCET / COMEDK / PGCET / KMAT Rank Card',
    'Transfer Certificate (TC) & Migration Certificate (if outside Karnataka)',
    'Study & Conduct / Character Certificate (minimum 7 years in Karnataka for KCET)',
    'Recent passport-size photographs (6 copies)',
    'Aadhaar Card Copy & Income / Caste Certificate (if applicable)'
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Hero - White background, crisp black text */}
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
            Admissions Office · 2026-27
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Admissions at SDIT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Join a forward-looking community of engineers, innovators, and business leaders.
            Explore eligibility pathways, application milestones, and counseling procedures.
          </motion.p>
        </div>
      </section>

      {/* 6-Step Visual Timeline */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold">
              Structured Pathway
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
              Admission Process Timeline
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Six straightforward steps to secure your seat at Shree Devi Institute of Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3 relative overflow-hidden shadow-xs"
              >
                <div className="w-10 h-10 rounded-full bg-[#BC0202] text-white flex items-center justify-center font-display font-bold text-sm shadow-xs">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-base text-black">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Application Form + Details */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white border border-neutral-200 rounded-lg p-6 sm:p-8 space-y-6 shadow-xs"
            >
              <div className="border-b border-neutral-100 pb-4">
                <span className="text-xs font-mono uppercase text-[#BC0202] font-bold">
                  Online Registration
                </span>
                <h3 className="font-display font-bold text-xl text-black mt-1">
                  Start Your Application
                </h3>
                <p className="text-xs text-neutral-600 mt-1 font-normal">
                  Submit your preliminary credentials. Our admissions team will verify your
                  documents and guide your counseling process.
                </p>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="As printed on 10th marks card"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98450 XXXXX"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-800 mb-1">
                    Program Choice *
                  </label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202]"
                  >
                    <option value="B.E. Computer Science & Engineering">
                      B.E. Computer Science & Engineering
                    </option>
                    <option value="B.E. Computer Science (AI & ML)">
                      B.E. Computer Science & Engineering (AI & ML)
                    </option>
                    <option value="B.E. AI & Data Science">
                      B.E. Artificial Intelligence & Data Science
                    </option>
                    <option value="B.E. Information Science & Engineering">
                      B.E. Information Science & Engineering
                    </option>
                    <option value="B.E. Electronics & Communication">
                      B.E. Electronics & Communication
                    </option>
                    <option value="B.E. Aeronautical Engineering">
                      B.E. Aeronautical Engineering
                    </option>
                    <option value="B.E. Mechanical Engineering">B.E. Mechanical Engineering</option>
                    <option value="B.E. Civil Engineering">B.E. Civil Engineering</option>
                    <option value="Master of Business Administration (MBA)">
                      Master of Business Administration (MBA)
                    </option>
                    <option value="Master of Computer Applications (MCA)">
                      Master of Computer Applications (MCA)
                    </option>
                    <option value="M.Tech Construction Technology">
                      M.Tech Construction Technology
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Entrance Exam
                    </label>
                    <select
                      value={examType}
                      onChange={(e) => setExamType(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202]"
                    >
                      <option value="KCET">KCET (Karnataka CET)</option>
                      <option value="COMEDK">COMEDK UGET</option>
                      <option value="PGCET">Karnataka PGCET</option>
                      <option value="KMAT">KMAT</option>
                      <option value="Management">Institutional Quota</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-800 mb-1">
                      Rank / 12th % (Estimated)
                    </label>
                    <input
                      type="text"
                      value={rankScore}
                      onChange={(e) => setRankScore(e.target.value)}
                      placeholder="e.g. KCET 18,500 or 88%"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded px-3 py-2 text-xs text-black focus:outline-hidden focus:border-[#BC0202]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Submit Admission Application</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Right: Requirements & Dates */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Required Documents */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-black">
                  <FileText className="w-4 h-4 text-[#BC0202]" />
                  <h3 className="font-display font-bold text-base">Required Documents</h3>
                </div>
                <ul className="space-y-2 text-xs text-neutral-700 font-normal">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#BC0202] font-bold">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fee Information Notice */}
              <div className="bg-white border border-neutral-200 rounded-lg p-6 space-y-3 shadow-xs">
                <span className="text-xs font-mono uppercase text-[#BC0202] font-bold">
                  Fee Regulations
                </span>
                <h4 className="font-display font-bold text-base text-black">
                  Statutory Fee Structure
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                  Tuition fees for government quota seats are strictly governed by the Karnataka
                  Examinations Authority (KEA) and the Department of Higher Education, Government of
                  Karnataka. Contact the institutional admissions desk for quota category breakdowns.
                </p>
              </div>

              {/* Admissions Contact - Clean white box with black text */}
              <div className="bg-white text-black border border-neutral-200 rounded-lg p-6 space-y-3 shadow-xs">
                <h4 className="font-display font-bold text-base text-black">
                  Admissions Helpdesk
                </h4>
                <div className="space-y-2 text-xs text-neutral-800 font-medium">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#BC0202]" />
                    <span>+91 824 2254104 / +91 824 2254102</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#BC0202]" />
                    <span>info@sdc.ac.in / admissions@sdc.ac.in</span>
                  </div>
                  <div className="text-[11px] text-neutral-600 pt-1 font-normal">
                    Campus Desk: Ground Floor, Administrative Block, Kenjar, Mangaluru
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
