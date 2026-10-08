import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Download,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { programsData } from '../../data/programs';
import { useToast } from '../../context/ToastContext';

export const ProgramDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { showToast } = useToast();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const program = programsData.find((p) => p.id === id) || programsData[0];

  const handleDownloadBrochure = () => {
    showToast(`Downloading academic curriculum brochure for ${program.name}...`, 'info');
  };

  const programFaqs = [
    {
      q: `What is the admission qualification criteria for ${program.name}?`,
      a: program.eligibility
    },
    {
      q: 'Which university awards the degree for this course?',
      a: 'The degree is formally awarded by Visvesvaraya Technological University (VTU), Belagavi, with approval from the All India Council for Technical Education (AICTE), New Delhi.'
    },
    {
      q: 'What placement and internship support does SDIT provide?',
      a: 'Students undergo structured training by the Department of Training & Placement starting from the 5th semester, covering quantitative aptitude, programming bootcamps, and mock interviews with visiting recruitment partners.'
    },
    {
      q: 'Are there scholarship opportunities available?',
      a: 'Eligible Karnataka domicile students can apply for state government e-Pass, SSP, and merit-based concessions. Details are available with the admissions cell.'
    }
  ];

  return (
    <div className="w-full bg-white text-black">
      {/* Hero - White background, crisp black text */}
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/programs"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-600 hover:text-black font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Programs</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] border border-red-200 px-2.5 py-0.5 rounded">
                {program.degree} · Code: {program.code}
              </span>
              <span className="text-xs text-neutral-400">·</span>
              <span className="text-xs text-neutral-600 font-medium">{program.affiliation}</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-black">
              {program.name}
            </h1>

            <p className="text-sm sm:text-base text-neutral-700 max-w-3xl leading-relaxed font-normal">
              {program.overview}
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/admissions"
                className="px-6 py-3 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>Apply for this Program</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadBrochure}
              className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 text-xs font-bold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#BC0202]" />
              <span>Download Syllabus Brochure</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Program Quick Specs */}
      <section className="bg-neutral-50 border-b border-[#E5E5E5] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
            <div>
              <span className="text-neutral-500 font-medium block">Department</span>
              <span className="font-bold text-black mt-0.5 block">
                {program.department}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 font-medium block">Duration</span>
              <span className="font-bold text-black mt-0.5 block">
                {program.duration}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 font-medium block">Intake Capacity</span>
              <span className="font-bold text-black mt-0.5 block">
                Configurable Intake
              </span>
            </div>
            <div>
              <span className="text-neutral-500 font-medium block">Affiliating Body</span>
              <span className="font-bold text-black mt-0.5 block">
                VTU Belagavi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section 1: Highlights & Curriculum */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-bold text-2xl text-black">
                Why Choose this Program?
              </h2>
              <div className="space-y-3">
                {program.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="p-4 bg-neutral-50 border border-neutral-200 rounded flex items-start gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#BC0202] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                      {h}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-bold text-2xl text-black">
                Curriculum Overview
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-3 shadow-xs">
                <p className="text-xs text-neutral-600 font-medium mb-2">
                  VTU Choice Based Credit System (CBCS) Structure:
                </p>
                <div className="divide-y divide-neutral-200">
                  {program.curriculumOverview.map((c, i) => (
                    <div key={i} className="py-2.5 flex items-center justify-between text-xs">
                      <span className="font-semibold text-black">
                        {c}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-neutral-500">Core Course</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Eligibility & Careers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-display font-bold text-2xl text-black">
                Eligibility & Admission Pathway
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-4 shadow-xs">
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                  {program.eligibility}
                </p>
                <div className="pt-2 border-t border-neutral-200 space-y-2 text-xs">
                  <span className="font-bold text-black block">
                    Recognized Entrance Channels:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white border border-neutral-300 rounded font-medium text-neutral-800">
                      KCET (Karnataka CET)
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-neutral-300 rounded font-medium text-neutral-800">
                      COMEDK UGET
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-neutral-300 rounded font-medium text-neutral-800">
                      Institutional Quota
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-display font-bold text-2xl text-black">
                Career Pathways & Roles
              </h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-3 shadow-xs">
                <p className="text-xs text-neutral-600 font-medium">
                  Graduates of this discipline excel in roles such as:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {program.careers.map((career, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 bg-white rounded border border-neutral-200 text-xs font-bold text-black flex items-center gap-2 shadow-2xs"
                    >
                      <Briefcase className="w-4 h-4 text-[#BC0202] shrink-0" />
                      <span>{career}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Specialized Laboratories */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-black">
              Specialized Laboratory Facilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {program.labs.map((lab, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="p-5 bg-neutral-50 border border-neutral-200 rounded space-y-2 shadow-xs"
                >
                  <Cpu className="w-5 h-5 text-[#BC0202]" />
                  <h3 className="font-display font-bold text-sm text-black">
                    {lab}
                  </h3>
                  <p className="text-xs text-neutral-600 font-normal">
                    High-end computing hardware, simulation suites, and testing rigs adhering to VTU practical norms.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Section 4: FAQs */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-black">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {programFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-neutral-50 border border-neutral-200 rounded overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-black hover:bg-neutral-100 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#BC0202] font-mono font-bold ml-2 text-base">
                      {activeFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="p-4 pt-0 text-xs text-neutral-700 leading-relaxed border-t border-neutral-200 font-normal"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
